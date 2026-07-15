import * as THREE from "three";

import { MindARThree } from "mindar-image-three";

import { carregarModelo } from "./modelManager.js";

/* ==========================================================
   Categoria do resíduo -> nome do arquivo .glb dentro de
   ar/modelos/.

   MODO DE TESTE (Rodada 20): só existe um modelo pronto até
   agora (as latas, categoria Metal) — por isso todas as
   categorias apontam pro mesmo arquivo como placeholder, só
   pra validar que a lógica de "escolher modelo pela categoria"
   funciona de ponta a ponta. Assim que os modelos reais
   chegarem (ver ar/PENDENCIAS.md), é só trocar o valor de cada
   linha abaixo pelo arquivo .glb correto.
========================================================== */

const MODELO_POR_CATEGORIA = {

  "Metal": "cansScaleUpdate.glb",

  "Plástico": "cansScaleUpdate.glb",

  "Vidro": "cansScaleUpdate.glb",

  "Papel": "cansScaleUpdate.glb",

  "Orgânico": "cansScaleUpdate.glb"

};

const MODELO_PADRAO = "cansScaleUpdate.glb";

/* ==========================================================
   Marcador de teste (Rodada 20)

   targets.mind hoje foi compilado a partir de uma imagem
   qualquer já existente no projeto (ar/marcador-teste.png, o
   ícone do EcoRobo), só pra validar o reconhecimento de
   imagem. Não é o marcador final — precisa ser recompilado com
   fotos reais dos resíduos (ver ar/PENDENCIAS.md).
========================================================== */

export async function iniciarAR() {

  const categoria = await aguardarCategoria();

  const nomeArquivo =
    MODELO_POR_CATEGORIA[categoria] || MODELO_PADRAO;

  const mindarThree = new MindARThree({

    container: document.querySelector("#ar-container"),

    imageTargetSrc: "../targets.mind",

  });

  const { renderer, scene, camera } = mindarThree;

  // Sem nenhuma luz, o material do .glb (MeshStandardMaterial —
  // material padrão exportado por Blender/etc, precisa de luz
  // pra ser visível) renderiza completamente preto. O
  // mindar-image-three não adiciona nenhuma luz sozinho, então
  // o modelo carregava certinho, na posição certa, mas ficava
  // invisível (preto sobre o vídeo da câmera). Ambient (luz
  // geral, sem sombra) + Directional (dá volume/relevo) resolve
  // sem precisar mexer no modelo em si.
  scene.add(new THREE.AmbientLight(0xffffff, 1));

  const luzDirecional = new THREE.DirectionalLight(0xffffff, 1);

  luzDirecional.position.set(0.5, 1, 0.5);

  scene.add(luzDirecional);

  const modelo = await carregarModelo(`../modelos/${nomeArquivo}`);

  const anchor = mindarThree.addAnchor(0);

  anchor.group.add(modelo);

  anchor.onTargetFound = () => {

    console.log("Imagem encontrada");

    avisarApp({ ecoRoboStatus: "targetFound" });

  };

  anchor.onTargetLost = () => {

    console.log("Imagem perdida");

    avisarApp({ ecoRoboStatus: "targetLost" });

  };

  await mindarThree.start();

  esconderCarregando();

  avisarApp({ ecoRoboStatus: "cameraReady" });

  renderer.setAnimationLoop(() => {

    renderer.render(scene, camera);

  });

}

/* ==========================================================
   Espera a categoria do resíduo vinda do app (mesmo padrão do
   "ecoRoboScene" do jogo — ver game.controller.js).

   Manda "ready" assim que o listener já está de pé, avisando o
   app pai que pode mandar a categoria agora. Se ninguém
   responder dentro do prazo (ex: essa página aberta direto,
   fora do iframe, pra teste manual), cai no modelo padrão.
========================================================== */

function aguardarCategoria(timeoutMs = 2000) {

  return new Promise((resolve) => {

    function aoReceberMensagem(event) {

      const categoria = event.data?.ecoRoboCategory;

      if (categoria) {

        window.removeEventListener("message", aoReceberMensagem);

        resolve(categoria);

      }

    }

    window.addEventListener("message", aoReceberMensagem);

    avisarApp({ ecoRoboStatus: "ready" });

    setTimeout(() => {

      window.removeEventListener("message", aoReceberMensagem);

      resolve(null);

    }, timeoutMs);

  });

}

/* ==========================================================
   Comunicação com o app (mesmo padrão de postMessage já usado
   pelo jogo — ver game.controller.js). Só manda mensagem se
   essa página estiver mesmo dentro de um iframe.
========================================================== */

function avisarApp(mensagem) {

  if (window.parent && window.parent !== window) {

    window.parent.postMessage(mensagem, "*");

  }

}

function esconderCarregando() {

  document.getElementById("loading")?.classList.add("hidden");

}
