/* ==========================================================
   EcoRobo
   Camera Controller

   Responsável por:

   • Abrir câmera
   • Abrir galeria
   • Mostrar preview
   • Preparar imagem para análise
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

import {

    compressImage

}

from

"../../utils/image_compressor.js";

/* ==========================================================
   Variáveis

   selectedImage guarda a imagem já comprimida (base64), não
   mais o arquivo original — é o que vai ser enviado pra IA e,
   depois, salvo direto no Firestore (sem Firebase Storage).
========================================================== */

let selectedImage = null;

/* ==========================================================
   Inicialização
========================================================== */

export async function initCameraController(){

    await renderNavbar({ showBack: true });

    await renderFooter();

    configurarEventos();

}

/* ==========================================================
   Eventos
========================================================== */

function configurarEventos(){

    document

        .getElementById("btnGallery")

        .addEventListener(

            "click",

            abrirGaleria

        );

    document

        .getElementById("galleryInput")

        .addEventListener(

            "change",

            selecionarImagem

        );

    document

        .getElementById("btnCamera")

        .addEventListener(

            "click",

            abrirCamera

        );

    document

        .getElementById("btnAnalyze")

        .addEventListener(

            "click",

            analisarImagem

        );

}

/* ==========================================================
   Galeria
========================================================== */

function abrirGaleria(){

    document

        .getElementById("galleryInput")

        .click();

}

/* ==========================================================
   Câmera
========================================================== */

function abrirCamera(){

    const input =

        document.getElementById(

            "galleryInput"

        );

    input.setAttribute(

        "capture",

        "environment"

    );

    input.click();

}

/* ==========================================================
   Seleção da imagem
========================================================== */

async function selecionarImagem(event){

    const file =

        event.target.files[0];

    if(!file){

        return;

    }

    try{

        selectedImage = await compressImage(file);

        mostrarPreview(selectedImage, file);

    }

    catch(error){

        selectedImage = null;

        showToast(error.message, "error");

    }

}

/* ==========================================================
   Preview

   A imagem exibida já é a versão comprimida (compressImage),
   pra não precisar ler o arquivo original de novo.
========================================================== */

function mostrarPreview(imagemComprimida, file){

    const preview =

        document.getElementById("previewImage");

    preview.src = imagemComprimida;

    preview.style.display = "block";

    document

        .getElementById("previewEmpty")

        .style.display = "none";

    document

        .getElementById("imageName")

        .textContent = file.name;

    document

        .getElementById("imageSize")

        .textContent =

        formatarTamanho(file.size);

    document

        .getElementById("imageInfo")

        .style.display = "flex";

    const botao =

        document.getElementById(

            "btnAnalyze"

        );

    botao.disabled = false;

    botao.classList.remove(

        "disabled"

    );

}

/* ==========================================================
   Formata tamanho
========================================================== */

function formatarTamanho(bytes){

    if(bytes < 1024){

        return bytes + " B";

    }

    if(bytes < 1024 * 1024){

        return (bytes/1024)

        .toFixed(1) + " KB";

    }

    return (bytes/(1024*1024))

    .toFixed(2) + " MB";

}

/* ==========================================================
   Analisar
========================================================== */

function analisarImagem(){

    if(!selectedImage){

        return;

    }

    sessionStorage.setItem(

        "selectedImage",

        selectedImage

    );

    navigate("result");

}

/* ==========================================================
   Retorna a imagem selecionada (base64 já comprimido)
========================================================== */

export function getSelectedImage(){

    return selectedImage;

}

/* ==========================================================
   Consome a imagem selecionada

   Chamado pela tela de Resultado assim que ela pega a
   imagem pra analisar — evita que o mesmo escaneamento seja
   processado e salvo de novo se o usuário voltar/avançar
   pelo histórico do navegador e cair de novo na tela de
   Resultado (a variável em memória continuaria com a mesma
   imagem, disparando uma nova análise + um novo salvamento).
========================================================== */

export function clearSelectedImage(){

    selectedImage = null;

}