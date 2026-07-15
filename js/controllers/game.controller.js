/* ==========================================================
   EcoRobo
   Game Controller

   Responsável por controlar a tela do Minigame (jogo
   exportado do GDevelop, pasta game/, rodando num iframe).

   Comunicação com o jogo via postMessage (ver game/index.html):

   App -> Jogo
     { ecoRoboScene: "Ferro velho" }   pede pra abrir uma cena

   Jogo -> App
     { ecoRoboStatus: "ready" }         jogo terminou de carregar
     { ecoRoboStatus: "gameFinished" }  jogador saiu da cena do
                                        minijogo (conta como uma
                                        partida jogada)
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

import {

    getCurrentUser

}

from

"../auth.js";

import FirestoreService

from

"../../services/firestore_service.js";

import StatisticsModel

from

"../../models/statistics.model.js";

import {

    setAppState

}

from

"../state/app_state.js";

import {

    GAME_SCENE_BY_CATEGORY

}

from

"../../utils/constants.js";

/* ==========================================================
   Chave usada pra passar a categoria escaneada da tela de
   Resultado pra essa tela (mesmo padrão de sessionStorage já
   usado pra "selectedImage" — dado de uso único, uma tela
   escreve e a próxima lê e apaga).
========================================================== */

const CATEGORIA_KEY = "gameCategory";

/* ==========================================================
   Listener de mensagens do jogo atualmente ativo.

   Guardado num módulo (não local à função) pra poder ser
   removido explicitamente — sem isso, cada visita à tela do
   Jogo empilhava um novo listener em "window" (que nunca é
   recriado entre navegações), e os antigos continuavam vivos
   com referência a um <iframe> que já tinha sido destruído
   pela troca de página (app.innerHTML). Se uma mensagem ainda
   chegasse pra um desses listeners antigos, iframe.contentWindow
   já era null → TypeError em postMessage().
========================================================== */

let listenerDeMensagemAtivo = null;

// Ao sair da tela do Jogo pra qualquer outra página, derruba
// o listener da mensagem — registrado uma única vez aqui
// (nível de módulo, roda só quando o arquivo é importado, não
// a cada navegação) já que "pageChanged" dispara pra toda
// troca de página do app.
document.addEventListener("pageChanged", (event) => {

    if(event.detail !== "game"){

        removerListenerDeMensagem();

    }

});

/* ==========================================================
   Inicialização
========================================================== */

export async function initGameController(){

    // Sair do minigame sempre volta pra Home, independente de
    // onde o usuário entrou (Resultado ou Catálogo) — por isso
    // um onBack fixo em vez do goBack() genérico da navbar.
    await renderNavbar({

        showBack: true,

        onBack: () => navigate("home")

    });

    await renderFooter();

    carregarJogo();

}

/* ==========================================================
   Carrega o jogo dentro do iframe. A troca pra cena do
   minijogo certo só é enviada depois que o jogo avisar que
   está pronto ("ecoRoboStatus:ready") — antes da Rodada 17,
   o comando era mandado assim que o iframe carregava (evento
   "load"), mas isso só garante que o HTML/JS carregou, não
   que o motor do jogo (PIXI + primeira cena) terminou de
   inicializar. Em cenas mais pesadas isso chegava cedo demais
   e a troca de cena falhava silenciosamente.
========================================================== */

function carregarJogo(){

    const categoria = sessionStorage.getItem(CATEGORIA_KEY);

    sessionStorage.removeItem(CATEGORIA_KEY);

    const cena = GAME_SCENE_BY_CATEGORY[categoria];

    atualizarSubtitulo(categoria, cena);

    const iframe = document.getElementById("gameFrame");

    if(!iframe){

        return;

    }

    // Remove o listener da visita anterior à tela do Jogo (se
    // existir) antes de registrar o novo — ver comentário em
    // listenerDeMensagemAtivo, acima.
    removerListenerDeMensagem();

    listenerDeMensagemAtivo =
        (event) => tratarMensagemDoJogo(event, iframe, cena, categoria);

    window.addEventListener("message", listenerDeMensagemAtivo);

    iframe.src = "game/index.html";

}

function removerListenerDeMensagem(){

    if(!listenerDeMensagemAtivo){

        return;

    }

    window.removeEventListener("message", listenerDeMensagemAtivo);

    listenerDeMensagemAtivo = null;

}

/* ==========================================================
   Mensagens vindas do jogo
========================================================== */

function tratarMensagemDoJogo(event, iframe, cena, categoria){

    const status = event.data?.ecoRoboStatus;

    if(!status){

        return;

    }

    if(status === "ready"){

        if(cena && iframe?.contentWindow){

            iframe.contentWindow.postMessage(

                { ecoRoboScene: cena },

                "*"

            );

        }

        esconderLoadingOverlay();

        return;

    }

    if(status === "gameFinished"){

        registrarPartidaJogada(categoria);

        return;

    }

}

/* ==========================================================
   Esconde o overlay de carregamento (que cobre tanto o
   carregamento inicial quanto a splash padrão do GDevelop).
========================================================== */

function esconderLoadingOverlay(){

    document

        .getElementById("gameLoadingOverlay")

        ?.classList.add("hidden");

}

/* ==========================================================
   Subtítulo da tela
========================================================== */

function atualizarSubtitulo(categoria, cena){

    const subtitulo = document.getElementById("gameSubtitle");

    if(!subtitulo){

        return;

    }

    subtitulo.textContent =

        cena

        ? `Minijogo: ${categoria}`

        : "Escolha um minijogo no menu abaixo.";

}

/* ==========================================================
   Registrar Partida Jogada

   Incrementa totalGames nas estatísticas do usuário — mesma
   fonte que a Home e o Perfil já leem (Firestore + cache
   local do app_state). Os minijogos ainda não têm uma
   condição clara de vitória/derrota dentro do GDevelop, então
   por enquanto toda partida (sair da cena do minijogo) conta
   igual, independente de pontuação.
========================================================== */

async function registrarPartidaJogada(){

    const usuario = getCurrentUser();

    if(!usuario){

        return;

    }

    const dadosUsuario = await FirestoreService.getUserData(usuario.uid);

    const statistics =
        dadosUsuario?.statistics || new StatisticsModel();

    statistics.totalGames = (statistics.totalGames || 0) + 1;

    await FirestoreService.updateStatistics(usuario.uid, statistics);

    setAppState({ statistics });

}
