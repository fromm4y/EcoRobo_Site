/* ==========================================================
   EcoRobo
   Waste Model

   Representa um resíduo identificado pelo EcoRobo.

   Este model é utilizado pelo:
   - Scanner com IA
   - Catálogo
   - Histórico
   - Jogos
   - Estatísticas
   - Realidade Aumentada
========================================================== */

export default class WasteModel {
  constructor(data = {}) {

    /* =====================================================
        IDENTIFICAÇÃO
    ====================================================== */

    // ID do documento no Firestore
    this.id = data.id || "";

    // ID do usuário que realizou o scan
    this.userId = data.userId || "";

    /* =====================================================
        INFORMAÇÕES DO OBJETO
    ====================================================== */

    // Nome do objeto
    this.name = data.name || "";

    // Categoria principal
    // plastic
    // paper
    // glass
    // metal
    // organic
    // electronic
    // other
    this.category = data.category || "";

    // Material
    this.material = data.material || "";

    // Nome científico (caso exista)
    this.scientificName = data.scientificName || "";

    /* =====================================================
        RECICLAGEM
    ====================================================== */

    // É reciclável?
    this.recyclable = data.recyclable ?? false;

    // Nível de dificuldade da reciclagem
    // Easy
    // Medium
    // Hard
    this.recyclingDifficulty =
      data.recyclingDifficulty || "Medium";

    // Cor da lixeira
    this.binColor = data.binColor || "";

    /* =====================================================
        DESCRIÇÃO
    ====================================================== */

    this.description = data.description || "";

    this.instructions = data.instructions || "";

    this.curiosity = data.curiosity || "";

    // Tempo estimado de decomposição na natureza
    this.decomposition = data.decomposition || "";

    /* =====================================================
        IMPACTO AMBIENTAL
    ====================================================== */

    this.environmentalImpact =
      data.environmentalImpact || "";

    this.co2Saving = data.co2Saving || 0;

    this.waterSaving = data.waterSaving || 0;

    this.energySaving = data.energySaving || 0;

    /* =====================================================
        IA
    ====================================================== */

    // Confiança da IA (%)
    this.aiConfidence = data.aiConfidence || 0;

    // Modelo utilizado
    this.aiModel = data.aiModel || "Gemini";

    /* =====================================================
        IMAGEM
    ====================================================== */

    // URL da imagem (caso exista)
    this.imageUrl = data.imageUrl || "";

    // Caminho local da imagem capturada
    this.imagePath = data.imagePath || "";

    /* =====================================================
        DATA
    ====================================================== */

    this.createdAt = data.createdAt || new Date();
  }

  /* =====================================================
      Converte para Firestore
  ====================================================== */

  toFirestore() {
    return {
      userId: this.userId,

      name: this.name,
      category: this.category,
      material: this.material,
      scientificName: this.scientificName,

      recyclable: this.recyclable,
      recyclingDifficulty: this.recyclingDifficulty,
      binColor: this.binColor,

      description: this.description,
      instructions: this.instructions,
      curiosity: this.curiosity,
      decomposition: this.decomposition,

      environmentalImpact: this.environmentalImpact,

      co2Saving: this.co2Saving,
      waterSaving: this.waterSaving,
      energySaving: this.energySaving,

      aiConfidence: this.aiConfidence,
      aiModel: this.aiModel,

      imageUrl: this.imageUrl,
      imagePath: this.imagePath,

      createdAt: this.createdAt,
    };
  }

  /* =====================================================
      Cria objeto a partir do Firestore
  ====================================================== */

  static fromFirestore(doc) {
    return new WasteModel({
      id: doc.id,
      ...doc.data(),
    });
  }

  /* =====================================================
      Verifica se o objeto é reciclável
  ====================================================== */

  isRecyclable() {
    return this.recyclable;
  }

  /* =====================================================
      Nome da lixeira correta
  ====================================================== */

  getBinName() {
    const bins = {
      blue: "Paper",
      red: "Plastic",
      green: "Glass",
      yellow: "Metal",
      brown: "Organic",
      orange: "Hazardous",
      gray: "Non-recyclable",
      black: "Wood",
      white: "Hospital Waste",
      purple: "Radioactive Waste"
    };

    return bins[this.binColor] || "";
  }

  /* =====================================================
      JSON
  ====================================================== */

  toJSON() {
    return {
      id: this.id,
      userId: this.userId,

      name: this.name,
      category: this.category,
      material: this.material,
      scientificName: this.scientificName,

      recyclable: this.recyclable,
      recyclingDifficulty: this.recyclingDifficulty,
      binColor: this.binColor,

      description: this.description,
      instructions: this.instructions,
      curiosity: this.curiosity,
      decomposition: this.decomposition,

      environmentalImpact: this.environmentalImpact,

      co2Saving: this.co2Saving,
      waterSaving: this.waterSaving,
      energySaving: this.energySaving,

      aiConfidence: this.aiConfidence,
      aiModel: this.aiModel,

      imageUrl: this.imageUrl,
      imagePath: this.imagePath,

      createdAt: this.createdAt
    };
  }
}