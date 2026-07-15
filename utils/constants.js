/* ==========================================================
   EcoRobo
   Constants
   ----------------------------------------------------------
   Arquivo responsável por armazenar todas as constantes
   globais utilizadas pelo sistema.
========================================================== */

/* ==========================================================
   Nome da aplicação
========================================================== */

export const APP = {

    NAME: "EcoRobo",

    VERSION: "1.0.0",

    AUTHOR: "EcoRobo Team"

};

/* ==========================================================
   Firebase
========================================================== */

export const COLLECTIONS = {

    USERS: "users",

    SCANS: "scans",

    GAMES: "games"

};

/* ==========================================================
   LocalStorage
========================================================== */

export const STORAGE_KEYS = {

    USER: "ecorobo_user",

    SCANS: "ecorobo_scans",

    STATISTICS: "ecorobo_statistics",

    SETTINGS: "ecorobo_settings",

    FIRST_ACCESS: "first_access",

    THEME: "theme",

    LAST_ACCESS: "lastAccess",

    GAMES_PLAYED: "gamesPlayed",

    GAMES_COMPLETED: "gamesCompleted",

    CURRENT_STREAK: "currentStreak"

};

/* ==========================================================
   Rotas das páginas
========================================================== */

export const ROUTES = {

    LOGIN: "/pages/login.html",

    HOME: "/pages/home.html",

    CAMERA: "/pages/camera.html",

    RESULT: "/pages/result.html",

    CATALOG: "/pages/catalog.html",

    PROFILE: "/pages/profile.html",

    GAME: "/pages/game.html",

    AR: "/pages/ar.html"

};

/* ==========================================================
   Categorias de resíduos
========================================================== */

export const WASTE_CATEGORIES = [

    "Plastic",

    "Paper",

    "Metal",

    "Glass",

    "Organic",

    "Electronic",

    "Battery",

    "Fabric",

    "Wood",

    "Other"

];

/* ==========================================================
   Cores oficiais de reciclagem
========================================================== */

export const CATEGORY_COLORS = {

    Plastic: "#F7B500",

    Paper: "#4A90E2",

    Glass: "#2ECC71",

    Metal: "#95A5A6",

    Organic: "#8E5A2B",

    Electronic: "#8E44AD",

    Battery: "#E74C3C",

    Fabric: "#FF8C42",

    Wood: "#A67C52",

    Other: "#7F8C8D"

};

/* ==========================================================
   Catálogo
========================================================== */

export const CATALOG = {

    TOTAL_ITEMS: 100

};

/* ==========================================================
   IA (Gemini)
========================================================== */

export const GEMINI = {

    MAX_IMAGE_SIZE: 5 * 1024 * 1024,

    IMAGE_QUALITY: 0.9,

    DEFAULT_CONFIDENCE: 70

};

/* ==========================================================
   Jogos
========================================================== */

export const GAME = {

    MAX_ATTEMPTS: 3,

    DEFAULT_TIME: 60

};

/* ==========================================================
   Regra: Jogo x Realidade Aumentada

   Categorias de resíduo listadas aqui levam o usuário pra
   tela de Jogo (minigame) na tela de Resultado.

   Qualquer categoria fora desta lista (ex: Orgânico, Papel)
   leva o usuário pra tela de Realidade Aumentada.
========================================================== */

export const GAME_CATEGORIES = [

    "Plástico",

    "Metal",

    "Vidro"

];

/* ==========================================================
   Categoria -> nome exato da cena do minijogo (GDevelop,
   pasta game/) que trata daquele tipo de resíduo.

   Usada por game.controller.js pra abrir direto o minijogo
   certo, pulando o menu interno do jogo (ver postMessage em
   game/index.html).

   IMPORTANTE: os nomes precisam bater exatamente com os
   nomes das cenas dentro do projeto GDevelop (conferir em
   game/data.js a cada reexportação — nomes com acento/maiúscula
   diferente quebram esse mapa em silêncio).
========================================================== */

export const GAME_SCENE_BY_CATEGORY = {

    "Vidro": "Fundo do Mar",

    "Metal": "Ferro velho",

    // Cena nova (Rodada 23) — tema praia/oceano (Red ship, White
    // ship, Milk Plastic, Bottle 3 etc.), confirmada em game/data.js.
    "Plástico": "Praia"

};

/* ==========================================================
   Categoria (retornada pelo Gemini, em português) -> campo
   correspondente em StatisticsModel

   Usada por result.controller.js pra incrementar o contador
   certo em statistics.{campo} a cada novo resíduo salvo.
========================================================== */

