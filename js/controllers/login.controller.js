/* ==========================================================
   EcoRobo
   Login Controller
========================================================== */

import {

    login

}

from

"../auth.js";

import {

    navigate

}

from

"../router.js";

import {

    showLoader,
    updateLoader,
    hideLoader,
    bindPasswordToggle

}

from

"../components.js";

/* ==========================================================
   Inicialização
========================================================== */

export function initLoginController(){

    const form = document.getElementById("loginForm");

    if(form){

        form.addEventListener(

            "submit",

            handleLogin

        );

    }

    bindPasswordToggle("togglePassword", "password");

    const registerLink = document.getElementById("goToRegister");

    if(registerLink){

        registerLink.addEventListener(

            "click",

            (event)=>{

                event.preventDefault();

                navigate("register");

            }

        );

    }

}

/* ==========================================================
   Login
========================================================== */

async function handleLogin(event){

    event.preventDefault();

    const email =

        document

        .getElementById("email")

        .value

        .trim();

    const password =

        document

        .getElementById("password")

        .value;

    if(email===""){

        alert("Informe seu e-mail.");

        return;

    }

    if(password===""){

        alert("Informe sua senha.");

        return;

    }

    showLoader("login");

    updateLoader(20);

    const response = await login(

        email,

        password

    );

    updateLoader(80);

    if(response.success){

        updateLoader(100);

        setTimeout(()=>{

            hideLoader();

            navigate("home");

        },300);

    }

    else{

        hideLoader();

        alert(

            traduzirErro(response.message)

        );

    }

}

/* ==========================================================
   Tradutor de erros Firebase
========================================================== */

function traduzirErro(message){

    if(message.includes("invalid-credential")){

        return "E-mail ou senha incorretos.";

    }

    if(message.includes("user-not-found")){

        return "Usuário não encontrado.";

    }

    if(message.includes("wrong-password")){

        return "Senha incorreta.";

    }

    if(message.includes("too-many-requests")){

        return "Muitas tentativas. Aguarde alguns minutos.";

    }

    if(message.includes("network-request-failed")){

        return "Sem conexão com a internet.";

    }

    return "Não foi possível realizar o login.";

}