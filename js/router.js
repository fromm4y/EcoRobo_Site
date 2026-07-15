/* ==========================================================
   EcoRobo
   Router
   ----------------------------------------------------------

   Responsável pela navegação entre as páginas.
========================================================== */

import { isAuthenticated } from "./auth.js";
import { showLoader, hideLoader } from "./components.js";
import { pushPage, popPage } from "./navigation.js";

const app = document.getElementById("app");

/* ==========================================================
   Rotas do sistema
========================================================== */

const routes = {

    login: "pages/login.html",

    register: "pages/register.html",

    home: "pages/home.html",

    camera: "pages/camera.html",

    result: "pages/result.html",

    catalog: "pages/catalog.html",

    profile: "pages/profile.html",

    game: "pages/game.html",

    ar: "pages/ar.html",

    itemDetail: "pages/item-detail.html"

};

const protectedPages = [
    "home",
    "camera",
    "result",
    "catalog",
    "profile",
    "game",
    "ar",
    "itemDetail"
];

const styles = {

    login: "css/login.css",

    register: "css/register.css",

    home: "css/home.css",

    camera: "css/camera.css",

    result: "css/result.css",

    catalog: "css/catalog.css",

    profile: "css/profile.css",

    game: "css/game.css",

    ar: "css/ar.css",

    itemDetail: "css/result.css",

    variables:"css/variables.css",

    style: "css/style.css",

    components: "css/components.css",

    animations: "css/animations.css",

    responsive: "css/responsive.css"

};

/* ==========================================================
   Página atual

   Começa null (em vez de "login") pra que a primeiríssima
   navegação da sessão (o boot do app) não empilhe uma página
   "fantasma" — ver navigate() abaixo.
========================================================== */

let currentPage = null;

/* ==========================================================
   Carrega uma página

   options.isBack: true quando a navegação vem de goBack().
   Nesse caso NÃO empilha a página atual de novo (senão a
   pilha nunca esvaziaria de verdade).
========================================================== */

export async function navigate(page, options = {}) {

    const { isBack = false } = options;

    if (!routes[page]) {
        console.error("Página não encontrada:", page);
        return;
    }

    // 🔐 proteção de rota
    if (protectedPages.includes(page) && !isAuthenticated()) {
        page = "login";
    }

    try {
        showLoader(page);

        loadPageStyle(page);

        const response = await fetch(routes[page]);
        const html = await response.text();
        app.innerHTML = html;

        if (!isBack && currentPage && currentPage !== page) {

            pushPage(currentPage);

        }

        currentPage = page;

        window.scrollTo(0, 0);

        document.dispatchEvent(
            new CustomEvent("pageChanged", {
                detail: page
            })
        );

        history.pushState(
            { page },
            "",
            "#" + page
        );

        // pequeno delay pra UX do loader
        setTimeout(() => {
            hideLoader();
        }, 300);

    } catch (error) {
        console.error(error);
        hideLoader();
    }
}

/* ==========================================================
   Voltar (pilha própria do app)

   Usada pelo botão "←" do navbar. Se a pilha estiver vazia
   (ex: usuário chegou direto numa página via reload/link),
   cai na Home por padrão.
========================================================== */

export function goBack() {

    const previous = popPage();

    navigate(previous || "home", { isBack: true });

}

/* ==========================================================
   Página Atual
========================================================== */

export function getCurrentPage() {

    return currentPage;

}

/* ==========================================================
   Voltar
========================================================== */

window.onpopstate = function (event) {

    if (event.state?.page) {

        navigate(event.state.page);

    }

};

/* ==========================================================
   Login Automático
========================================================== */


export function initRouter() {

    const hash = window.location.hash.replace("#", "");

    if (!hash) {

        if (isAuthenticated()) {
            navigate("home");
        } else {
            navigate("login");
        }

    } else {
        navigate(hash);
    }

}

/* ==========================================================
   Carregar estilos
========================================================== */
function loadPageStyle(page){

    const old = document.getElementById("page-style");

    if(old){

        old.remove();

    }

    const link = document.createElement("link");

    link.rel = "stylesheet";

    link.href = styles[page];

    link.id = "page-style";

    document.head.appendChild(link);

}