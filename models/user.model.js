/* ==========================================================
   EcoRobo
   User Model

   Representa um usuário da plataforma.

   Este model padroniza a estrutura dos dados do usuário
   utilizada em toda a aplicação.

   Nenhuma página deve criar objetos manualmente.
   Sempre utilize este model.

   Autor: EcoRobo
========================================================== */

/**
 * Classe responsável por representar um usuário.
 */
export default class User {

    /**
     * Cria um novo usuário.
     *
     * @param {Object} data Dados do usuário.
     */
    constructor(data = {}) {

        /* ==========================================
           Identificação
        ========================================== */

        this.uid = data.uid || "";

        this.name = data.name || "";

        this.email = data.email || "";

        this.photoUrl = data.photoUrl || "";



        /* ==========================================
           Datas
        ========================================== */

        this.createdAt = data.createdAt || null;

        this.lastLogin = data.lastLogin || null;



        /* ==========================================
           Configurações
        ========================================== */

        this.language = data.language || "pt-BR";

        this.theme = data.theme || "light";



        /* ==========================================
           Preferências
        ========================================== */

        this.notifications = data.notifications ?? true;

        this.sound = data.sound ?? true;

        this.vibration = data.vibration ?? true;

    }



    /* ======================================================
       Converte o objeto para JSON
    ====================================================== */

    toJSON() {

        return {

            uid: this.uid,

            name: this.name,

            email: this.email,

            photoUrl: this.photoUrl,

            createdAt: this.createdAt,

            lastLogin: this.lastLogin,

            language: this.language,

            theme: this.theme,

            notifications: this.notifications,

            sound: this.sound,

            vibration: this.vibration

        };

    }



    /* ======================================================
       Converte o objeto para Firestore
    ====================================================== */

    toFirestore() {

        return {

            uid: this.uid,

            name: this.name,

            email: this.email,

            photoUrl: this.photoUrl,

            createdAt: this.createdAt,

            lastLogin: this.lastLogin,

            language: this.language,

            theme: this.theme,

            notifications: this.notifications,

            sound: this.sound,

            vibration: this.vibration

        };

    }



    /* ======================================================
       Cria um User a partir do Firestore
    ====================================================== */

    static fromFirestore(doc) {

        if (!doc) return null;

        return new User({

            uid: doc.uid,

            name: doc.name,

            email: doc.email,

            photoUrl: doc.photoUrl,

            createdAt: doc.createdAt,

            lastLogin: doc.lastLogin,

            language: doc.language,

            theme: doc.theme,

            notifications: doc.notifications,

            sound: doc.sound,

            vibration: doc.vibration

        });

    }



    /* ======================================================
       Cria um User a partir de um JSON
    ====================================================== */

    static fromJSON(json) {

        return new User(json);

    }

}