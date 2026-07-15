/* ==========================================================
   EcoRobo
   AR Controller

   Responsável por controlar a tela de Realidade Aumentada
   (protótipo MindAR, pasta ar/, rodando num iframe).

   MODO DE TESTE (Rodada 20): o marcador (ar/targets.mind) e o
   modelo 3D (ar/modelos/cansScaleUpdate.glb) são placeholders
   — servem só pra validar que a integração funciona de ponta a
   ponta. Ver ar/PENDENCIAS.md pro que falta pra virar a versão
   final.

   Comunicação com a experiência AR via postMessage (mesmo
   padrão do jogo — ver game.controller.js e ar/scripts/ar.js):

   App -> AR
     { ecoRoboCategory: "Metal" }        diz qual categoria de
                                          resíduo foi escaneada

   AR -> App
     { ecoRoboStatus: "ready" }          script carregado,
                                         pronto pra receber a
                                         categoria
     { ecoRoboStatus: "cameraReady" }    câmera já está de pé
                                         e o modelo foi
                                         posicionado
     { ecoRoboStatus: "targetFound" }    marcador reconhecido
     { ecoRoboStatus: "targetLost" }     marcador perdido
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

/* ==========================================================
   Chave usada pra passar a categoria escaneada da tela de
   Resultado/Detalhes do Item pra essa tela (mesmo padrão de
   sessionStorage já usado pra "gameCategory").
========================================================== */

const CATEGORIA_KEY = "arCategory";

/* ==========================================================
   Listener de mensagens da experiência AR atualmente ativo —
   guardado num módulo (não local à função) pelo mesmo motivo
   já corrigido em game.controller.js: sem isso, cada visita a
   essa tela empilharia um novo listener em "window" (que nunca
   é recriado entre navegações), com listeners antigos vivos
   referenciando um iframe já destruído.
========================================================== */

let listenerDeMensagemAtivo = null;

document.addEventListener("pageChanged", (event) => {

    if(event.detail !== "ar"){

        removerListenerDeMensagem();

    }

});

/* ==========================================================
   Inicialização
========================================================== */

export async function initArController(){

    // Sair da tela de AR sempre volta pra Home, independente de
    // onde o usuário entrou (Resultado ou Catálogo) — mesmo
    // comportamento já pedido pro Jogo.
    await renderNavbar({

        showBack: true,

        onBack: () => navigate("home")

    });

    await renderFooter();

    carregarAR();

}

/* ==========================================================
   Carrega a experiência AR dentro do iframe.
========================================================== */

function carregarAR(){

    const categoria = sessionStorage.getItem(CATEGORIA_KEY);

    sessionStorage.removeItem(CATEGORIA_KEY);

    atualizarSubtitulo(categoria);

    const iframe = document.getElementById("arFrame");

    if(!iframe){

        return;

    }

    removerListenerDeMensagem();

    listenerDeMensagemAtivo =
        (event) => tratarMensagemDoAR(event, iframe, categoria);

    window.addEventListener("message", listenerDeMensagemAtivo);

    iframe.src = "ar/pages/mindTest.html";

}

function removerListenerDeMensagem(){

    if(!listenerDeMensagemAtivo){

        return;

    }

    window.removeEventListener("message", listenerDeMensagemAtivo);

    listenerDeMensagemAtivo = null;

}

/* ==========================================================
   Mensagens vindas da experiência AR
========================================================== */

function tratarMensagemDoAR(event, iframe, categoria){

    const status = event.data?.ecoRoboStatus;

    if(!status){

        return;

    }

    if(status === "ready"){

        if(categoria && iframe?.contentWindow){

            iframe.contentWindow.postMessage(

                { ecoRoboCategory: categoria },

                "*"

            );

        }

        return;

    }

    if(status === "cameraReady"){

        esconderLoadingOverlay();

        atualizarStatusMarcador("🔍 Procurando marcador...");

        return;

    }

    if(status === "targetFound"){

        atualizarStatusMarcador("✅ Marcador encontrado!");

        return;

    }

    if(status === "targetLost"){

        atualizarStatusMarcador("🔍 Procurando marcador...");

        return;

    }

}

/* ==========================================================
   Esconde o overlay de carregamento (fica visível até a
   câmera avisar que já está de pé — ver "cameraReady" acima).
========================================================== */

function esconderLoadingOverlay(){

    document

        .getElementById("arLoadingOverlay")

        ?.classList.add("hidden");

}

/* ==========================================================
   Subtítulo/status da tela
========================================================== */

function atualizarSubtitulo(categoria){

    const subtitulo = document.getElementById("arSubtitle");

    if(!subtitulo){

        return;

    }

    subtitulo.textContent =

        categoria

        ? `Realidade Aumentada: ${categoria}`

        : "Aponte a câmera pro marcador de teste.";

}

function atualizarStatusMarcador(texto){

    const status = document.getElementById("arStatus");

    if(!status){

        return;

    }

    status.textContent = texto;

}
