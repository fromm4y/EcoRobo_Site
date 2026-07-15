/* ==========================================================
   EcoRobo
   Catalog Controller

   Responsável por controlar a tela de Catálogo.
========================================================== */

import {

    renderNavbar,
    renderFooter,
    createCatalogCard,
    confirmDialog,
    showToast

}

from

"../components.js";

import {

    navigate

}

from

"../router.js";

import {

    getCurrentUser

}

from

"../auth.js";

import FirestoreService

from

"../../services/firestore_service.js";

import {

    formatDate

}

from

"../../utils/date.js";

import {

    getAppState,
    setAppState

}

from

"../state/app_state.js";

import StatisticsModel

from

"../../models/statistics.model.js";

import {

    aplicarResiduoNaEstatistica

}

from

"../../utils/statistics_helper.js";

/* ==========================================================
   Estado local
========================================================== */

let itensCatalogo = [];

let filtroAtual = "Todos";

/* ==========================================================
   Inicialização
========================================================== */

export async function initCatalogController(){

    await renderNavbar({ showBack: true });

    await renderFooter();

    configurarEventos();

    await carregarCatalogo();

}

/* ==========================================================
   Catálogo

   Itens vêm do Firestore (coleção "wastes"), mesma fonte
   usada pela Home nos "últimos escaneamentos"
   (FirestoreService.getUserWaste()).
========================================================== */

async function carregarCatalogo(){

    const grid = document.getElementById("catalogGrid");
    const empty = document.getElementById("catalogEmpty");
    const summary = document.getElementById("catalogSummary");
    const filters = document.getElementById("catalogFilters");

    if(!grid || !empty){

        return;

    }

    const usuario = getCurrentUser();

    if(!usuario){

        navigate("login");

        return;

    }

    const cache = getAppState();

    itensCatalogo = cache.catalog;

    const veioDoCache = Boolean(itensCatalogo);

    if(!itensCatalogo){

        // Só mostra o spinner quando realmente precisa buscar
        // no Firestore — se já tinha no cache, a troca é
        // praticamente instantânea e nem chega a aparecer.
        summary?.classList.add("hidden");

        filters?.classList.add("hidden");

        empty.classList.add("hidden");

        grid.classList.remove("hidden");

        grid.innerHTML = `<div class="spinner"></div>`;

        itensCatalogo =
            await FirestoreService.getUserWaste(usuario.uid);

        setAppState({ catalog: itensCatalogo });

    }

    // O cache pode ter sido preenchido como vazio numa corrida
    // (ex: o usuário entrou aqui rápido demais, antes de um
    // escaneamento terminar de salvar). Antes de mostrar o
    // estado vazio "definitivo", confirma direto no Firestore
    // — nunca confia numa lista vazia que veio só do cache.
    if(itensCatalogo.length === 0 && veioDoCache){

        itensCatalogo =
            await FirestoreService.getUserWaste(usuario.uid);

        setAppState({ catalog: itensCatalogo });

    }

    if(itensCatalogo.length === 0){

        grid.classList.add("hidden");

        summary?.classList.add("hidden");

        filters?.classList.add("hidden");

        empty.classList.remove("hidden");

        return;

    }

    empty.classList.add("hidden");

    summary?.classList.remove("hidden");

    filters?.classList.remove("hidden");

    renderizarResumo();

    renderizarFiltros();

    renderizarCards();

}

/* ==========================================================
   Resumo

   Conta a quantidade de itens ESCANEADOS (todo item conta
   pro catálogo, seja ele reciclável ou não).
========================================================== */

function renderizarResumo(){

    const total = document.getElementById("catalogTotal");

    if(!total){

        return;

    }

    total.textContent = itensCatalogo.length;

}

/* ==========================================================
   Filtros por Categoria
========================================================== */

