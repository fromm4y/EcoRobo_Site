import * as THREE from "three";

export function colocarNaFrente(camera, objeto) {
  const direcao = new THREE.Vector3();

  camera.getWorldDirection(direcao);

  const posicao = new THREE.Vector3();

  camera.getWorldPosition(posicao);

  objeto.position.copy(posicao);

  objeto.position.add(direcao.multiplyScalar(1.5));
}
