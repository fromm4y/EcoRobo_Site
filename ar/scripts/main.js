import { iniciarAR } from "./ar.js";
import { iniciarUI } from "./ui.js";

async function iniciar() {
  iniciarUI();

  await iniciarAR();
}

iniciar();
