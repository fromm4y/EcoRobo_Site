/* ==========================================================
   EcoRobo
   Profile Controller

   Responsável por controlar a tela de Perfil.
========================================================== */

import {

    renderNavbar,
    renderFooter,
    performLogout,
    updateNavbar,
    showToast,
    confirmDialog

}

from

"../components.js";

import {

    getCurrentUser,
    clearUser

}

from

"../auth.js";

import FirestoreService

from

"../../services/firestore_service.js";

import {

    compressImage

}

from

"../../utils/image_compressor.js";

import {

    getAppState,
    setAppState,
    clearAppState

}

from

"../state/app_state.js";

import {

    PROFILE,
    ACHIEVEMENTS

}

from

"../../utils/constants.js";

import {

    toggleTheme

}

from

"../theme.js";

import {

    navigate

}

from

"../router.js";

import {

    deleteUser as deleteAuthUser

}

from

"https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import {

    auth

}

from

"../../services/firebase_service.js";

/* ==========================================================
   Inicialização
========================================================== */

export async function initProfileController(){

    // Aplica o que já existir em cache ANTES de qualquer
    // await (ver mesmo raciocínio em home.controller.js) —
    // evita o "flash" do nome/foto padrão enquanto navbar e
    // footer ainda estão sendo carregados.
    aplicarCacheImediato();

    await renderNavbar({ showBack: true });

    await renderFooter();

    configurarEventos();

    await carregarPerfil();

}

/* ==========================================================
   Aplica dados já carregados nessa sessão (app_state) de
   forma síncrona, antes do primeiro paint da tela.
========================================================== */

function aplicarCacheImediato(){

    const cache = getAppState();

    if(cache.user){

        atualizarCabecalho(cache.user);

    }

    if(cache.statistics){

        atualizarEstatisticas(cache.statistics);

    }

}

/* ==========================================================
   Carregar Perfil
========================================================== */

async function carregarPerfil(){

    const firebaseUser = getCurrentUser();

    if(!firebaseUser){

        navigate("login");

        return;

    }

    let cache = getAppState();

    if(!cache.user || !cache.statistics){

        const dadosUsuario = await FirestoreService.getUserData(

            firebaseUser.uid

        );

        cache = setAppState({

            user: dadosUsuario?.profile || firebaseUser,

            statistics: dadosUsuario?.statistics || null

        });

    }

    atualizarCabecalho(cache.user || firebaseUser);

    atualizarEstatisticas(cache.statistics);

}

/* ==========================================================
   Cabeçalho
========================================================== */

function atualizarCabecalho(user){

    const nome =
        document.getElementById("profileName");

    nome.textContent = user.name || "EcoWarrior";

    nome.classList.remove("skeleton");

    document.getElementById(

        "profileEmail"

    ).textContent = user.email || "";

    const foto =
        document.getElementById("profilePhoto");

    foto.src = user.photoUrl || PROFILE.DEFAULT_AVATAR;

    foto.classList.remove("skeleton");

}

/* ==========================================================
   Estatísticas
========================================================== */

function atualizarEstatisticas(statistics){

    const campos = [

        ["profileTotalScans", statistics?.totalScans || 0],
        ["profileGamesPlayed", statistics?.totalGames || 0],
        ["profileCo2Saved", `${statistics?.co2Saved || 0} kg`],
        ["profileFavoriteWaste", statistics?.favoriteWasteType || "-"]

    ];

    campos.forEach(([id, valor]) => {

        const elemento = document.getElementById(id);

        elemento.textContent = valor;

        elemento.classList.remove("skeleton");

    });

    atualizarStreakVisual(statistics?.currentStreak || 0);

    renderizarConquistas(statistics?.unlockedAchievements || []);

    renderizarGrafico(statistics?.dailyStats || []);

}

/* ==========================================================
   Streak (dias seguidos)
========================================================== */

function atualizarStreakVisual(dias){

    const banner = document.getElementById("profileStreak");

    if(!banner){

        return;

    }

    if(dias >= 2){

        banner.textContent = `🔥 ${dias} dias seguidos reciclando!`;

        banner.classList.remove("hidden");

    }

    else{

        banner.classList.add("hidden");

    }

}

/* ==========================================================
   Conquistas

   Mostra todas as conquistas de ACHIEVEMENTS — as já
   desbloqueadas com destaque, as demais "bloqueadas"
   (cinza/opaco), pra incentivar o usuário a continuar.
========================================================== */

function renderizarConquistas(desbloqueadas){

    const grid = document.getElementById("achievementsGrid");

    if(!grid){

        return;

    }

    grid.innerHTML = ACHIEVEMENTS.map(achievement => {

        const desbloqueada = desbloqueadas.includes(achievement.id);

        return `

            <div
                class="achievement-badge ${desbloqueada ? "" : "locked"}"
                title="${achievement.description}">

                <span class="achievement-badge-icon">

                    ${desbloqueada ? achievement.icon : "🔒"}

                </span>

                <h4>${achievement.name}</h4>

            </div>

        `;

    }).join("");

}

