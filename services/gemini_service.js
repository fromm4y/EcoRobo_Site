/* ==========================================================
   EcoRobo
   Gemini Service
   ----------------------------------------------------------
   Cliente do endpoint /api/analisar-residuo (backend/proxy).

   Nenhuma tela deve chamar a API do Gemini diretamente nem
   guardar a chave da API — tudo passa por este service, que
   por sua vez chama o nosso próprio backend (api/analisar-
   residuo.js), onde a GEMINI_API_KEY fica protegida.
========================================================== */

const ENDPOINT = "/api/analisar-residuo";

/* ==========================================================
   Analisa um resíduo a partir de uma imagem já em base64
   (data:image/jpeg;base64,... — ver utils/image_compressor.js)

   Retorna o objeto já no formato que a tela de Resultado
   espera (name, category, recyclable, confidence, ...).

   Lança um Error com mensagem amigável em caso de falha.
========================================================== */

export async function analisarResiduo(imagemBase64) {

    const { base64, mimeType } = separarBase64(imagemBase64);

    const response = await fetch(ENDPOINT, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            image: base64,

            mimeType

        })

    });

    const data = await response.json();

    if (!response.ok) {

        throw new Error(

            data?.error ||
            "Não conseguimos identificar esse resíduo, tente outra foto."

        );

    }

    return data;

}

/* ==========================================================
   Separa uma data URL (data:image/jpeg;base64,XXXX) no
   base64 puro e no mimeType
========================================================== */

function separarBase64(dataUrl) {

    const [prefixo, base64] = dataUrl.split(",");

    const mimeType =
        prefixo.match(/data:(.*?);/)?.[1] || "image/jpeg";

    return { base64, mimeType };

}