export const CATEGORY_STATS_KEY = {

    "Papel": "paper",

    "Plástico": "plastic",

    "Vidro": "glass",

    "Metal": "metal",

    "Orgânico": "organic"

};

/* ==========================================================
   CO₂ economizado por item reciclado, em kg (estimativa
   educativa, não é um valor cientificamente rigoroso)

   Usada por result.controller.js pra somar em
   statistics.co2Saved a cada novo resíduo salvo.
========================================================== */

export const CO2_SAVINGS_PER_CATEGORY = {

    "Papel": 0.9,

    "Plástico": 1.5,

    "Vidro": 0.3,

    "Metal": 2,

    "Orgânico": 0.1

};

/* ==========================================================
   Conquistas

   Cada uma tem um id (usado em statistics.unlockedAchievements
   pra saber o que já foi desbloqueado) e uma condition(stats)
   que recebe o StatisticsModel atualizado e devolve true/false.

   Checadas em utils/statistics_helper.js sempre que um
   escaneamento é salvo.
========================================================== */

export const ACHIEVEMENTS = [

    {
        id: "primeiro-passo",
        name: "Primeiro Passo",
        description: "Faça seu primeiro escaneamento.",
        icon: "🌱",
        condition: (stats) => stats.totalScans >= 1
    },

    {
        id: "reciclador-iniciante",
        name: "Reciclador Iniciante",
        description: "Escaneie 5 itens.",
        icon: "♻️",
        condition: (stats) => stats.totalScans >= 5
    },

    {
        id: "reciclador-dedicado",
        name: "Reciclador Dedicado",
        description: "Escaneie 20 itens.",
        icon: "🏅",
        condition: (stats) => stats.totalScans >= 20
    },

    {
        id: "mestre-do-papel",
        name: "Mestre do Papel",
        description: "Escaneie 10 itens de papel.",
        icon: "📦",
        condition: (stats) => stats.paper >= 10
    },

    {
        id: "mestre-do-plastico",
        name: "Mestre do Plástico",
        description: "Escaneie 10 itens de plástico.",
        icon: "🧴",
        condition: (stats) => stats.plastic >= 10
    },

    {
        id: "mestre-do-vidro",
        name: "Mestre do Vidro",
        description: "Escaneie 10 itens de vidro.",
        icon: "🍾",
        condition: (stats) => stats.glass >= 10
    },

    {
        id: "mestre-do-metal",
        name: "Mestre do Metal",
        description: "Escaneie 10 itens de metal.",
        icon: "🥫",
        condition: (stats) => stats.metal >= 10
    },

    {
        id: "guardiao-do-planeta",
        name: "Guardião do Planeta",
        description: "Economize 10kg de CO₂ reciclando.",
        icon: "🌎",
        condition: (stats) => stats.co2Saved >= 10
    },

    {
        id: "sequencia-de-fogo",
        name: "Sequência de Fogo",
        description: "Recicle por 3 dias seguidos.",
        icon: "🔥",
        condition: (stats) => stats.currentStreak >= 3
    }

];

/* ==========================================================
   Scanner
========================================================== */

export const CAMERA = {

    IMAGE_QUALITY: 0.9,

    MAX_WIDTH: 1080,

    MAX_HEIGHT: 1080

};

/* ==========================================================
   Perfil
========================================================== */

export const PROFILE = {

    DEFAULT_AVATAR: "assets/images/default-avatar.png"

};

/* ==========================================================
   Mensagens padrão
========================================================== */

export const MESSAGES = {

    LOGIN_SUCCESS: "Login realizado com sucesso.",

    LOGIN_ERROR: "E-mail ou senha inválidos.",

    REGISTER_SUCCESS: "Conta criada com sucesso.",

    LOGOUT_SUCCESS: "Logout realizado.",

    SCAN_SUCCESS: "Objeto identificado com sucesso.",

    SCAN_ERROR: "Não foi possível identificar o objeto.",

    CAMERA_ERROR: "Não foi possível acessar a câmera.",

    NETWORK_ERROR: "Erro de conexão.",

    UNKNOWN_ERROR: "Ocorreu um erro inesperado."

};

/* ==========================================================
   Status de identificação
========================================================== */

export const STATUS = {

    SUCCESS: "success",

    WARNING: "warning",

    ERROR: "error"

};

/* ==========================================================
   Tipos de arquivo aceitos
========================================================== */

export const ACCEPTED_FILES = [

    "image/png",

    "image/jpeg",

    "image/webp"

];