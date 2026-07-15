/* ==========================================================
   EcoRobo
   Statistics Model

   Responsável por armazenar todas as estatísticas
   utilizadas na Home do aplicativo.

   Essas informações são calculadas a partir do Firestore.
========================================================== */

export default class StatisticsModel {
  constructor(data = {}) {

    /* =====================================================
        SCANS
    ====================================================== */

    // Total de objetos escaneados
    this.totalScans = data.totalScans || 0;

    // Total de materiais recicláveis encontrados
    this.totalRecyclables = data.totalRecyclables || 0;

    // Total de materiais não recicláveis
    this.totalNonRecyclables = data.totalNonRecyclables || 0;

    // Último scan realizado
    this.lastScanDate = data.lastScanDate || null;

    // Dias seguidos escaneando pelo menos 1 item
    this.currentStreak = data.currentStreak || 0;

    // Histórico diário (últimos ~60 dias), usado no gráfico
    // de evolução do Perfil: [{ date, scans, co2 }, ...]
    this.dailyStats = data.dailyStats || [];

    /* =====================================================
        TIPOS DE LIXO
    ====================================================== */

    this.paper = data.paper || 0;
    this.plastic = data.plastic || 0;
    this.glass = data.glass || 0;
    this.metal = data.metal || 0;
    this.organic = data.organic || 0;
    this.electronic = data.electronic || 0;
    this.other = data.other || 0;

    // Categoria mais escaneada
    this.favoriteWasteType = data.favoriteWasteType || "";

    /* =====================================================
        JOGOS
    ====================================================== */

    // Quantidade total de partidas
    this.totalGames = data.totalGames || 0;

    // Jogos por categoria
    this.gamesPaper = data.gamesPaper || 0;
    this.gamesPlastic = data.gamesPlastic || 0;
    this.gamesGlass = data.gamesGlass || 0;
    this.gamesMetal = data.gamesMetal || 0;
    this.gamesOrganic = data.gamesOrganic || 0;
    this.gamesElectronic = data.gamesElectronic || 0;

    // Melhor pontuação obtida
    this.bestScore = data.bestScore || 0;

    // Média de pontuação
    this.averageScore = data.averageScore || 0;

    // Tempo médio por partida (segundos)
    this.averageTime = data.averageTime || 0;

    /* =====================================================
        IMPACTO AMBIENTAL
    ====================================================== */

    // CO₂ economizado (estimado)
    this.co2Saved = data.co2Saved || 0;

    // Água economizada
    this.waterSaved = data.waterSaved || 0;

    // Energia economizada
    this.energySaved = data.energySaved || 0;

    /* =====================================================
        CONQUISTAS
    ====================================================== */

    // Ids das conquistas já desbloqueadas (ver ACHIEVEMENTS
    // em utils/constants.js)
    this.unlockedAchievements = data.unlockedAchievements || [];

    // Quantidade de medalhas conquistadas
    this.totalAchievements = this.unlockedAchievements.length;
  }

  /* =====================================================
      Converte para JSON
  ====================================================== */

  toJSON() {
    return {
      totalScans: this.totalScans,
      totalRecyclables: this.totalRecyclables,
      totalNonRecyclables: this.totalNonRecyclables,
      lastScanDate: this.lastScanDate,
      currentStreak: this.currentStreak,
      dailyStats: this.dailyStats,

      paper: this.paper,
      plastic: this.plastic,
      glass: this.glass,
      metal: this.metal,
      organic: this.organic,
      electronic: this.electronic,
      other: this.other,

      favoriteWasteType: this.favoriteWasteType,

      totalGames: this.totalGames,

      gamesPaper: this.gamesPaper,
      gamesPlastic: this.gamesPlastic,
      gamesGlass: this.gamesGlass,
      gamesMetal: this.gamesMetal,
      gamesOrganic: this.gamesOrganic,
      gamesElectronic: this.gamesElectronic,

      bestScore: this.bestScore,
      averageScore: this.averageScore,
      averageTime: this.averageTime,

      co2Saved: this.co2Saved,
      waterSaved: this.waterSaved,
      energySaved: this.energySaved,

      unlockedAchievements: this.unlockedAchievements,
      totalAchievements: this.totalAchievements,
    };
  }

  /* =====================================================
      Converte para Firestore
  ====================================================== */

  toFirestore() {
    return this.toJSON();
  }
}