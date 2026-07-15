/* ==========================================================
   EcoRobo
   Firebase Service
========================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";


// Configuração do Firebase
const firebaseConfig = {

    apiKey: "AIzaSyAHjvVfne3zlTTfMHZy4woBb0DZzfjteBo",

    authDomain: "ecorobo-b1602.firebaseapp.com",

    projectId: "ecorobo-b1602",

    storageBucket: "ecorobo-b1602.firebasestorage.app",

    messagingSenderId: "463409148953",

    appId: "1:463409148953:web:688af664cb02c5f379e688"

};


// Inicializa o Firebase
const app = initializeApp(firebaseConfig);


// Serviços utilizados
export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;