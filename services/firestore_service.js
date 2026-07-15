/* ==========================================================
   EcoRobo
   Firestore Service

   Responsável por toda comunicação com o Firebase Firestore.

   Nenhuma tela deve acessar o Firestore diretamente.

   Todas as operações passam por este Service.

========================================================== */

import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import { db } from "./firebase_service.js";

/* ==========================================================
   Remove campos "undefined" de um objeto (Firestore não
   aceita gravar undefined, só null ou o campo ausente).
========================================================== */

function sanitizeForFirestore(obj) {

    const clean = {};

    Object.entries(obj).forEach(([key, value]) => {

        clean[key] = value === undefined ? null : value;

    });

    return clean;

}

import UserModel from "../models/user.model.js";
import WasteModel from "../models/waste.model.js";
import GameModel from "../models/game.model.js";
import StatisticsModel from "../models/statistics.model.js";

class FirestoreService {

    /* ======================================================
        USERS
    ====================================================== */
        static async createUser(user) {

        try {

            await setDoc(

                doc(db, "users", user.uid),

                {

                    ...user.toFirestore(),

                    statistics: {

                        totalScans: 0,

                        recycledItems: 0,

                        co2Saved: 0,

                        favoriteWasteType: "",

                        gamesPlayed: 0,

                        lastScanDate: null

                    },

                    lastScans: [],

                    settings: {

                        notifications: true,

                        darkMode: false,

                        language: "pt-BR"

                    }

                }

            );

            return true;

        }

        catch (error) {

            console.error(error);

            return false;

        }

    }
        static async getUser(uid) {

        try {

            const snapshot =
                await getDoc(doc(db, "users", uid));

            if (!snapshot.exists())
                return null;

            return new UserModel(snapshot.data());

        } catch (error) {

            console.error(error);

            return null;

        }

    }
        static async updateUser(uid, data) {

        try {

            await updateDoc(
                doc(db, "users", uid),
                data
            );

            return true;

        } catch (error) {

            console.error(error);

            return false;

        }

    }
        static async deleteUser(uid) {

        try {

            await deleteDoc(
                doc(db, "users", uid)
            );

            return true;

        } catch (error) {

            console.error(error);

            return false;

        }

    }

/* ======================================================
    USER DASHBOARD
====================================================== */

    static async getUserData(uid){

        try{

            const snapshot = await getDoc(

                doc(db,"users",uid)

            );

            if(!snapshot.exists()){

                return null;

            }

            const data = snapshot.data();

            return{

                profile: new UserModel(data),

                statistics: new StatisticsModel(data.statistics || {}),

                lastScans: data.lastScans || [],

                settings: data.settings || {}

            };

        }

        catch(error){

            console.error(error);

            return null;

        }

    }

    /* ======================================================
    Atualizar Estatísticas
====================================================== */

    static async updateStatistics(uid, statistics){

        try{

            await updateDoc(

                doc(db,"users",uid),

                {

                    statistics: statistics.toFirestore()

                }

            );

            return true;

        }

        catch(error){

            console.error(error);

            return false;

        }

    }

    /* ======================================================
    Últimos Scans
====================================================== */

    static async saveLastScan(uid, scan){

        try{

            const user = await this.getUser(uid);

            if(!user){

                return false;

            }

            const snapshot = await getDoc(

                doc(db,"users",uid)

            );

            const data = snapshot.data();

            let scans = data.lastScans || [];

            scans.unshift(sanitizeForFirestore(scan));

            scans = scans.slice(0,5);

            await updateDoc(

                doc(db,"users",uid),

                {

                    lastScans: scans

                }

            );

            return true;

        }

        catch(error){

            console.error(error);

            return false;

        }

    }

    /* ======================================================
    Buscar Últimos Scans
====================================================== */

    static async getLastScans(uid){

        try{

            const snapshot = await getDoc(

                doc(db,"users",uid)

            );

            if(!snapshot.exists()){

                return [];

            }

            return snapshot.data().lastScans || [];

        }

        catch(error){

            console.error(error);

            return [];

        }

    }

