/* ==========================================================
   EcoRobo
   Authentication Controller
========================================================== */

import {

    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile

}

from

"https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

import { auth }

from

"../services/firebase_service.js";

import FirestoreService

from

"../services/firestore_service.js";

import UserModel

from

"../models/user.model.js";

const USER_KEY = "ecorobo_user";

/* ==========================================================
   Salva usuário no Local Storage
========================================================== */

export function saveUser(user){

    localStorage.setItem(

        USER_KEY,

        JSON.stringify(user)

    );

}

/* ==========================================================
   Recupera usuário salvo
========================================================== */

export function getCurrentUser(){

    const data = localStorage.getItem(USER_KEY);

    if(!data){

        return null;

    }

    return JSON.parse(data);

}

/* ==========================================================
   Remove usuário
========================================================== */

export function clearUser(){

    localStorage.removeItem(USER_KEY);

}

/* ==========================================================
   Verifica autenticação
========================================================== */

export function isAuthenticated(){

    return getCurrentUser() !== null;

}

/* ==========================================================
   Login
========================================================== */

export async function login(email,password){

    try{

        const credential =

            await signInWithEmailAndPassword(

                auth,

                email,

                password

            );

        const firebaseUser = credential.user;

        const user = {

            uid: firebaseUser.uid,

            name: firebaseUser.displayName ?? "",

            email: firebaseUser.email,

            photoUrl: firebaseUser.photoURL ?? ""

        };

        saveUser(user);

        return{

            success:true,

            user

        };

    }

    catch(error){

        console.error(error);

        return{

            success:false,

            message:error.message

        };

    }

}

/* ==========================================================
   Cadastro
========================================================== */

export async function register(

    name,

    email,

    password

){

    try{

        const credential =

            await createUserWithEmailAndPassword(

                auth,

                email,

                password

            );

        await updateProfile(

            credential.user,

            {

                displayName:name

            }

        );

        const user={

            uid:credential.user.uid,

            name,

            email,

            photoUrl:""

        };

        saveUser(user);

        await FirestoreService.createUser(

            new UserModel({

                ...user,

                createdAt: new Date()

            })

        );

        return{

            success:true,

            user

        };

    }

    catch(error){

        console.error(error);

        return{

            success:false,

            message:error.message

        };

    }

}

/* ==========================================================
   Logout
========================================================== */

export async function logout(){

    try{

        await signOut(auth);

        clearUser();

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}

/* ==========================================================
   Atualizar perfil local
========================================================== */

export function updateUser(data){

    const current = getCurrentUser();

    if(!current){

        return;

    }

    const updated = {

        ...current,

        ...data

    };

    saveUser(updated);

}