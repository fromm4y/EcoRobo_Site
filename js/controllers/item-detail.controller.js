/* ==========================================================
   EcoRobo
   Item Detail Controller

   Mostra os detalhes de um resíduo já escaneado, sem rodar a
   IA de novo — reaproveita o mesmo layout visual da tela de
   Resultado (css/result.css), preenchido com os dados salvos
   daquele item. Aberto a partir de um clique num card do
   Catálogo (ver catalog.controller.js).
========================================================== */

import {

    renderNavbar,
    renderFooter

}

from

"../components.js";

import {

    navigate

}

from

"../router.js";

import FirestoreService

from

"../../services/firestore_service.js";

import {

    getAppState

}

from

"../state/app_state.js";

import {

    GAME_CATEGORIES

}

from

"../../utils/constants.js";

/* ==========================================================
   Chave usada pelo Catálogo pra passar qual item abrir (mesmo
   padrão de sessionStorage já usado pra "selectedImage" e
   "gameCategory" — dado de uso único).
========================================================== */

const ITEM_ID_KEY = "catalogItemId";

/* ==========================================================
   Inicialização
========================================================== */

export async function initItemDetailController(){

    await renderNavbar({ showBack: true });

    await renderFooter();

    configurarEventos();

    await carregarItem();

}

/* ==========================================================
   Carrega o item

   Procura primeiro no cache local (app_state.catalog — quase
   sempre já tem, já que o usuário acabou de vir da tela do
   Catálogo) antes de buscar no Firestore.
========================================================== */

async function carregarItem(){

    // Não remove a chave após ler: se o usuário reabrir essa
    // tela via botão voltar/avançar do navegador (popstate) ou
    // atualizar a página, o navigate("itemDetail") roda de novo
    // sem que o Catálogo tenha acabado de setar o id — removendo
    // a chave aqui, essa segunda entrada caía sempre em "Nenhum
    // item selecionado". Ela só é sobrescrita mesmo, no próximo
    // clique real num card do Catálogo.
    const id = sessionStorage.getItem(ITEM_ID_KEY);

    if(!id){

        mostrarErro("Nenhum item selecionado.");

        return;

    }

    const item = await buscarItem(id);

    if(!item){

        mostrarErro("Não foi possível encontrar esse item.");

        return;

    }

    mostrarConteudo();

    preencherTela(item);

    configurarBotaoAcao(item.category);

}

async function buscarItem(id){

    const cache = getAppState();

    const doCache =
        cache.catalog?.find(item => item.id === id);

    if(doCache){

        return doCache;

    }

    return await FirestoreService.getWaste(id);

}

/* ==========================================================
   Estado de Erro
========================================================== */

function mostrarErro(mensagem){

    document.getElementById("resultContent")?.classList.add("hidden");

    const erro = document.getElementById("resultError");

    if(!erro){

        return;

    }

    erro.classList.remove("hidden");

    const texto = document.getElementById("resultErrorMessage");

    if(texto && mensagem){

        texto.textContent = mensagem;

    }

}

function mostrarConteudo(){

    document.getElementById("resultError")?.classList.add("hidden");

    document.getElementById("resultContent")?.classList.remove("hidden");

}

/* ==========================================================
   Preenche informações
========================================================== */

function preencherTela(item){

    if(item.imageUrl){

        document.getElementById("resultImage").src = item.imageUrl;

    }

    document.getElementById("wasteName").textContent = item.name;

    document.getElementById("scientificName").textContent = item.scientificName;

    document.getElementById("wasteCategory").textContent = item.category;

    document.getElementById("recyclable").textContent =

        item.recyclable

        ? "Sim"

        : "Não";

    document.getElementById("trashColor").textContent = item.binColor;

    document.getElementById("decomposition").textContent = item.decomposition;

    document.getElementById("impact").textContent = item.environmentalImpact;

    document.getElementById("description").textContent = item.description;

    document.getElementById("curiosity").textContent = item.curiosity;

    const confiancaPercentual = normalizarConfianca(item.aiConfidence);

    document.getElementById("confidenceValue").textContent =

        confiancaPercentual + "%";

    setTimeout(() => {

        document

            .getElementById("confidenceBar")

            .style.width = confiancaPercentual + "%";

    }, 300);

}

/* ==========================================================
   Confiança da IA (mesma lógica de result.controller.js)
========================================================== */

function normalizarConfianca(valor){

    const numero = Number(valor) || 0;

    const percentual =
        numero <= 1
        ? numero * 100
        : numero;

    return Math.round(percentual);

}

/* ==========================================================
   Botão de Ação (Jogo x Realidade Aumentada)

   Mesma regra usada em result.controller.js: categorias em
   GAME_CATEGORIES levam pro Jogo, o resto leva pra tela de AR
   (ver ar.controller.js).
========================================================== */

function configurarBotaoAcao(category){

    const botao = document.getElementById("btnAction");

    if(!botao){

        return;

    }

    const ehJogo = GAME_CATEGORIES.includes(category);

    botao.textContent =

        ehJogo

        ? "🎮 Jogar Minigame"

        : "🥽 Ver em Realidade Aumentada";

    botao.addEventListener("click", () => {

        if(ehJogo){

            sessionStorage.setItem("gameCategory", category);

        }

        else{

            sessionStorage.setItem("arCategory", category);

        }

        navigate(ehJogo ? "game" : "ar");

    });

}

/* ==========================================================
   Eventos
========================================================== */

function configurarEventos(){

    document

        .getElementById("btnBackToCatalog")

        ?.addEventListener("click", () => {

            navigate("catalog");

        });

    document

        .getElementById("btnErrorBackToCatalog")

        ?.addEventListener("click", () => {

            navigate("catalog");

        });

}
