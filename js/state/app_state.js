/* ==========================================================
   EcoRobo
   App State
   ----------------------------------------------------------
   Cache local (sessionStorage, mesmo padrão já usado no
   projeto pra "selectedImage" e pra pilha de navegação) com
   os dados já carregados do Firestore nessa sessão.

   O Firestore continua sendo a fonte de verdade — isso aqui
   só evita repetir a mesma consulta toda vez que o usuário
   troca de tela (Home, Catálogo e Perfil compartilham boa
   parte dos mesmos dados: usuário, estatísticas e a lista de
   resíduos escaneados).

   Guarda:
   - user: perfil do usuário (nome, e-mail, photoUrl)
   - statistics: estatísticas (totalScans, co2Saved, ...)
   - catalog: lista completa de resíduos escaneados (usada
     tanto pelo Catálogo quanto pelos "últimos escaneamentos"
     da Home)
========================================================== */

const STATE_KEY = "ecorobo_app_state";

const ESTADO_PADRAO = {

    user: null,

    statistics: null,

    catalog: null

};

/* ==========================================================
   Leitura do estado atual
========================================================== */

export function getAppState(){

    const raw = sessionStorage.getItem(STATE_KEY);

    if(!raw){

        return { ...ESTADO_PADRAO };

    }

    try{

        return {

            ...ESTADO_PADRAO,

            ...JSON.parse(raw)

        };

    }

    catch(error){

        return { ...ESTADO_PADRAO };

    }

}

/* ==========================================================
   Atualiza parcialmente o estado (mescla com o que já existe)
========================================================== */

export function setAppState(partial){

    const atualizado = {

        ...getAppState(),

        ...partial

    };

    sessionStorage.setItem(

        STATE_KEY,

        JSON.stringify(atualizado)

    );

    return atualizado;

}

/* ==========================================================
   Limpa o estado (chamado no logout)
========================================================== */

export function clearAppState(){

    sessionStorage.removeItem(STATE_KEY);

}
