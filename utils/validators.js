/* ==========================================================
   EcoRobo
   Validators
   ----------------------------------------------------------
   Responsável por validar dados utilizados em todo o sistema.
========================================================== */

/* ==========================================================
   Verifica se valor está vazio
========================================================== */

export function isEmpty(value) {

    if (value === null || value === undefined)
        return true;

    return value.toString().trim() === "";

}

/* ==========================================================
   Validação de e-mail
========================================================== */

export function isValidEmail(email) {

    if (isEmpty(email))
        return false;

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}

/* ==========================================================
   Validação de senha
========================================================== */

export function isValidPassword(password) {

    if (isEmpty(password))
        return false;

    return password.length >= 6;

}

/* ==========================================================
   Senha forte
========================================================== */

export function isStrongPassword(password) {

    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    return regex.test(password);

}

/* ==========================================================
   Confirmar senha
========================================================== */

export function passwordsMatch(password, confirmPassword) {

    return password === confirmPassword;

}

/* ==========================================================
   Nome válido
========================================================== */

export function isValidName(name) {

    if (isEmpty(name))
        return false;

    return name.trim().length >= 3;

}

/* ==========================================================
   Idade válida
========================================================== */

export function isValidAge(age) {

    const value = Number(age);

    return value >= 5 && value <= 120;

}

/* ==========================================================
   Telefone
========================================================== */

export function isValidPhone(phone) {

    const regex =
        /^[0-9()+\-\s]{10,20}$/;

    return regex.test(phone);

}

/* ==========================================================
   URL
========================================================== */

export function isValidUrl(url) {

    try {

        new URL(url);

        return true;

    } catch {

        return false;

    }

}

/* ==========================================================
   Número inteiro
========================================================== */

export function isInteger(value) {

    return Number.isInteger(Number(value));

}

/* ==========================================================
   Número positivo
========================================================== */

export function isPositiveNumber(value) {

    return Number(value) > 0;

}

/* ==========================================================
   Arquivo de imagem
========================================================== */

export function isImage(file) {

    if (!file)
        return false;

    return file.type.startsWith("image/");

}

/* ==========================================================
   Tamanho máximo da imagem
========================================================== */

export function isValidImageSize(file, maxMB = 5) {

    if (!file)
        return false;

    return file.size <= maxMB * 1024 * 1024;

}

/* ==========================================================
   Extensões permitidas
========================================================== */

export function isAllowedImage(file) {

    if (!file)
        return false;

    const allowed = [

        "image/jpeg",

        "image/png",

        "image/webp"

    ];

    return allowed.includes(file.type);

}

/* ==========================================================
   Texto mínimo
========================================================== */

export function minLength(text, min) {

    return text.trim().length >= min;

}

/* ==========================================================
   Texto máximo
========================================================== */

export function maxLength(text, max) {

    return text.trim().length <= max;

}

/* ==========================================================
   Intervalo numérico
========================================================== */

export function between(value, min, max) {

    const number = Number(value);

    return number >= min &&
           number <= max;

}

/* ==========================================================
   Validação completa do Login
========================================================== */

export function validateLogin(email, password) {

    return {

        valid:

            isValidEmail(email) &&
            isValidPassword(password),

        email:

            isValidEmail(email),

        password:

            isValidPassword(password)

    };

}

/* ==========================================================
   Validação completa do Cadastro
========================================================== */

export function validateRegister({

    name,

    email,

    password,

    confirmPassword

}) {

    return {

        valid:

            isValidName(name) &&
            isValidEmail(email) &&
            isStrongPassword(password) &&
            passwordsMatch(password, confirmPassword),

        name:

            isValidName(name),

        email:

            isValidEmail(email),

        password:

            isStrongPassword(password),

        confirmPassword:

            passwordsMatch(password, confirmPassword)

    };

}

/* ==========================================================
   Scanner
========================================================== */

export function validateScan(file) {

    return {

        valid:

            isImage(file) &&
            isAllowedImage(file) &&
            isValidImageSize(file),

        image:

            isImage(file),

        type:

            isAllowedImage(file),

        size:

            isValidImageSize(file)

    };

}