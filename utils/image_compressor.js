/* ==========================================================
   EcoRobo
   Image Compressor
   ----------------------------------------------------------
   Comprime uma imagem no navegador (via <canvas>) e devolve
   uma string base64 (data:image/jpeg;base64,...), pronta pra
   ser salva direto num campo do Firestore.

   Por quê: o Firestore (plano gratuito) tem limite de 1MB por
   documento. Sem Firebase Storage (que exige plano pago), a
   saída é reduzir a imagem o bastante pra caber com folga
   dentro de um documento — tanto pra foto de resíduo quanto
   pra foto de perfil.
========================================================== */

const PADRAO = {

    // Maior lado da imagem, em pixels.
    maxSize: 600,

    // Qualidade do JPEG (0 a 1).
    quality: 0.6,

    // Limite de segurança, bem abaixo do 1MB do documento
    // (sobra espaço pros outros campos do resíduo/usuário).
    maxBytes: 700 * 1024

};

/* ==========================================================
   Comprime um arquivo de imagem

   Retorna uma Promise<string> com o base64 já comprimido.
   Rejeita com um Error de mensagem amigável se não for
   possível ler o arquivo ou se, mesmo após comprimir mais,
   a imagem continuar grande demais.
========================================================== */

export function compressImage(file, options = {}){

    const config = { ...PADRAO, ...options };

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.onload = () => {

            const imagem = new Image();

            imagem.onload = () => {

                try{

                    resolve(

                        redimensionarEComprimir(imagem, config)

                    );

                }

                catch(error){

                    reject(error);

                }

            };

            imagem.onerror = () => {

                reject(new Error("Não foi possível ler essa imagem."));

            };

            imagem.src = reader.result;

        };

        reader.onerror = () => {

            reject(new Error("Não foi possível ler o arquivo de imagem."));

        };

        reader.readAsDataURL(file);

    });

}

/* ==========================================================
   Redimensiona no canvas e ajusta a qualidade até caber no
   limite de tamanho definido.
========================================================== */

function redimensionarEComprimir(imagem, config){

    const escala = Math.min(

        1,

        config.maxSize / Math.max(imagem.width, imagem.height)

    );

    const canvas = document.createElement("canvas");

    canvas.width = Math.round(imagem.width * escala);

    canvas.height = Math.round(imagem.height * escala);

    const contexto = canvas.getContext("2d");

    contexto.drawImage(imagem, 0, 0, canvas.width, canvas.height);

    let base64 = canvas.toDataURL("image/jpeg", config.quality);

    if(tamanhoEmBytes(base64) > config.maxBytes){

        base64 = canvas.toDataURL(

            "image/jpeg",

            Math.max(config.quality - 0.25, 0.3)

        );

    }

    if(tamanhoEmBytes(base64) > config.maxBytes){

        throw new Error(

            "Essa imagem ainda ficou grande demais mesmo após comprimir. Tente uma foto mais simples."

        );

    }

    return base64;

}

/* ==========================================================
   Tamanho aproximado (em bytes) de uma string base64
========================================================== */

function tamanhoEmBytes(base64){

    const [, dados] = base64.split(",");

    return Math.ceil((dados?.length || 0) * 3 / 4);

}
