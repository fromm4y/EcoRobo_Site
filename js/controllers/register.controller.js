/* ==========================================================
   EcoRobo
   Register Controller
========================================================== */

import {

    register

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

import {

    validateRegister

}

from

"../../utils/validators.js";

/* ==========================================================
   Inicialização
========================================================== */

export function initRegisterController(){

    const form = document.getElementById("registerForm");

    if(form){

        form.addEventListener(

            "submit",

            handleRegister

        );

    }

    bindPasswordToggle("togglePassword", "password");

    bindPasswordToggle("toggleConfirmPassword", "confirmPassword");

    const loginLink = document.getElementById("goToLogin");

    if(loginLink){

        loginLink.addEventListener(

            "click",

            (event)=>{

                event.preventDefault();

                navigate("login");

            }

        );

    }

}

/* ==========================================================
   Cadastro
========================================================== */

async function handleRegister(event){

    event.preventDefault();

    const name =

        document

        .getElementById("name")

        .value

        .trim();

    const email =

        document

        .getElementById("email")

        .value

        .trim();

    const password =

        document

        .getElementById("password")

        .value;

    const confirmPassword =

        document

        .getElementById("confirmPassword")

        .value;

    const validation = validateRegister({

        name,
        email,
        password,
        confirmPassword

    });

    if(!validation.name){

        alert("Informe seu nome completo (mínimo 3 letras).");

        return;

    }

    if(!validation.email){

        alert("Informe um e-mail válido.");

        return;

    }

    if(!validation.password){

        alert("A senha deve ter ao menos 8 caracteres, com letra maiúscula, minúscula e número.");

        return;

    }

    if(!validation.confirmPassword){

        alert("As senhas não coincidem.");

        return;

    }

    showLoader("default");

    updateLoader(20);

    const response = await register(

        name,

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

    if(message.includes("email-already-in-use")){

        return "Este e-mail já está cadastrado.";

    }

    if(message.includes("invalid-email")){

        return "E-mail inválido.";

    }

    if(message.includes("weak-password")){

        return "Senha muito fraca. Use uma senha mais forte.";

    }

    if(message.includes("network-request-failed")){

        return "Sem conexão com a internet.";

    }

    return "Não foi possível criar a conta.";

}
