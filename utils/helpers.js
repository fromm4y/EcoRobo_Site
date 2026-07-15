/* ==========================================================
   EcoRobo
   Helpers
   ----------------------------------------------------------
   Funções utilitárias reutilizáveis em todo o projeto.
========================================================== */

/* ==========================================================
   Gerar ID único
========================================================== */

export function generateId() {

    return crypto.randomUUID();

}

/* ==========================================================
   Esperar determinado tempo
========================================================== */

export function sleep(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

/* ==========================================================
   Debounce
========================================================== */

export function debounce(callback, delay = 500) {

    let timer;

    return (...args) => {

        clearTimeout(timer);

        timer = setTimeout(() => {

            callback(...args);

        }, delay);

    };

}

/* ==========================================================
   Throttle
========================================================== */

export function throttle(callback, delay = 300) {

    let waiting = false;

    return (...args) => {

        if (waiting) return;

        callback(...args);

        waiting = true;

        setTimeout(() => {

            waiting = false;

        }, delay);

    };

}

/* ==========================================================
   Copiar texto
========================================================== */

export async function copyToClipboard(text) {

    try {

        await navigator.clipboard.writeText(text);

        return true;

    } catch (error) {

        console.error(error);

        return false;

    }

}

/* ==========================================================
   Abrir URL em nova aba
========================================================== */

export function openUrl(url) {

    window.open(url, "_blank");

}

/* ==========================================================
   Download de arquivo
========================================================== */

export function downloadFile(url, filename) {

    const link = document.createElement("a");

    link.href = url;

    link.download = filename;

    document.body.appendChild(link);

    link.click();

    link.remove();

}

/* ==========================================================
   Verificar se dispositivo é mobile
========================================================== */

export function isMobile() {

    return window.innerWidth <= 768;

}

/* ==========================================================
   Verificar se dispositivo é tablet
========================================================== */

export function isTablet() {

    return window.innerWidth > 768 &&
           window.innerWidth <= 1024;

}

/* ==========================================================
   Verificar se dispositivo é desktop
========================================================== */

export function isDesktop() {

    return window.innerWidth > 1024;

}

/* ==========================================================
   Scroll suave até elemento
========================================================== */

export function scrollToElement(id) {

    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}

/* ==========================================================
   Capitalizar texto
========================================================== */

export function capitalize(text) {

    if (!text) return "";

    return text.charAt(0).toUpperCase() +
           text.slice(1).toLowerCase();

}

/* ==========================================================
   Primeira letra maiúscula de cada palavra
========================================================== */

export function titleCase(text) {

    if (!text) return "";

    return text
        .toLowerCase()
        .split(" ")
        .map(word => capitalize(word))
        .join(" ");

}

/* ==========================================================
   Gerar cor hexadecimal aleatória
========================================================== */

export function randomColor() {

    return "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

}

/* ==========================================================
   Número aleatório
========================================================== */

export function randomNumber(min, max) {

    return Math.floor(

        Math.random() * (max - min + 1)

    ) + min;

}

/* ==========================================================
   Embaralhar array
========================================================== */

export function shuffle(array) {

    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];

    }

    return arr;

}

/* ==========================================================
   Remover itens duplicados
========================================================== */

export function unique(array) {

    return [...new Set(array)];

}

/* ==========================================================
   Agrupar array por propriedade
========================================================== */

export function groupBy(array, property) {

    return array.reduce((groups, item) => {

        const key = item[property];

        if (!groups[key]) {

            groups[key] = [];

        }

        groups[key].push(item);

        return groups;

    }, {});

}

/* ==========================================================
   Obter extensão de arquivo
========================================================== */

export function getFileExtension(filename) {

    return filename.split(".").pop().toLowerCase();

}

/* ==========================================================
   Converter imagem para Base64
========================================================== */

export function imageToBase64(file) {

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);

        reader.onerror = reject;

        reader.readAsDataURL(file);

    });

}

/* ==========================================================
   Baixar imagem Base64
========================================================== */

export function base64ToImage(base64, filename = "imagem.png") {

    const link = document.createElement("a");

    link.href = base64;

    link.download = filename;

    link.click();

}

/* ==========================================================
   Detectar conexão
========================================================== */

export function isOnline() {

    return navigator.onLine;

}

/* ==========================================================
   Vibrar dispositivo (quando suportado)
========================================================== */

export function vibrate(duration = 100) {

    if ("vibrate" in navigator) {

        navigator.vibrate(duration);

    }

}

/* ==========================================================
   Fullscreen
========================================================== */

export function toggleFullscreen() {

    if (!document.fullscreenElement) {

        document.documentElement.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

}