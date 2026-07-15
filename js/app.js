/* ==========================================================
   EcoRobo
   Main Application
   ----------------------------------------------------------
   Arquivo principal do sistema.
   Todo o EcoRobo começa por aqui.
========================================================== */

import { navigate } from "./router.js";

import { initializeComponents, renderLoader, renderModal } from "./components.js";

import { initTheme } from "./theme.js";

import { initLoginController } from "./controllers/login.controller.js";
import { initRegisterController } from "./controllers/register.controller.js";
import { initHomeController } from "./controllers/home.controller.js";
import { initResultController } from "./controllers/result.controller.js";
import { initCameraController } from "./controllers/camera.controller.js";
import { initCatalogController } from "./controllers/catalog.controller.js";
import { initProfileController } from "./controllers/profile.controller.js";
import { initGameController } from "./controllers/game.controller.js";
import { initItemDetailController } from "./controllers/item-detail.controller.js";
import { initArController } from "./controllers/ar.controller.js";

const pageControllers = {
    login: initLoginController,
    register: initRegisterController,
    home: initHomeController,
    result: initResultController,
    camera: initCameraController,
    catalog: initCatalogController,
    profile: initProfileController,
    game: initGameController,
    itemDetail: initItemDetailController,
    ar: initArController,
};

document.addEventListener("pageChanged", (event) => {
    const page = event.detail;
    const initController = pageControllers[page];
    if (initController) {
        initController();
    }
});

/* ==========================================================
   Classe principal do sistema
========================================================== */

class EcoRoboApp {

    constructor() {

        console.log("🌎 EcoRobo iniciado.");

        this.initialize();

    }

    /* ======================================================
       Inicialização
    ====================================================== */

    async initialize() {

        initTheme();

        this.initializeEvents();

        initializeComponents();

        await renderLoader();

        await renderModal();

        this.loadInitialPage();

    }

    /* ======================================================
       Eventos Globais
    ====================================================== */

    initializeEvents() {

        console.log("Eventos registrados.");

        window.addEventListener("online", () => {

            console.log("Conexão restaurada.");

        });

        window.addEventListener("offline", () => {

            console.log("Modo Offline.");

        });

    }

    /* ======================================================
       Primeira página
    ====================================================== */

    loadInitialPage() {

        const loggedUser = localStorage.getItem("ecorobo_user");

        if (loggedUser) {

            navigate("home");

        }

        else {

            navigate("login");

        }

    }

}

window.addEventListener("DOMContentLoaded", () => {

    new EcoRoboApp();

});