/* ==========================================================
   EcoRobo
   Authentication Service
   ----------------------------------------------------------
   Responsável por toda comunicação com o Firebase Auth.
========================================================== */

import {

    auth

} from "./firebase_service.js";

import {

    signInWithEmailAndPassword,

    createUserWithEmailAndPassword,

    sendPasswordResetEmail,

    signOut,

    onAuthStateChanged,

    updateProfile

} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import FirestoreService from "./firestore_service.js";

/* ==========================================================
   Login
========================================================== */

export async function login(email, password) {

    const credential = await signInWithEmailAndPassword(

        auth,

        email,

        password

    );

    return credential.user;

}

/* ==========================================================
   Cadastro
========================================================== */

export async function register(

    name,

    email,

    password

) {

    const credential = await createUserWithEmailAndPassword(

        auth,

        email,

        password

    );

    const user = credential.user;

    /* Atualiza nome no Firebase Auth */

    await updateProfile(user, {

        displayName: name

    });

    /* Cria documento do usuário no Firestore */

    await FirestoreService.createUser({

        uid: user.uid,

        name,

        email

    });

    return user;

}

/* ==========================================================
   Logout
========================================================== */

export async function logout() {

    await signOut(auth);

}

/* ==========================================================
   Recuperar senha
========================================================== */

export async function resetPassword(email) {

    await sendPasswordResetEmail(

        auth,

        email

    );

}

/* ==========================================================
   Listener de autenticação
========================================================== */

export function onUserChanged(callback) {

    onAuthStateChanged(

        auth,

        (user) => {

            callback(user);

        }

    );

}

/* ==========================================================
   Usuário atual
========================================================== */

export function currentUser() {

    return auth.currentUser;

}

/* ==========================================================
   Verifica login
========================================================== */

export function isLogged() {

    return auth.currentUser != null;

}

/* ==========================================================
   Atualizar nome do usuário
========================================================== */

export async function updateUserName(name) {

    if (!auth.currentUser)

        return;

    await updateProfile(

        auth.currentUser,

        {

            displayName: name

        }

    );

}

/* ==========================================================
   Excluir conta
   (Implementaremos depois)
========================================================== */

export async function deleteAccount() {

    console.warn(

        "Função ainda não implementada."

    );

}