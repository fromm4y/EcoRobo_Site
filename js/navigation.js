/* ==========================================================
   EcoRobo
   Navigation Stack
   ----------------------------------------------------------
   Pilha de navegação própria do app, usada pelo botão
   voltar (ver router.js -> goBack()).

   Antes usávamos history.back() do navegador, mas isso é
   pouco previsível: depende de como o navegador gerencia
   histórico/cache, e em alguns casos pode nem manter o app
   (ex: sair da aba/PWA em vez de voltar pra tela anterior).

   Guardada em sessionStorage (mesmo padrão já usado pelo
   projeto para "selectedImage") — sobrevive a um reload
   dentro da mesma aba, mas não vaza entre abas/sessões.
========================================================== */

const STACK_KEY = "ecorobo_nav_stack";

/* ==========================================================
   Leitura/escrita da pilha
========================================================== */

function getStack(){

    const raw = sessionStorage.getItem(STACK_KEY);

    if(!raw){

        return [];

    }

    try{

        return JSON.parse(raw);

    }

    catch(error){

        return [];

    }

}

function setStack(stack){

    sessionStorage.setItem(

        STACK_KEY,

        JSON.stringify(stack)

    );

}

/* ==========================================================
   Empilha a página atual antes de navegar pra uma nova
========================================================== */

export function pushPage(page){

    const stack = getStack();

    stack.push(page);

    setStack(stack);

}

/* ==========================================================
   Desempilha e retorna a página anterior (ou null se vazia)
========================================================== */

export function popPage(){

    const stack = getStack();

    const previous = stack.pop();

    setStack(stack);

    return previous || null;

}

/* ==========================================================
   Limpa a pilha (ex: logout)
========================================================== */

export function clearStack(){

    sessionStorage.removeItem(STACK_KEY);

}
