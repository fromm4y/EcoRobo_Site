/* ==========================================================
   EcoRobo
   Home Controller

   Responsável por controlar toda a tela inicial.
========================================================== */

import {

    getCurrentUser

}

from

"../auth.js";

import FirestoreService

from

"../../services/firestore_service.js";

import {

    navigate

}

from

"../router.js";

import {

    renderNavbar,
    renderFooter,
    createNewsCard

}

from

"../components.js";

import {

    NEWS_MOCK

}

from

"../mock/news.mock.js";

import {

    getAppState,
    setAppState

}

from

"../state/app_state.js";

import {

    PROFILE

}

from

"../../utils/constants.js";

/* ==========================================================
   Inicialização
========================================================== */

export async function initHomeController(){

    // Aplica o que já existir em cache ANTES de qualquer
    // await — getAppState() lê direto do sessionStorage, sem
    // esperar nada. Se isso rodasse só depois de
    // renderNavbar()/renderFooter() (que fazem fetch() de
    // verdade), o navegador teria uma chance real de pintar a
    // tela com o estado padrão (nome/foto genéricos) antes do
    // dado real aparecer — o "flash" relatado.
    aplicarCacheImediato();

    await renderNavbar();

    await renderFooter();

    configurarEventos();

    carregarNoticias();

    await carregarUsuario();

}

/* ==========================================================
   Aplica dados já carregados nessa sessão (app_state) de
   forma síncrona, antes do primeiro paint da tela.
========================================================== */

function aplicarCacheImediato(){

    const cache = getAppState();

    if(cache.user){

        atualizarCabecalho(cache.user);

    }

    atualizarSaudacao();

    if(cache.statistics){

        atualizarEstatisticas(cache.statistics);

    }

}
/* ==========================================================
   Notícias

   Busca notícias reais sobre meio ambiente via /api/noticias
   (backend que lê o RSS do G1 — ver api/noticias.js). Se a
   busca falhar (endpoint fora do ar, sem internet etc.), cai
   pro NEWS_MOCK curado manualmente, pra essa seção nunca
   ficar vazia.
========================================================== */

async function carregarNoticias(){

    const container =

        document.getElementById("newsList");

    if(!container){

        return;

    }

    container.innerHTML = `<div class="spinner"></div>`;

    try{

        const resposta = await fetch("/api/noticias");

        if(!resposta.ok){

            throw new Error("Resposta do /api/noticias não foi OK.");

        }

        const noticias = await resposta.json();

        renderizarNoticias(

            Array.isArray(noticias) && noticias.length > 0

            ? noticias

            : NEWS_MOCK

        );

    }

    catch(error){

        console.error(error);

        renderizarNoticias(NEWS_MOCK);

    }

}

function renderizarNoticias(noticias){

    const container =

        document.getElementById("newsList");

    if(!container){

        return;

    }

    container.innerHTML =

        noticias

        .map(news => createNewsCard(news))

        .join("");

}
/* ==========================================================
   Carregar Usuário
========================================================== */

async function carregarUsuario(){

    const firebaseUser = getCurrentUser();

    if(!firebaseUser){

        navigate("login");

        return;

    }

    let cache = getAppState();

    if(!cache.user || !cache.statistics){

        const dadosUsuario = await FirestoreService.getUserData(

            firebaseUser.uid

        );

        cache = setAppState({

            user: dadosUsuario?.profile || firebaseUser,

            statistics: dadosUsuario?.statistics || null

        });

    }

    atualizarCabecalho(cache.user || firebaseUser);

    atualizarSaudacao();

    atualizarEstatisticas(cache.statistics);

    await carregarUltimosScans(firebaseUser.uid);

}
/* ==========================================================
   Cabeçalho
========================================================== */

function atualizarCabecalho(user){

    const nome =
        document.getElementById("userName");

    nome.textContent = user.name || "EcoWarrior";

    nome.classList.remove("skeleton");

    const foto =
        document.getElementById("userPhoto");

    foto.src = user.photoUrl || PROFILE.DEFAULT_AVATAR;

    foto.classList.remove("skeleton");

}
/* ==========================================================
   Saudação
========================================================== */

function atualizarSaudacao(){

    const hora = new Date().getHours();

    let texto = "Olá,";

    if(hora < 12){

        texto = "🌞 Bom dia,";

    }

    else if(hora < 18){

        texto = "☀️ Boa tarde,";

    }

    else{

        texto = "🌙 Boa noite,";

    }

    document.getElementById(

        "greeting"

    ).textContent = texto;

}
/* ==========================================================
   Estatísticas
========================================================== */

function atualizarEstatisticas(statistics){

    const campos = [

        ["totalScans", statistics?.totalScans || 0],
        ["gamesPlayed", statistics?.totalGames || 0],
        ["co2Saved", `${statistics?.co2Saved || 0} kg`],
        ["favoriteWaste", statistics?.favoriteWasteType || "-"]

    ];

    campos.forEach(([id, valor]) => {

        const elemento = document.getElementById(id);

        elemento.textContent = valor;

        elemento.classList.remove("skeleton");

    });

    atualizarStreakVisual(statistics?.currentStreak || 0);

}

/* ==========================================================
   Streak (dias seguidos)
========================================================== */

function atualizarStreakVisual(dias){

    const banner = document.getElementById("homeStreak");

    if(!banner){

        return;

    }

    if(dias >= 2){

        banner.textContent = `🔥 ${dias} dias seguidos reciclando!`;

        banner.classList.remove("hidden");

    }

    else{

        banner.classList.add("hidden");

    }

}
/* ==========================================================
   Últimos Escaneamentos
========================================================== */

async function carregarUltimosScans(uid){

    const cache = getAppState();

    let lista = cache.catalog;

    const container =

        document.getElementById("lastScans");

    if(!lista){

        // Só mostra o spinner quando realmente precisa buscar
        // no Firestore — se já tinha no cache, nem chega a
        // aparecer (troca é praticamente instantânea).
        container.innerHTML = `<div class="spinner"></div>`;

        lista = await FirestoreService.getUserWaste(uid);

        setAppState({ catalog: lista });

    }

    container.innerHTML = "";

    if(lista.length === 0){

        container.innerHTML =

        `

        <p>

            Nenhum item escaneado ainda.

        </p>

        `;

        return;

    }

    lista.slice(0,5).forEach(item=>{

        container.innerHTML +=

        `

        <div class="scan-card">

            <img

                src="${item.imageUrl}"

                alt="${item.name}">

            <h4>

                ${item.name}

            </h4>

            <small>

                ${item.category}

            </small>

        </div>

        `;

    });

}
/* ==========================================================
   Eventos
========================================================== */

function configurarEventos(){

    document

    .getElementById(

        "scanNowButton"

    )

    .addEventListener(

        "click",

        ()=>{

            navigate("camera");

        }

    );

}