    /* ======================================================
       Waste (Histórico)
    ====================================================== */
    static async saveWaste(waste) {

        try {

            const ref = await addDoc(

                collection(db, "wastes"),

                waste.toFirestore()

            );

            await this.saveLastScan(

                waste.userId,

                {

                    id: ref.id,

                    name: waste.name,

                    type: waste.category,

                    image: waste.imageUrl,

                    createdAt: new Date()

                }

            );

            return ref.id;

        }

        catch (error) {

            console.error(error);

            return null;

        }

    }

        static async getUserWaste(userId) {

        try {

            const q = query(

                collection(db, "wastes"),

                where("userId", "==", userId),

                orderBy("createdAt", "desc")

            );

            const snapshot = await getDocs(q);

            return snapshot.docs.map(

                doc =>

                WasteModel.fromFirestore(doc)

            );

        } catch (error) {

            console.error(error);

            return [];

        }

    }
        static async getLastWaste(userId){

        try{

            const q=query(

                collection(db,"wastes"),

                where("userId","==",userId),

                orderBy("createdAt","desc"),

                limit(1)

            );

            const snapshot=await getDocs(q);

            if(snapshot.empty)
                return null;

            return WasteModel.fromFirestore(snapshot.docs[0]);

        }

        catch(error){

            console.error(error);

            return null;

        }

    }
        static async getWaste(id){

        try{

            const snapshot=
            await getDoc(doc(db,"wastes",id));

            if(!snapshot.exists())
                return null;

            return WasteModel.fromFirestore(snapshot);

        }

        catch(error){

            console.error(error);

            return null;

        }

    }
        static async deleteWaste(id){

        try{

            await deleteDoc(doc(db,"wastes",id));

            return true;

        }

        catch(error){

            console.error(error);

            return false;

        }

    }
        /* ======================================================
        Excluir todos os resíduos de um usuário

        Usado ao excluir a conta (Perfil) — apaga cada
        documento em "wastes" que pertence a esse usuário.
    ====================================================== */

        static async deleteAllUserWaste(userId){

        try{

            const lista = await this.getUserWaste(userId);

            await Promise.all(

                lista.map(item => deleteDoc(doc(db,"wastes",item.id)))

            );

            return true;

        }

        catch(error){

            console.error(error);

            return false;

        }

    }
        /* ======================================================
        Jogos
    ====================================================== */
    static async saveGame(game){

        try{

            const ref=await addDoc(

                collection(db,"games"),

                game.toFirestore()

            );

            return ref.id;

        }

        catch(error){

            console.error(error);

            return null;

        }

    }
        static async getGames(userId){

        try{

            const q=query(

                collection(db,"games"),

                where("userId","==",userId),

                orderBy("createdAt","desc")

            );

            const snapshot=await getDocs(q);

            return snapshot.docs.map(

                doc=>GameModel.fromFirestore(doc)

            );

        }

        catch(error){

            console.error(error);

            return [];

        }

    }
        static async getGamesByWaste(userId,wasteType){

        try{

            const q=query(

                collection(db,"games"),

                where("userId","==",userId),

                where("wasteType","==",wasteType)

            );

            const snapshot=await getDocs(q);

            return snapshot.docs.map(

                doc=>GameModel.fromFirestore(doc)

            );

        }

        catch(error){

            console.error(error);

            return [];

        }

    }
       /* ======================================================
        Dashboard
    ====================================================== */
        static async getAllWaste(){

        try{

            const snapshot=
            await getDocs(collection(db,"wastes"));

            return snapshot.docs.map(

                doc=>WasteModel.fromFirestore(doc)

            );

        }

        catch(error){

            console.error(error);

            return [];

        }

    }
    
 /* ======================================================
    Atualizar Campo
====================================================== */

        static async updateField(uid, field, value){

            try{

                await updateDoc(

                    doc(db,"users",uid),

                    {

                        [field]:value

                    }

                );

                return true;

            }

            catch(error){

                console.error(error);

                return false;

            }

        }
    }



export default FirestoreService;