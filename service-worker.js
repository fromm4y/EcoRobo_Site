/* ==========================================================
   EcoRobo
   Service Worker
   ----------------------------------------------------------
   Responsável pelo funcionamento offline do EcoRobo.
========================================================== */

const CACHE_NAME = "ecorobo-v2";

/* ==========================================================
   Arquivos essenciais do sistema
========================================================== */

const APP_FILES = [

    "/",
    "/index.html",

    "/css/style.css",
    "/css/variables.css",
    "/css/components.css",
    "/css/responsive.css",
    "/css/login.css",

    "/js/app.js",
    "/js/router.js",
    "/js/auth.js",
    "/js/components.js",

];

/* ==========================================================
   Instalação
========================================================== */

self.addEventListener("install", event => {

    console.log("✅ Service Worker instalado.");

    // Assume o controle imediatamente, sem esperar todas as
    // abas antigas fecharem — evita ficar preso numa versão
    // antiga do app.
    self.skipWaiting();

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => {

                return cache.addAll(APP_FILES);

            })

    );

});

/* ==========================================================
   Ativação
========================================================== */

self.addEventListener("activate", event => {

    console.log("🚀 Service Worker ativo.");

    event.waitUntil(

        caches.keys()

            .then(keys => {

                return Promise.all(

                    keys.map(key => {

                        if (key !== CACHE_NAME) {

                            return caches.delete(key);

                        }

                    })

                );

            })

            // assume o controle das abas já abertas também
            .then(() => self.clients.claim())

    );

});

/* ==========================================================
   Interceptação das requisições

   Network-first: sempre tenta buscar a versão mais nova na
   rede primeiro (essencial em desenvolvimento, onde o código
   muda a cada rodada) e só cai pro cache se estiver offline.

   Estratégia antiga era cache-first "pra sempre" — como o
   CACHE_NAME nunca mudava, arquivos como js/components.js e
   css/components.css ficavam presos na versão de quando o
   Service Worker foi instalado pela primeira vez, mesmo após
   várias atualizações de código (bug encontrado na Rodada 6).
========================================================== */

self.addEventListener("fetch", event => {

    // A Cache API só aceita guardar respostas de requisições
    // GET (cache.put() com POST lança
    // "Request method 'POST' is unsupported"). Chamadas de
    // API (ex: /api/analisar-residuo) também não devem ser
    // cacheadas de jeito nenhum — sempre precisam ir pra rede,
    // então deixamos passar direto, sem interceptar.
    if (

        event.request.method !== "GET" ||
        event.request.url.includes("/api/")

    ) {

        return;

    }

    event.respondWith(

        fetch(event.request)

            .then(response => {

                const copy = response.clone();

                caches.open(CACHE_NAME).then(cache => {

                    cache.put(event.request, copy);

                });

                return response;

            })

            .catch(() => {

                return caches.match(event.request);

            })

    );

});