/* ==========================================================
   Gráfico de Evolução (últimos 7 dias, sem lib externa)

   Barras com altura proporcional ao número de escaneamentos
   de cada dia, a partir de statistics.dailyStats.
========================================================== */

function renderizarGrafico(dailyStats){

    const container = document.getElementById("impactChart");

    if(!container){

        return;

    }

    const hoje = new Date();

    const ultimosSeteDias = [];

    for(let i = 6; i >= 0; i--){

        const data = new Date(hoje);

        data.setDate(data.getDate() - i);

        const iso = data.toISOString().slice(0, 10);

        const entrada =
            dailyStats.find(item => item.date === iso);

        ultimosSeteDias.push({

            label: data
                .toLocaleDateString("pt-BR", { weekday: "short" })
                .replace(".", ""),

            scans: entrada?.scans || 0

        });

    }

    const maiorValor =
        Math.max(1, ...ultimosSeteDias.map(dia => dia.scans));

    container.innerHTML = ultimosSeteDias.map(dia => `

        <div class="chart-bar">

            <span class="chart-bar-value">${dia.scans || ""}</span>

            <div
                class="chart-bar-fill"
                style="height:${(dia.scans / maiorValor) * 100}%">
            </div>

            <span class="chart-bar-label">${dia.label}</span>

        </div>

    `).join("");

}

/* ==========================================================
   Eventos
========================================================== */

function configurarEventos(){

    document

        .getElementById("btnProfileCatalog")

        ?.addEventListener(

            "click",

            () => {

                navigate("catalog");

            }

        );

    document

        .getElementById("btnProfileLogout")

        ?.addEventListener(

            "click",

            () => {

                performLogout();

            }

        );

    document

        .getElementById("btnProfilePhotoEdit")

        ?.addEventListener(

            "click",

            () => {

                document

                    .getElementById("profilePhotoInput")

                    ?.click();

            }

        );

    document

        .getElementById("profilePhotoInput")

        ?.addEventListener(

            "change",

            trocarFotoPerfil

        );

    document

        .getElementById("btnDarkModeToggle")

        ?.addEventListener(

            "click",

            () => {

                toggleTheme();

            }

        );

    document

        .getElementById("btnDeleteAccount")

        ?.addEventListener(

            "click",

            excluirConta

        );

}

/* ==========================================================
   Excluir Conta

   Apaga a conta do Firebase Auth PRIMEIRO — se falhar (ex:
   sessão antiga demais, "requires-recent-login"), nada mais é
   tocado e o usuário pode tentar de novo depois de logar de
   novo. Só depois de confirmado que a conta de autenticação
   foi removida é que os dados do Firestore são apagados, pra
   nunca ficar uma conta "pela metade".
========================================================== */

async function excluirConta(){

    const confirmado = await confirmDialog({

        title: "Excluir sua conta?",

        message: "Essa ação é permanente: todos os seus escaneamentos, estatísticas e dados serão apagados e não podem ser recuperados.",

        confirmText: "Excluir conta",

        danger: true

    });

    if(!confirmado){

        return;

    }

    const usuario = getCurrentUser();

    if(!usuario || !auth.currentUser){

        return;

    }

    try{

        await deleteAuthUser(auth.currentUser);

    }

    catch(error){

        console.error(error);

        if(error.code === "auth/requires-recent-login"){

            showToast("Por segurança, saia e faça login de novo antes de excluir a conta.", "error");

        }

        else{

            showToast("Não foi possível excluir a conta. Tente novamente.", "error");

        }

        return;

    }

    await FirestoreService.deleteAllUserWaste(usuario.uid);

    await FirestoreService.deleteUser(usuario.uid);

    clearUser();

    clearAppState();

    sessionStorage.clear();

    navigate("login");

    showToast("Sua conta foi excluída.");

}

/* ==========================================================
   Trocar Foto de Perfil

   Comprime a imagem escolhida no navegador e salva o base64
   resultante direto no Firestore (users/{uid}.photoUrl) — sem
   Firebase Storage, que exige plano pago. Atualiza a tela, o
   navbar e o cache local (app_state) na hora.
========================================================== */

async function trocarFotoPerfil(event){

    const arquivo = event.target.files[0];

    if(!arquivo){

        return;

    }

    const usuario = getCurrentUser();

    if(!usuario){

        return;

    }

    let photoUrl;

    try{

        photoUrl = await compressImage(arquivo, {

            maxSize: 400

        });

    }

    catch(error){

        showToast(error.message, "error");

        return;

    }

    await FirestoreService.updateField(

        usuario.uid,

        "photoUrl",

        photoUrl

    );

    const foto = document.getElementById("profilePhoto");

    foto.src = photoUrl;

    foto.classList.remove("skeleton");

    updateNavbar({ photoUrl });

    const cache = getAppState();

    setAppState({

        user: { ...cache.user, photoUrl }

    });

    showToast("Foto de perfil atualizada!");

}
