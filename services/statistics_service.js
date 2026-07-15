/* ==========================================================
   EcoRobo
   Statistics Service
   ----------------------------------------------------------
   Responsável por gerar todas as estatísticas do usuário
   a partir do histórico de scans e jogos.

   Nenhuma tela deve calcular estatísticas diretamente.
========================================================== */

import storageService from "./storage_service.js";

class StatisticsService {

    constructor() {
        this.scans = storageService.getScans();
    }

    /* ======================================================
       Atualiza os scans em memória
    ====================================================== */

    refresh() {
        this.scans = storageService.getScans();
    }

    /* ======================================================
       Total de scans
    ====================================================== */

    getTotalScans() {
        return this.scans.length;
    }

    /* ======================================================
       Último scan realizado
    ====================================================== */

    getLastScan() {

        if (this.scans.length === 0)
            return null;

        return this.scans[this.scans.length - 1];
    }

    /* ======================================================
       Quantidade por categoria
    ====================================================== */

    getWasteByCategory() {

        const categories = {};

        this.scans.forEach(scan => {

            const category = scan.category || "Outros";

            if (!categories[category])
                categories[category] = 0;

            categories[category]++;

        });

        return categories;

    }

    /* ======================================================
       Tipo mais escaneado
    ====================================================== */

    getFavoriteWaste() {

        const data = this.getWasteByCategory();

        let favorite = "";
        let amount = 0;

        Object.entries(data).forEach(([type, total]) => {

            if (total > amount) {
                favorite = type;
                amount = total;
            }

        });

        return {

            type: favorite,
            total: amount

        };

    }

    /* ======================================================
       Quantidade descoberta do catálogo
    ====================================================== */

    getCatalogProgress(totalCatalogItems = 100) {

        const unique = new Set();

        this.scans.forEach(scan => {

            unique.add(scan.name);

        });

        return {

            discovered: unique.size,

            total: totalCatalogItems,

            percent: Number(
                ((unique.size / totalCatalogItems) * 100).toFixed(1)
            )

        };

    }

    /* ======================================================
       Jogos jogados
    ====================================================== */

    getGamesPlayed() {

        return Number(localStorage.getItem("gamesPlayed")) || 0;

    }

    /* ======================================================
       Jogos concluídos
    ====================================================== */

    getGamesCompleted() {

        return Number(localStorage.getItem("gamesCompleted")) || 0;

    }

    /* ======================================================
       Dias consecutivos
    ====================================================== */

    getCurrentStreak() {

        return Number(localStorage.getItem("currentStreak")) || 0;

    }

    /* ======================================================
       Registrar partida
    ====================================================== */

    registerGamePlayed() {

        const total = this.getGamesPlayed() + 1;

        localStorage.setItem(
            "gamesPlayed",
            total
        );

    }

    /* ======================================================
       Registrar vitória
    ====================================================== */

    registerGameCompleted() {

        const total = this.getGamesCompleted() + 1;

        localStorage.setItem(
            "gamesCompleted",
            total
        );

    }

    /* ======================================================
       Atualizar sequência diária
    ====================================================== */

    updateDailyStreak() {

        const today = new Date().toDateString();

        const lastAccess =
            localStorage.getItem("lastAccess");

        let streak = this.getCurrentStreak();

        if (lastAccess !== today) {

            streak++;

            localStorage.setItem(
                "currentStreak",
                streak
            );

            localStorage.setItem(
                "lastAccess",
                today
            );

        }

    }

    /* ======================================================
       Dashboard completo
    ====================================================== */

    getDashboard() {

        return {

            totalScans: this.getTotalScans(),

            favoriteWaste: this.getFavoriteWaste(),

            categoryData: this.getWasteByCategory(),

            catalog: this.getCatalogProgress(),

            lastScan: this.getLastScan(),

            gamesPlayed: this.getGamesPlayed(),

            gamesCompleted: this.getGamesCompleted(),

            streak: this.getCurrentStreak()

        };

    }

}

const statisticsService = new StatisticsService();

export default statisticsService;