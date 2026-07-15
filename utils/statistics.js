/* ==========================================================
   EcoRobo
   Statistics Utils
   ----------------------------------------------------------
   Responsável pelos cálculos estatísticos do aplicativo.
========================================================== */

import { WASTE_CATEGORIES } from "./constants.js";

/* ==========================================================
   Total de escaneamentos
========================================================== */

export function getTotalScans(scans = []) {
    return scans.length;
}

/* ==========================================================
   Total de jogos realizados
========================================================== */

export function getTotalGamesPlayed(games = []) {
    return games.length;
}

/* ==========================================================
   Jogos vencidos
========================================================== */

export function getGamesWon(games = []) {
    return games.filter(game => game.completed).length;
}

/* ==========================================================
   Jogos perdidos
========================================================== */

export function getGamesLost(games = []) {
    return games.filter(game => !game.completed).length;
}

/* ==========================================================
   Total por tipo de lixo
========================================================== */

export function getWasteCount(scans = []) {

    const result = {};

    WASTE_CATEGORIES.forEach(type => {
        result[type] = 0;
    });

    scans.forEach(scan => {

        if (scan.type && result.hasOwnProperty(scan.type)) {
            result[scan.type]++;
        }

    });

    return result;

}

/* ==========================================================
   Tipo mais reciclado
========================================================== */

export function getFavoriteWasteType(scans = []) {

    const count = getWasteCount(scans);

    let favorite = null;
    let total = 0;

    Object.entries(count).forEach(([type, value]) => {

        if (value > total) {
            favorite = type;
            total = value;
        }

    });

    return favorite;

}

/* ==========================================================
   Último descarte realizado
========================================================== */

export function getLastScan(scans = []) {

    if (scans.length === 0)
        return null;

    return scans.sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    )[0];

}

/* ==========================================================
   Total por mês
========================================================== */

export function getMonthlyScans(scans = []) {

    const months = {};

    scans.forEach(scan => {

        const date = new Date(scan.createdAt);

        const key =
            `${date.getFullYear()}-${date.getMonth() + 1}`;

        months[key] = (months[key] || 0) + 1;

    });

    return months;

}

/* ==========================================================
   Total por categoria
========================================================== */

export function getCategoryStatistics(scans = []) {

    return getWasteCount(scans);

}

/* ==========================================================
   Estatísticas gerais do usuário
========================================================== */

export function buildDashboardStatistics(
    scans = [],
    games = []
) {

    return {

        totalScans: getTotalScans(scans),

        totalGames: getTotalGamesPlayed(games),

        gamesWon: getGamesWon(games),

        gamesLost: getGamesLost(games),

        favoriteWasteType: getFavoriteWasteType(scans),

        lastScan: getLastScan(scans),

        wasteByCategory: getWasteCount(scans),

        monthlyScans: getMonthlyScans(scans)

    };

}