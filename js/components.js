/* ==========================================================
   EcoRobo
   Components Manager
   ----------------------------------------------------------
   Responsável por:
   • Navbar
   • Bottom Navigation
   • Footer
   • Loader
   • Modal
   • Toast
   • Cards
   • Empty States
========================================================== */

import { navigate, getCurrentPage, goBack } from "./router.js";

import { logout, getCurrentUser } from "./auth.js";

import { clearStack } from "./navigation.js";

import FirestoreService from "../services/firestore_service.js";

import { getAppState, setAppState, clearAppState } from "./state/app_state.js";

import { PROFILE } from "../utils/constants.js";

/* ==========================================================
   Carrega um componente HTML
========================================================== */

export async function loadComponent(path, targetId) {
    try {

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Erro ao carregar ${path}`);
        }

        const html = await response.text();

        document.getElementById(targetId).innerHTML = html;

    } catch (error) {

        console.error(error);

    }
}


/* ==========================================================
   Navbar
========================================================== */

export async function renderNavbar(options = {}) {

    const { showBack = false, onBack = null } = options;

    await loadComponent(
        "components/navbar.html",
        "navbar-container"
    );

    bindNavbarEvents();

    toggleBackButton(showBack, onBack);

    await carregarAvatarNavbar();

}

/* ==========================================================
   Carrega a foto de perfil real pro avatar do navbar.
   Chamado toda vez que a navbar é renderizada (ou seja, em
   toda troca de página) — por isso usa o cache do app_state
   primeiro, só indo no Firestore se ainda não tiver nada
   carregado nessa sessão.
========================================================== */

async function carregarAvatarNavbar(){

    const usuario = getCurrentUser();

    if(!usuario){
        return;
    }

    const cache = getAppState();

    if(cache.user){

        updateNavbar(cache.user);

        return;

    }

    const user = await FirestoreService.getUser(usuario.uid);

    if(user){

        setAppState({ user });

    }

    updateNavbar(user || usuario);

}

/* ==========================================================
   Botão Voltar

   Aparece em qualquer página que não seja a Início. Chame
   renderNavbar({ showBack: true }) no controller da página.

   Usa goBack() (pilha própria do app, em router.js/
   navigation.js) em vez de history.back() do navegador —
   mais previsível.

   Algumas telas precisam de um destino fixo em vez do
   goBack() genérico (ex: sair do Minigame sempre volta pra
   Home, não pra pilha de navegação) — nesses casos o
   controller da página passa renderNavbar({ showBack: true,
   onBack: () => navigate("home") }).

   Sem risco de duplicar o listener: renderNavbar() é
   chamado uma vez por navegação, e loadComponent() troca o
   innerHTML de #navbar-container inteiro a cada chamada, ou
   seja #navbarBackButton é sempre um elemento novo (o
   anterior, com seu listener antigo, é descartado junto).
========================================================== */

function toggleBackButton(show, onBack){

    const backButton =
        document.getElementById("navbarBackButton");

    if(!backButton){
        return;
    }

    if(show){

        backButton.classList.remove("hidden");

        backButton.addEventListener("click", () => {

            if(onBack){

                onBack();

            } else {

                goBack();

            }

        });

    } else {

        backButton.classList.add("hidden");

    }

}

/* ==========================================================
   Atualiza informações do usuário
========================================================== */

export function updateNavbar(user) {

    const avatar =
        document.getElementById("navbarAvatar");

    if (!avatar)
        return;

    avatar.src = user?.photoUrl || PROFILE.DEFAULT_AVATAR;

    avatar.classList.remove("skeleton");

}

/* ==========================================================
   Logout

   Compartilhado entre o menu da logo (navbar) e o botão
   "Sair" da tela de Perfil.

   Firebase Auth já invalida a sessão no servidor via
   signOut() (dentro de logout(), em js/auth.js). Se no
   futuro existir um backend próprio além do Firebase,
   invalidar o token/sessão dele aqui também.
========================================================== */

export async function performLogout() {

    await logout();

    clearStack();

    clearAppState();

    navigate("login");

}

/* ==========================================================
   Menu do Usuário (Perfil / Sair)

   Clique na logo abre uma caixinha com as opções. Fecha ao
   clicar fora dela.
========================================================== */

let userMenuDocumentClickBound = false;

export function bindNavbarEvents() {

    const logoButton =
        document.getElementById("navbarLogoButton");

    const menu =
        document.getElementById("userMenu");

    if (!logoButton || !menu)
        return;

    logoButton.addEventListener("click", (event) => {

        event.stopPropagation();

        menu.classList.toggle("hidden");

    });

    document

        .getElementById("navbarAvatarButton")

        ?.addEventListener("click", () => {

            navigate("profile");

        });

    document

        .getElementById("userMenuProfile")

        ?.addEventListener("click", () => {

            menu.classList.add("hidden");

            navigate("profile");

        });

    document

        .getElementById("userMenuLogout")

        ?.addEventListener("click", () => {

            menu.classList.add("hidden");

            performLogout();

        });

    // Fecha o menu ao clicar fora. Ligado uma única vez
    // (document nunca é recriado entre navegações), sempre
    // consultando o menu/logo atuais no momento do clique.
    if (!userMenuDocumentClickBound) {

        userMenuDocumentClickBound = true;

        document.addEventListener("click", (event) => {

            const currentMenu =
                document.getElementById("userMenu");

            const currentLogoButton =
                document.getElementById("navbarLogoButton");

            if (!currentMenu)
                return;

            if (
                !currentMenu.contains(event.target) &&
                event.target !== currentLogoButton
            ) {

                currentMenu.classList.add("hidden");

            }

        });

    }

}

/* ==========================================================
   Eventos da Bottom Navigation
========================================================== */

export function bindBottomNav() {

    const home = document.getElementById("navHome");
    const catalog = document.getElementById("navCatalog");
    const camera = document.getElementById("navCamera");

    if(home){

        home.addEventListener("click",()=>{

            navigate("home");

        });

    }

    if(catalog){

        catalog.addEventListener("click",()=>{

            navigate("catalog");

        });

    }

    if(camera){

        camera.addEventListener("click",()=>{

            navigate("camera");

        });

    }

}

/* ==========================================================
   Bottom Navigation
========================================================== */

export async function renderBottomNav(page = ""){

    await loadComponent(

        "components/bottom_nav.html",

        "bottom-nav-container"

    );

    setActiveBottomNav(page);

    bindBottomNav();

}

/* ==========================================================
   Footer
========================================================== */

export async function renderFooter() {

    await loadComponent(
        "components/footer.html",
        "footer-container"
    );

    setActiveBottomNav(getCurrentPage());

    bindBottomNav();

}


/* ==========================================================
   Loader
========================================================== */

export async function renderLoader() {

    await loadComponent(
        "components/loader.html",
        "loader-container"
    );

}


/* ==========================================================
   Modal
========================================================== */

export async function renderModal() {

    await loadComponent(
        "components/modal.html",
        "modal-container"
    );

}


/* ==========================================================
   Empty State
========================================================== */

export async function renderEmptyState() {

    await loadComponent(
        "components/empty-state.html",
        "empty-container"
    );

}

/* ==========================================================
   Configurações do Smart Loader
========================================================== */

const loaderTypes={

    login:{

        icon:"🔐",

        text:"Entrando na sua conta..."

    },

    camera:{

        icon:"📷",

        text:"Abrindo câmera..."

    },

    gemini:{

        icon:"🤖",

        text:"Analisando resíduo..."

    },

    firebase:{

        icon:"☁️",

        text:"Sincronizando dados..."

    },

    game:{

        icon:"🎮",

        text:"Abrindo jogo..."

    },

    ar:{

        icon:"🥽",

        text:"Carregando realidade aumentada..."

    },

    catalog:{

        icon:"📚",

        text:"Carregando catálogo..."

    },

    home:{

        icon:"🏡",

        text:"Preparando sua página inicial..."

    },

    profile:{

        icon:"👤",

        text:"Carregando perfil..."

    },

    default:{

        icon:"🌎",

        text:"Preparando sistema..."

    }

};


/* ==========================================================
   Exibe Loader
========================================================== */

export function showLoader(type="default"){

    const loader=document.getElementById("loader");

    const icon=document.getElementById("loaderIcon");

    const text=document.getElementById("loaderText");

    const progress=document.getElementById("loaderBar");

    if(!loader) return;

    const config=

        loaderTypes[type] ||

        loaderTypes.default;

    icon.textContent=config.icon;

    text.textContent=config.text;

    progress.style.width="15%";

    loader.classList.remove("hidden");

}

/* ==========================================================
   Atualiza progresso
========================================================== */

export function updateLoader(progressValue){

    const progress =
        document.getElementById("loaderBar");

    if(!progress) return;

    progress.style.width =
        `${progressValue}%`;

}


/* ==========================================================
   Fecha Loader
========================================================== */

export function hideLoader(){

    const loader =
        document.getElementById("loader");

    if(!loader) return;

    const progress =
        document.getElementById("loaderBar");

    progress.style.width="100%";

    setTimeout(()=>{

        loader.classList.add("hidden");

        progress.style.width="0%";

    },300);

}

/* ==========================================================
   Toast
========================================================== */

export function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className = `toast toast-${type}`;

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 50);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}


/* ==========================================================
   Mostrar/Ocultar Senha

   Usado em login.html/register.html (botão "👁" ao lado do
   campo de senha). O ícone em si nunca é trocado por outro
   elemento — só o emoji dentro do mesmo botão — então um
   único listener, ligado uma vez, dá conta do recado.
========================================================== */

export function bindPasswordToggle(buttonId, inputId) {

    const botao = document.getElementById(buttonId);

    const input = document.getElementById(inputId);

    if (!botao || !input) {
        return;
    }

    botao.addEventListener("click", () => {

        const estaVisivel = input.type === "text";

        input.type = estaVisivel ? "password" : "text";

        botao.textContent = estaVisivel ? "👁" : "🙈";

    });

}


/* ==========================================================
   Modal de Confirmação

   Usado antes de qualquer ação destrutiva (excluir item do
   Catálogo, excluir conta). Devolve uma Promise<boolean>:
   true se o usuário confirmou, false se cancelou/fechou.

   options: { title, message, confirmText, cancelText, danger }
========================================================== */

export function confirmDialog(options = {}) {

    const {

        title = "Tem certeza?",
        message = "Essa ação não pode ser desfeita.",
        confirmText = "Confirmar",
        cancelText = "Cancelar",
        danger = false

    } = options;

    return new Promise(resolve => {

        const modal = document.getElementById("appModal");

        const confirmBtn = document.getElementById("modalConfirm");

        const cancelBtn = document.getElementById("modalCancel");

        if (!modal || !confirmBtn || !cancelBtn) {

            resolve(false);

            return;

        }

        document.getElementById("modalTitle").textContent = title;

        document.getElementById("modalText").textContent = message;

        confirmBtn.textContent = confirmText;

        confirmBtn.classList.toggle("danger", danger);

        cancelBtn.textContent = cancelText;

        const fechar = (resultado) => {

            modal.classList.remove("active");

            confirmBtn.removeEventListener("click", aoConfirmar);

            cancelBtn.removeEventListener("click", aoCancelar);

            resolve(resultado);

        };

        const aoConfirmar = () => fechar(true);

        const aoCancelar = () => fechar(false);

        confirmBtn.addEventListener("click", aoConfirmar);

        cancelBtn.addEventListener("click", aoCancelar);

        modal.classList.add("active");

    });

}


/* ==========================================================
   Atualiza Item Ativo do Menu Inferior
========================================================== */

export function setActiveBottomNav(page){

    document

        .querySelectorAll(".bottom-nav-item")

        .forEach(item=>{

            item.classList.remove("active");

        });

    const current=document.querySelector(

        `[data-page="${page}"]`

    );

    if(current){

        current.classList.add("active");

    }

}


/* ==========================================================
   Card de Resíduo
========================================================== */

export function createWasteCard(waste) {

    return `

        <div class="waste-card">

            <img src="${waste.image}" alt="${waste.name}">

            <div class="waste-info">

                <h3>${waste.name}</h3>

                <span>${waste.category}</span>

            </div>

        </div>

    `;

}


/* ==========================================================
   Card de Notícias
========================================================== */

export function createNewsCard(news) {

    return `

        <div class="news-card">

            <img src="${news.image}" alt="${news.title}">

            <div>

                <h4>${news.title}</h4>

                <p>${news.description}</p>

                <a href="${news.link}" target="_blank">Ler notícia →</a>

            </div>

        </div>

    `;

}


/* ==========================================================
   Card do Catálogo

   A imagem é a foto real enviada pra IA naquele escaneamento
   (waste.imageUrl, base64 comprimido salvo direto no
   Firestore). Itens antigos sem foto salva caem no
   placeholder cinza abaixo.
========================================================== */

const CATALOG_CARD_PLACEHOLDER =

    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='16' fill='%23eeeeee'/%3E%3Ccircle cx='50' cy='42' r='14' fill='%23bdbdbd'/%3E%3Cpath d='M24 76l16-18 12 12 11-14 14 20z' fill='%23bdbdbd'/%3E%3C/svg%3E";

export function createCatalogCard(item) {

    return `

        <div
            class="catalog-card"
            data-category="${item.category}"
            data-open-id="${item.id}"
            style="animation-delay:${item.delay || 0}ms">

            <button
                class="catalog-card-delete"
                data-delete-id="${item.id}"
                type="button"
                title="Excluir este item"
                aria-label="Excluir este item">

                🗑

            </button>

            <img
                class="catalog-card-image"
                src="${item.imageUrl || CATALOG_CARD_PLACEHOLDER}"
                alt="${item.name}">

            <h3>${item.name}</h3>

            <span class="catalog-card-category">${item.category}</span>

            <small>${item.scannedAtLabel}</small>

        </div>

    `;

}


/* ==========================================================
   Card de Jogos
========================================================== */

export function createGameCard(game) {

    return `

        <div class="game-card">

            <img src="${game.image}" alt="">

            <h3>${game.title}</h3>

        </div>

    `;

}

export function initializeComponents() {

    console.log("✅ Componentes inicializados.");

}