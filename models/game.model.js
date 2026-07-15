/* ==========================================================
   EcoRobo
   Game Model

   Responsável por representar os dados dos minigames
   jogados pelo usuário.

   Não existe sistema de níveis, XP ou fases.

   Cada registro representa uma partida realizada.
========================================================== */

export default class GameModel {
  constructor(data = {}) {

    // ID do documento no Firestore
    this.id = data.id || "";

    // ID do usuário
    this.userId = data.userId || "";

    // Tipo do jogo
    // memory
    // quiz
    // sorting
    // runner
    this.gameType = data.gameType || "";

    // Categoria do lixo relacionada
    // plastic
    // paper
    // glass
    // metal
    // organic
    // electronic
    this.wasteType = data.wasteType || "";

    // Quantidade de acertos
    this.correctAnswers = data.correctAnswers || 0;

    // Quantidade de erros
    this.wrongAnswers = data.wrongAnswers || 0;

    // Pontuação obtida
    this.score = data.score || 0;

    // Tempo da partida (segundos)
    this.time = data.time || 0;

    // Data da partida
    this.createdAt = data.createdAt || new Date();
  }

  /* =====================================================
      Converte para Firestore
  ====================================================== */

  toFirestore() {
    return {
      userId: this.userId,
      gameType: this.gameType,
      wasteType: this.wasteType,
      correctAnswers: this.correctAnswers,
      wrongAnswers: this.wrongAnswers,
      score: this.score,
      time: this.time,
      createdAt: this.createdAt,
    };
  }

  /* =====================================================
      Cria objeto vindo do Firestore
  ====================================================== */

  static fromFirestore(doc) {
    return new GameModel({
      id: doc.id,
      ...doc.data(),
    });
  }
}