function renderizarFiltros(){

    const container = document.getElementById("catalogFilters");

    if(!container){

        return;

    }

    const categorias = [

        "Todos",

        ...new Set(itensCatalogo.map(item => item.category))

    ];

    container.innerHTML =

        categorias

        .map(categoria => `

            <button
                class="filter-chip ${categoria === filtroAtual ? "active" : ""}"
                data-filter="${categoria}">

                ${categoria}

            </button>

        `)

        .join("");

    container

        .querySelectorAll(".filter-chip")

        .forEach(chip => {

            chip.addEventListener("click", () => {

                filtroAtual = chip.dataset.filter;

                container

                    .querySelectorAll(".filter-chip")

                    .forEach(item => item.classList.remove("active"));

                chip.classList.add("active");

                renderizarCards();

            });

        });

}

/* ==========================================================
   Cards
========================================================== */

function renderizarCards(){

    const grid = document.getElementById("catalogGrid");

    if(!grid){

        return;

    }

    const itens =

        filtroAtual === "Todos"

        ? itensCatalogo

        : itensCatalogo.filter(item => item.category === filtroAtual);

    if(itens.length === 0){

        grid.innerHTML =

            `<p class="catalog-filter-empty">Nenhum item de ${filtroAtual} ainda.</p>`;

        return;

    }

    grid.innerHTML =

        itens

        .map((item, index) => createCatalogCard({

            ...item,

            scannedAtLabel: formatDate(item.createdAt),

            delay: index * 60

        }))

        .join("");

}

/* ==========================================================
   Eventos
========================================================== */

function configurarEventos(){

    document

        .getElementById("btnCatalogScan")

        ?.addEventListener(

            "click",

            () => {

                navigate("camera");

            }

        );

    // Delegação: os cards são recriados a cada renderização
    // (renderizarCards() reescreve o innerHTML da grid), então
    // o listener fica no container fixo, não em cada botão.
    document

        .getElementById("catalogGrid")

        ?.addEventListener(

            "click",

            (event) => {

                const botaoExcluir =
                    event.target.closest(".catalog-card-delete");

                if(botaoExcluir){

                    excluirItem(botaoExcluir.dataset.deleteId);

                    return;

                }

                const card =
                    event.target.closest(".catalog-card[data-open-id]");

                if(card){

                    abrirDetalhesDoItem(card.dataset.openId);

                }

            }

        );

}

/* ==========================================================
   Abrir Detalhes do Item

   Passa o id do item pra tela de detalhes (mesmo padrão de
   sessionStorage já usado pra "selectedImage"/"gameCategory")
   e navega — ver item-detail.controller.js.
========================================================== */

function abrirDetalhesDoItem(id){

    if(!id){

        return;

    }

    sessionStorage.setItem("catalogItemId", id);

    navigate("itemDetail");

}

/* ==========================================================
   Excluir Item

   Remove o resíduo do Firestore, reverte exatamente os
   números que foram somados quando ele foi escaneado
   (totalScans, reciclável/não reciclável, categoria e CO₂) e
   atualiza o cache local (app_state) sem precisar recarregar
   tudo. Streak e conquistas não são revertidos — uma vez
   escaneado/desbloqueado, continua valendo.
========================================================== */

async function excluirItem(id){

    if(!id){

        return;

    }

    const item = itensCatalogo.find(i => i.id === id);

    if(!item){

        return;

    }

    const confirmado = await confirmDialog({

        title: "Excluir este item?",

        message: "Tem certeza que deseja excluir este item? Essa ação não pode ser desfeita.",

        confirmText: "Excluir",

        danger: true

    });

    if(!confirmado){

        return;

    }

    const usuario = getCurrentUser();

    if(!usuario){

        return;

    }

    const sucesso = await FirestoreService.deleteWaste(id);

    if(!sucesso){

        showToast("Não foi possível excluir o item. Tente novamente.", "error");

        return;

    }

    const dadosUsuario = await FirestoreService.getUserData(usuario.uid);

    const statistics =
        dadosUsuario?.statistics || new StatisticsModel();

    aplicarResiduoNaEstatistica(statistics, item, -1);

    await FirestoreService.updateStatistics(usuario.uid, statistics);

    itensCatalogo = itensCatalogo.filter(i => i.id !== id);

    setAppState({

        catalog: itensCatalogo,

        statistics

    });

    showToast("Item excluído do catálogo.");

    if(itensCatalogo.length === 0){

        await carregarCatalogo();

    }

    else{

        renderizarResumo();

        renderizarFiltros();

        renderizarCards();

    }

}
