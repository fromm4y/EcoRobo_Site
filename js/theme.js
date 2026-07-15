/* ==========================================================
   EcoRobo
   Theme (Modo Escuro)
   ----------------------------------------------------------
   Preferência de dispositivo (não de conta) — por isso fica
   só no localStorage, não no Firestore. As cores em si vêm
   de variáveis CSS sobrescritas por body.dark-mode (ver
   css/variables.css), então trocar o tema aqui é só alternar
   essa classe.
========================================================== */

const THEME_KEY = "ecorobo_theme";

/* ==========================================================
   Aplica o tema salvo (ou o padrão claro). Chamado o quanto
   antes no boot (js/app.js), pra não piscar claro->escuro.
========================================================== */

export function initTheme(){

    const tema = localStorage.getItem(THEME_KEY);

    if(tema === "dark"){

        document.body.classList.add("dark-mode");

    }

}

/* ==========================================================
   Alterna e salva a preferência
========================================================== */

export function toggleTheme(){

    const ativo =
        document.body.classList.toggle("dark-mode");

    localStorage.setItem(THEME_KEY, ativo ? "dark" : "light");

    return ativo;

}

/* ==========================================================
   Estado atual
========================================================== */

export function isDarkMode(){

    return document.body.classList.contains("dark-mode");

}
