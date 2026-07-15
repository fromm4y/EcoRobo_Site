/* ==========================================================
   EcoRobo
   Date Utils
   ----------------------------------------------------------
   Centraliza todas as funções relacionadas a datas.
========================================================== */

/**
 * Retorna a data atual em ISO.
 */
export function now() {
    return new Date().toISOString();
}

/**
 * Converte Timestamp do Firestore para Date.
 */
export function firestoreToDate(timestamp) {

    if (!timestamp) return null;

    if (timestamp.toDate) {
        return timestamp.toDate();
    }

    return new Date(timestamp);

}

/**
 * Formata uma data para pt-BR.
 *
 * Aceita tanto Date/string/ISO quanto Timestamp do Firestore
 * (campos como waste.createdAt vêm do Firestore como Timestamp,
 * não como Date — daí passar sempre por firestoreToDate()
 * antes de formatar, senão o resultado é "Invalid Date").
 */
export function formatDate(date) {

    if (!date) return "";

    const data = firestoreToDate(date);

    if (!data) return "";

    return data.toLocaleDateString("pt-BR");

}

/**
 * Formata data + hora.
 */
export function formatDateTime(date) {

    if (!date) return "";

    const data = firestoreToDate(date);

    if (!data) return "";

    return data.toLocaleString("pt-BR");

}

/**
 * Retorna apenas a hora.
 */
export function formatTime(date) {

    if (!date) return "";

    const data = firestoreToDate(date);

    if (!data) return "";

    return data.toLocaleTimeString("pt-BR");

}

/**
 * Quantos dias se passaram.
 */
export function daysBetween(date) {

    if (!date) return 0;

    const nowDate = new Date();
    const oldDate = new Date(date);

    const diff = nowDate - oldDate;

    return Math.floor(diff / (1000 * 60 * 60 * 24));

}

/**
 * Retorna um texto amigável.
 */
export function timeAgo(date) {

    if (!date) return "";

    const seconds = Math.floor(
        (new Date() - new Date(date)) / 1000
    );

    if (seconds < 60)
        return "Agora";

    const minutes = Math.floor(seconds / 60);

    if (minutes < 60)
        return `${minutes} min atrás`;

    const hours = Math.floor(minutes / 60);

    if (hours < 24)
        return `${hours} h atrás`;

    const days = Math.floor(hours / 24);

    if (days < 30)
        return `${days} dias atrás`;

    const months = Math.floor(days / 30);

    if (months < 12)
        return `${months} meses atrás`;

    const years = Math.floor(months / 12);

    return `${years} anos atrás`;

}

/**
 * Verifica se duas datas são do mesmo dia.
 */
export function isSameDay(date1, date2) {

    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return (
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear()
    );

}

/**
 * Retorna o início do dia.
 */
export function startOfDay(date = new Date()) {

    const d = new Date(date);

    d.setHours(0, 0, 0, 0);

    return d;

}

/**
 * Retorna o fim do dia.
 */
export function endOfDay(date = new Date()) {

    const d = new Date(date);

    d.setHours(23, 59, 59, 999);

    return d;

}

/**
 * Retorna o nome do mês.
 */
export function monthName(date) {

    return new Date(date).toLocaleDateString("pt-BR", {
        month: "long"
    });

}

/**
 * Retorna o nome do dia da semana.
 */
export function weekDay(date) {

    return new Date(date).toLocaleDateString("pt-BR", {
        weekday: "long"
    });

}