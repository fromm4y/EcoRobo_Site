/* ==========================================================
   EcoRobo
   Format Utils
   ----------------------------------------------------------
   Responsável pela formatação de textos, números, moedas,
   porcentagens, arquivos e informações exibidas ao usuário.
========================================================== */

/* ==========================================================
   Primeira letra maiúscula
========================================================== */

export function capitalize(text = "") {

    if (!text) return "";

    return text.charAt(0).toUpperCase() +
        text.slice(1).toLowerCase();

}

/* ==========================================================
   Todas as palavras com inicial maiúscula
========================================================== */

export function titleCase(text = "") {

    return text
        .split(" ")
        .map(word => capitalize(word))
        .join(" ");

}

/* ==========================================================
   Formatar CPF (caso utilize futuramente)
========================================================== */

export function formatCPF(cpf) {

    return cpf
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

}

/* ==========================================================
   Formatar telefone
========================================================== */

export function formatPhone(phone) {

    return phone
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");

}

/* ==========================================================
   Formatar porcentagem
========================================================== */

export function formatPercent(value, decimals = 1) {

    return `${Number(value).toFixed(decimals)}%`;

}

/* ==========================================================
   Formatar número inteiro
========================================================== */

export function formatNumber(number) {

    return Number(number).toLocaleString("pt-BR");

}

/* ==========================================================
   Formatar decimal
========================================================== */

export function formatDecimal(number, decimals = 2) {

    return Number(number).toLocaleString("pt-BR", {

        minimumFractionDigits: decimals,

        maximumFractionDigits: decimals

    });

}

/* ==========================================================
   Formatar tamanho de arquivo
========================================================== */

export function formatBytes(bytes) {

    if (bytes === 0)
        return "0 Bytes";

    const sizes = [

        "Bytes",

        "KB",

        "MB",

        "GB",

        "TB"

    ];

    const i = Math.floor(Math.log(bytes) / Math.log(1024));

    return (

        bytes / Math.pow(1024, i)

    ).toFixed(2) + " " + sizes[i];

}

/* ==========================================================
   Tempo em segundos
========================================================== */

export function formatTime(seconds) {

    seconds = Number(seconds);

    const min = Math.floor(seconds / 60);

    const sec = seconds % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

}

/* ==========================================================
   Data Brasileira
========================================================== */

export function formatDate(date) {

    return new Date(date).toLocaleDateString("pt-BR");

}

/* ==========================================================
   Data + Hora
========================================================== */

export function formatDateTime(date) {

    return new Date(date).toLocaleString("pt-BR");

}

/* ==========================================================
   Hora
========================================================== */

export function formatHour(date) {

    return new Date(date).toLocaleTimeString("pt-BR", {

        hour: "2-digit",

        minute: "2-digit"

    });

}

/* ==========================================================
   Remover acentos
========================================================== */

export function removeAccents(text = "") {

    return text.normalize("NFD")

        .replace(/[\u0300-\u036f]/g, "");

}

/* ==========================================================
   Criar slug
========================================================== */

export function slugify(text = "") {

    return removeAccents(text)

        .toLowerCase()

        .replace(/\s+/g, "-")

        .replace(/[^\w-]/g, "");

}

/* ==========================================================
   Limitar caracteres
========================================================== */

export function truncate(text = "", max = 100) {

    if (text.length <= max)
        return text;

    return text.substring(0, max) + "...";

}

/* ==========================================================
   Nome do usuário
========================================================== */

export function firstName(fullName = "") {

    return fullName.split(" ")[0];

}

/* ==========================================================
   Nome abreviado
========================================================== */

export function shortName(fullName = "") {

    const names = fullName.trim().split(" ");

    if (names.length === 1)
        return names[0];

    return `${names[0]} ${names[names.length - 1]}`;

}

/* ==========================================================
   Categoria amigável
========================================================== */

export function formatCategory(category) {

    const categories = {

        plastic: "Plastic",

        paper: "Paper",

        glass: "Glass",

        metal: "Metal",

        organic: "Organic",

        electronic: "Electronic",

        battery: "Battery",

        fabric: "Fabric",

        wood: "Wood",

        other: "Other"

    };

    return categories[category?.toLowerCase()] || category;

}

/* ==========================================================
   Confiança da IA
========================================================== */

export function formatConfidence(value) {

    return `${Math.round(value)}%`;

}

/* ==========================================================
   Status amigável
========================================================== */

export function formatStatus(status) {

    const labels = {

        success: "Success",

        warning: "Warning",

        error: "Error"

    };

    return labels[status] || status;

}