/* ==========================================================
   EcoRobo
   Result Controller
========================================================== */

import {

    renderNavbar,
    renderFooter,
    showToast

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

import WasteModel

from

"../../models/waste.model.js";

import StatisticsModel

from

"../../models/statistics.model.js";

import {

    auth

}

from

"../../services/firebase_service.js";

import {

    GAME_CATEGORIES

}

from

"../../utils/constants.js";

import {

    aplicarResiduoNaEstatistica,
    atualizarStreak,
    atualizarHistoricoDiario,
    verificarConquistas

}

from

"../../utils/statistics_helper.js";

import {

    getAppState,
    setAppState

}

from

"../state/app_state.js";

import {

    getSelectedImage,
    clearSelectedImage

}

from

"./camera.controller.js";

import {

    analisarResiduo

}

from

"../../services/gemini_service.js";

/* ==========================================================
   Tempo mínimo do overlay de escaneamento

   Evita que a animação "pisque" muito rápido se a API
   responder quase instantaneamente.
========================================================== */

const TEMPO_MINIMO_SCAN_MS = 1000;

/* ==========================================================
   Inicialização
========================================================== */

export async function initResultController(){

    await renderNavbar({ showBack: true });

    await renderFooter();

    carregarImagem();

    carregarResultado();

    configurarEventos();

}

/* ==========================================================
   Imagem
========================================================== */

function carregarImagem(){

    const image=

        sessionStorage.getItem(

            "selectedImage"

        );

    if(image){

        document

            .getElementById("resultImage")

            .src=image;

    }

}

/* ==========================================================
   Resultado

   Analisa a foto tirada/selecionada na Câmera (guardada em
   memória por camera.controller.js -> getSelectedImage())
   usando a API real do Gemini, via services/gemini_service.js.

   O overlay de escaneamento fica visível durante a chamada
   real, com um tempo mínimo (TEMPO_MINIMO_SCAN_MS) pra não
   parecer instantâneo/piscar rápido demais.
========================================================== */

async function carregarResultado(){

    document.getElementById("resultContent")?.classList.add("hidden");

    document.getElementById("resultError")?.classList.add("hidden");

    iniciarAnimacaoScan();

    const inicio = Date.now();

    // Lê e imediatamente "consome" a imagem selecionada, pra
    // que voltar/avançar pelo histórico do navegador e cair
    // de novo nessa tela não reprocesse/re-salve o mesmo
    // escaneamento (ver clearSelectedImage() em
    // camera.controller.js).
    const imagem = getSelectedImage();

    clearSelectedImage();

    if(!imagem){

        await aguardarTempoMinimo(inicio);

        pararAnimacaoScan();

        mostrarErro("Nenhuma imagem pra analisar. Volte e escaneie um resíduo.");

        return;

    }

    try{

        const resultado = await analisarResiduo(imagem);

        await aguardarTempoMinimo(inicio);

        pararAnimacaoScan();

        mostrarConteudo();

        preencherTela(resultado);

        configurarBotaoAcao(resultado.category);

        desabilitarNavegacaoPosResultado();

        try{

            await salvarResultado(resultado, imagem);

        }

        finally{

            habilitarNavegacaoPosResultado();

        }

    }

    catch(error){

        await aguardarTempoMinimo(inicio);

        pararAnimacaoScan();

        console.error(error);

        mostrarErro(error.message);

    }

}

function aguardarTempoMinimo(inicio){

    const decorrido = Date.now() - inicio;

    const restante = Math.max(TEMPO_MINIMO_SCAN_MS - decorrido, 0);

    return new Promise(resolve => setTimeout(resolve, restante));

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
   Animação de Escaneamento
========================================================== */

function iniciarAnimacaoScan(){

    document

        .getElementById("scanOverlay")

        ?.classList.add("scanning");

}

function pararAnimacaoScan(){

    document

        .getElementById("scanOverlay")

        ?.classList.remove("scanning");

}

/* ==========================================================
   Preenche informações
========================================================== */

function preencherTela(data){

    document.getElementById("wasteName").textContent=data.name;

    document.getElementById("scientificName").textContent=data.scientificName;

    document.getElementById("wasteCategory").textContent=data.category;

    document.getElementById("recyclable").textContent=

        data.recyclable

        ? "Sim"

        : "Não";

    document.getElementById("trashColor").textContent=

        data.trashColor;

    document.getElementById("decomposition").textContent=

        data.decomposition;

    document.getElementById("impact").textContent=

        data.impact;

    document.getElementById("description").textContent=

        data.description;

    document.getElementById("curiosity").textContent=

        data.curiosity;

    const confiancaPercentual = normalizarConfianca(data.confidence);

    document.getElementById("confidenceValue").textContent=

        confiancaPercentual+"%";

    setTimeout(()=>{

        document

            .getElementById("confidenceBar")

            .style.width=

            confiancaPercentual+"%";

    },300);

}

/* ==========================================================
   Confiança da IA

   O Gemini retorna um número decimal entre 0 e 1 (ex: 0.98
   para 98%). Se algum dia vier já em formato 0-100, o valor
   é usado direto, sem multiplicar de novo.
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
   Firestore
========================================================== */

async function salvarResultado(data, imagem){

    if(!auth.currentUser){

        return;

    }

    const waste=new WasteModel({

        userId:auth.currentUser.uid,

        name:data.name,

        scientificName:data.scientificName,

        category:data.category,

        recyclable:data.recyclable,

        binColor:data.trashColor,

        decomposition:data.decomposition,

        environmentalImpact:data.impact,

        description:data.description,

        curiosity:data.curiosity,

        aiConfidence:data.confidence,

        imageUrl:imagem || "",

        createdAt:new Date()

    });

    const wasteId = await FirestoreService.saveWaste(waste);

    if(!wasteId){

        return;

    }

    waste.id = wasteId;

    const { statistics, novasConquistas } =

        await atualizarEstatisticas(auth.currentUser.uid, waste);

    // Atualiza o cache local (app_state) na hora, pra Home e
    // Catálogo já mostrarem esse escaneamento sem precisar
    // buscar tudo de novo no Firestore.
    const cache = getAppState();

    setAppState({

        catalog: [waste, ...(cache.catalog || [])],

        statistics

    });

    notificarNovasConquistas(novasConquistas);

}

/* ==========================================================
   Estatísticas

   Busca as estatísticas atuais do usuário, aplica os números
   do resíduo recém-salvo (contadores + CO₂, streak de dias
   seguidos, histórico diário e conquistas) e grava tudo de
   volta via FirestoreService.updateStatistics().
========================================================== */

async function atualizarEstatisticas(uid, waste){

    const dadosUsuario = await FirestoreService.getUserData(uid);

    const statistics =
        dadosUsuario?.statistics || new StatisticsModel();

    aplicarResiduoNaEstatistica(statistics, waste, 1);

    atualizarStreak(statistics);

    atualizarHistoricoDiario(statistics, waste);

    statistics.lastScanDate = new Date();

    const novasConquistas = verificarConquistas(statistics);

    await FirestoreService.updateStatistics(uid, statistics);

    return { statistics, novasConquistas };

}

/* ==========================================================
   Notifica conquistas novas com um toast, logo após o
   escaneamento ser salvo.
========================================================== */

function notificarNovasConquistas(novasConquistas){

    if(novasConquistas.length === 0){

        return;

    }

    const mensagem =

        novasConquistas.length === 1

        ? `🏆 Conquista desbloqueada: ${novasConquistas[0].name}!`

        : `🏆 Conquistas desbloqueadas: ${novasConquistas.map(a => a.name).join(", ")}!`;

    showToast(mensagem);

}

/* ==========================================================
   Navegação pós-resultado

   Os botões "Ver Catálogo" e "Novo Escaneamento" ficam
   desabilitados enquanto salvarResultado() ainda está
   salvando no Firestore — sem isso, dava pra clicar em "Ver
   Catálogo" rápido o bastante pra chegar na tela de Catálogo
   ANTES do resíduo estar salvo, fazendo o Catálogo carregar
   (e cachear no app_state) uma lista sem esse item ainda.
========================================================== */

function desabilitarNavegacaoPosResultado(){

    ["btnCatalog", "btnNewScan"].forEach(id => {

        const botao = document.getElementById(id);

        if(!botao){

            return;

        }

        botao.disabled = true;

        botao.classList.add("disabled");

    });

}

function habilitarNavegacaoPosResultado(){

    ["btnCatalog", "btnNewScan"].forEach(id => {

        const botao = document.getElementById(id);

        if(!botao){

            return;

        }

        botao.disabled = false;

        botao.classList.remove("disabled");

    });

}

/* ==========================================================
   Eventos
========================================================== */

function configurarEventos(){

    document

        .getElementById("btnNewScan")

        ?.addEventListener(

            "click",

            ()=>{

                navigate("camera");

            }

        );

    document

        .getElementById("btnCatalog")

        ?.addEventListener(

            "click",

            ()=>{

                navigate("catalog");

            }

        );

    document

        .getElementById("btnErrorNewScan")

        ?.addEventListener(

            "click",

            ()=>{

                navigate("camera");

            }

        );

}

/* ==========================================================
   Botão de Ação (Jogo x Realidade Aumentada)

   Categorias em GAME_CATEGORIES (utils/constants.js) levam
   pro Jogo. Qualquer outra categoria leva pra Realidade
   Aumentada.
========================================================== */

function configurarBotaoAcao(category){

    const botao =

        document.getElementById("btnAction");

    if(!botao){

        return;

    }

    const ehJogo =

        GAME_CATEGORIES.includes(category);

    botao.textContent =

        ehJogo

        ? "🎮 Jogar Minigame"

        : "🥽 Ver em Realidade Aumentada";

    botao.addEventListener(

        "click",

        ()=>{

            if(ehJogo){

                // Mesmo padrão já usado pra "selectedImage":
                // sessionStorage pra passar um dado de uso
                // único pra próxima tela (aqui, lido e apagado
                // por game.controller.js).
                sessionStorage.setItem("gameCategory", category);

            }

            else{

                // Mesmo padrão, mas lido por ar.controller.js —
                // diz qual modelo 3D mostrar na experiência AR.
                sessionStorage.setItem("arCategory", category);

            }

            navigate(ehJogo ? "game" : "ar");

        }

    );

}