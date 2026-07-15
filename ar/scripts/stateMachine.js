export const Estados = {
  SEARCHING: "SEARCHING",

  TRACKING: "TRACKING",

  FREE: "FREE",
};

let estado = Estados.SEARCHING;

export function mudarEstado(novo) {
  estado = novo;
}

export function estadoAtual() {
  return estado;
}
