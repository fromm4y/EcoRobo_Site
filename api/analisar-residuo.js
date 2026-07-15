/* ==========================================================
   EcoRobo
   POST /api/analisar-residuo
   ----------------------------------------------------------
   Backend/proxy da API do Gemini. Formato de função
   serverless da Vercel (arquivo em /api são deployados
   automaticamente como endpoints, sem config extra).

   Por quê um backend em vez de chamar o Gemini direto do
   navegador? A GEMINI_API_KEY nunca pode ficar exposta no
   código do front-end — qualquer pessoa que abrisse o
   DevTools conseguiria roubá-la. Aqui a chave fica só numa
   variável de ambiente do servidor (GEMINI_API_KEY).

   Recebe: { image: "<base64 sem o prefixo data:...>", mimeType: "image/jpeg" }
   Devolve: os mesmos campos que a tela de Resultado já
   espera (mesmo formato do mock antigo), ou { error: "..." }
   em caso de falha/resíduo não identificado.
========================================================== */

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const GEMINI_MODEL = "gemini-2.5-flash";

const GEMINI_URL =
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const MENSAGEM_ERRO_PADRAO =
    "Não conseguimos identificar esse resíduo, tente outra foto.";

/* ==========================================================
   Categorias aceitas

   Mesmas usadas em utils/constants.js (GAME_CATEGORIES) no
   front-end, pra manter o botão Jogo x Realidade Aumentada
   funcionando com dado real.
========================================================== */

const CATEGORIAS_VALIDAS = [
    "Plástico",
    "Metal",
    "Vidro",
    "Papel",
    "Orgânico"
];

const PROMPT_SISTEMA = `
Você é um especialista em reciclagem e meio ambiente no Brasil.
Analise a imagem enviada e identifique o resíduo/objeto principal.

Regras:
- category deve ser exatamente uma destas: ${CATEGORIAS_VALIDAS.join(", ")}.
- confidence deve ser um número decimal entre 0 e 1 representando o
  percentual de confiança (ex: 0.87 para 87% de confiança).
- trashColor deve ser a cor da lixeira de coleta seletiva no Brasil
  correspondente (ex: Azul para papel, Vermelho para plástico,
  Amarelo para metal, Verde para vidro, Marrom para orgânico).
- Se NÃO for possível identificar um resíduo reciclável reconhecível
  na imagem, defina "recognized" como false e preencha os demais
  campos de texto com string vazia e os numéricos/booleanos com 0/false.
- Se identificar normalmente, defina "recognized" como true.
- Responda sempre em português do Brasil.
`;

const RESPONSE_SCHEMA = {
    type: "object",
    properties: {
        recognized: { type: "boolean" },
        name: { type: "string" },
        scientificName: { type: "string" },
        category: { type: "string", enum: CATEGORIAS_VALIDAS },
        recyclable: { type: "boolean" },
        confidence: { type: "number" },
        trashColor: { type: "string" },
        decomposition: { type: "string" },
        impact: { type: "string", enum: ["Baixo", "Médio", "Alto"] },
        description: { type: "string" },
        curiosity: { type: "string" }
    },
    required: [
        "recognized",
        "name",
        "scientificName",
        "category",
        "recyclable",
        "confidence",
        "trashColor",
        "decomposition",
        "impact",
        "description",
        "curiosity"
    ]
};

export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({ error: "Método não permitido." });

    }

    if (!GEMINI_API_KEY) {

        console.error("GEMINI_API_KEY não configurada no servidor.");

        return res.status(500).json({ error: "Servidor não configurado corretamente." });

    }

    const { image, mimeType } = req.body || {};

    if (!image) {

        return res.status(400).json({ error: "Nenhuma imagem enviada." });

    }

    try {

        const geminiResponse = await fetch(GEMINI_URL, {

            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify({

                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: PROMPT_SISTEMA },
                            {
                                inline_data: {
                                    mime_type: mimeType || "image/jpeg",
                                    data: image
                                }
                            }
                        ]
                    }
                ],

                generationConfig: {
                    temperature: 0.4,
                    response_mime_type: "application/json",
                    response_schema: RESPONSE_SCHEMA
                }

            })

        });

        if (!geminiResponse.ok) {

            const errText = await geminiResponse.text();

            console.error("Erro na API do Gemini:", geminiResponse.status, errText);

            return res.status(502).json({ error: MENSAGEM_ERRO_PADRAO });

        }

        const data = await geminiResponse.json();

        const textoGerado = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!textoGerado) {

            console.error("Resposta do Gemini sem conteúdo:", JSON.stringify(data));

            return res.status(502).json({ error: MENSAGEM_ERRO_PADRAO });

        }

        let resultado;

        try {

            resultado = JSON.parse(textoGerado);

        } catch (parseError) {

            console.error("Resposta do Gemini não é JSON válido:", textoGerado);

            return res.status(502).json({ error: MENSAGEM_ERRO_PADRAO });

        }

        if (!resultado.recognized) {

            return res.status(422).json({ error: MENSAGEM_ERRO_PADRAO });

        }

        const { recognized, ...residuo } = resultado;

        return res.status(200).json(residuo);

    } catch (error) {

        console.error("Erro ao chamar a API do Gemini:", error);

        return res.status(500).json({ error: MENSAGEM_ERRO_PADRAO });

    }

}
