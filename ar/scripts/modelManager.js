import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

export async function carregarModelo(path) {
  return new Promise((resolve, reject) => {
    loader.load(

      path,

      (gltf) => {

        console.log(`Modelo 3D carregado com sucesso: ${path}`);

        resolve(gltf.scene);

      },

      undefined,

      // Sem isso, um 404/timeout de rede deixava essa Promise
      // pendurada pra sempre (nem resolve, nem rejeita) — o
      // await em ar.js travava em silêncio, sem log nenhum.
      (erro) => {

        console.error(`Falha ao carregar o modelo 3D (${path}):`, erro);

        reject(erro);

      }

    );
  });
}
