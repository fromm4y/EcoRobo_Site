/* ==========================================================
   EcoRobo
   Storage Service
   ----------------------------------------------------------
   Responsável por armazenar dados localmente no navegador.
   Atualmente utiliza LocalStorage.

   Futuramente poderá ser substituído pelo Firebase Storage
   ou outro serviço sem alterar o restante do projeto.
========================================================== */

class StorageService {

    /* ======================================================
       Salvar qualquer objeto
    ====================================================== */
    save(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error("Erro ao salvar:", error);
            return false;
        }
    }

    /* ======================================================
       Ler objeto
    ====================================================== */
    get(key) {
        try {
            const value = localStorage.getItem(key);

            if (!value) return null;

            return JSON.parse(value);

        } catch (error) {
            console.error("Erro ao recuperar:", error);
            return null;
        }
    }

    /* ======================================================
       Remover objeto
    ====================================================== */
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    /* ======================================================
       Limpar armazenamento
    ====================================================== */
    clear() {
        localStorage.clear();
    }

    /* ======================================================
       Verificar existência
    ====================================================== */
    exists(key) {
        return localStorage.getItem(key) !== null;
    }

    /* ======================================================
       Atualizar objeto parcialmente
    ====================================================== */
    update(key, data) {

        const current = this.get(key);

        if (!current) {
            this.save(key, data);
            return;
        }

        const updated = {
            ...current,
            ...data
        };

        this.save(key, updated);
    }

    /* ======================================================
       Lista de Scans
    ====================================================== */

    saveScans(scans) {
        this.save("ecorobo_scans", scans);
    }

    getScans() {
        return this.get("ecorobo_scans") || [];
    }

    /* ======================================================
       Estatísticas
    ====================================================== */

    saveStatistics(statistics) {
        this.save("ecorobo_statistics", statistics);
    }

    getStatistics() {
        return this.get("ecorobo_statistics");
    }

    /* ======================================================
       Configurações
    ====================================================== */

    saveSettings(settings) {
        this.save("ecorobo_settings", settings);
    }

    getSettings() {
        return this.get("ecorobo_settings");
    }

    /* ======================================================
       Tema
    ====================================================== */

    saveTheme(theme) {
        localStorage.setItem("theme", theme);
    }

    getTheme() {
        return localStorage.getItem("theme") || "light";
    }

    /* ======================================================
       Primeira execução
    ====================================================== */

    setFirstAccessDone() {
        localStorage.setItem("first_access", "true");
    }

    isFirstAccess() {
        return localStorage.getItem("first_access") !== "true";
    }

}

const storageService = new StorageService();

export default storageService;