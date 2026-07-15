const botao = document.querySelector("#placeButton");

botao.style.display = "none";

export function iniciarUI() {
  botao.onclick = () => {
    console.log("Posicionar");
  };
}

export function mostrarBotao() {
  botao.style.display = "block";
}

export function esconderBotao() {
  botao.style.display = "none";
}
