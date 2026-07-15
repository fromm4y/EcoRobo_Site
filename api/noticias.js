/* ==========================================================
   EcoRobo
   GET /api/noticias
   ----------------------------------------------------------
   Backend/proxy que busca notícias reais sobre meio ambiente
   via RSS (G1 Natureza), filtra pelas mais relevantes pro
   tema do app (reciclagem, lixo, sustentabilidade...) e
   devolve um JSON simples pro front-end.

   Por quê um backend em vez de buscar o RSS direto do
   navegador? A maioria dos feeds de notícia não libera
   requisições cross-origin (CORS) vindas do navegador do
   usuário — o mesmo motivo pelo qual o Gemini (Rodada 8) já
   passa por um backend próprio (ver api/analisar-residuo.js).

   Formato de função serverless da Vercel (arquivo em /api são
   deployados automaticamente como endpoints, sem config extra).
========================================================== */

const RSS_URL = "https://g1.globo.com/rss/g1/natureza/";

const MENSAGEM_ERRO_PADRAO =
    "Não foi possível buscar notícias no momento.";

/* ==========================================================
   Palavras-chave usadas pra priorizar as notícias mais
   relevantes pro tema do app dentro do feed geral de Natureza
   do G1 (que traz de tudo: fauna, clima, desmatamento etc.)
========================================================== */

const PALAVRAS_CHAVE = [
    "sustentabilidade",
    "sustentável",
    "reciclagem",
    "reciclável",
    "reciclar",
    "lixo",
    "resíduo",
    "meio ambiente",
    "ambiental",
    "poluição",
    "desmatamento",
    "preservação",
    "ecologia",
    "clima",
    "plástico",
    "biodiversidade",
    "extinção",
    "floresta",
    "oceano"
];

/* ==========================================================
   Cache em memória (dura enquanto a função serverless
   continuar "quente" entre uma chamada e outra — não é
   garantido pela Vercel, mas evita bater no RSS de origem a
   cada visita quando a instância já está ativa).
========================================================== */

const CACHE_MS = 45 * 60 * 1000;

let cache = { dados: null, timestamp: 0 };

export default async function handler(req, res) {

    if (req.method !== "GET") {

        return res.status(405).json({ error: "Método não permitido." });

    }

    const agora = Date.now();

    if (cache.dados && (agora - cache.timestamp) < CACHE_MS) {

        return res.status(200).json(cache.dados);

    }

    try {

        const resposta = await fetch(RSS_URL, {

            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; EcoRoboBot/1.0)"
            }

        });

        if (!resposta.ok) {

            throw new Error(`RSS respondeu ${resposta.status}`);

        }

        const xml = await resposta.text();

        const noticias = extrairNoticias(xml);

        if (noticias.length === 0) {

            throw new Error("Nenhuma notícia encontrada no feed.");

        }

        cache = { dados: noticias, timestamp: agora };

        return res.status(200).json(noticias);

    }

    catch (error) {

        console.error("Erro ao buscar notícias:", error);

        // Se já tinha alguma coisa em cache (mesmo vencida),
        // devolve isso em vez de erro — notícia meio velha é
        // melhor que a Home ficar sem nada.
        if (cache.dados) {

            return res.status(200).json(cache.dados);

        }

        return res.status(502).json({ error: MENSAGEM_ERRO_PADRAO });

    }

}

/* ==========================================================
   Extrai e filtra as notícias do XML do RSS
========================================================== */

function extrairNoticias(xml) {

    const blocos = xml.split("<item>").slice(1);

    const noticias = blocos.map(bloco => {

        const titulo = extrairTag(bloco, "title");
        const link = extrairTag(bloco, "link");

        return {
            title: titulo,
            description: extrairDescricao(bloco),
            link: link,
            image: extrairImagem(bloco)
        };

    }).filter(noticia => noticia.title && noticia.link);

    const relevantes =
        noticias.filter(noticia => contemPalavraChave(noticia));

    // Se nenhuma bateu com as palavras-chave (pode acontecer
    // dependendo do dia), usa o feed geral mesmo assim — é
    // melhor mostrar notícias de meio ambiente sem filtro do
    // que a seção de Notícias ficar vazia.
    const resultado =
        relevantes.length > 0 ? relevantes : noticias;

    return resultado.slice(0, 6);

}

/* ==========================================================
   Lê o conteúdo de uma tag simples (com ou sem CDATA)
========================================================== */

function extrairTag(bloco, tag) {

    const regex = new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`);

    const match = bloco.match(regex);

    if (!match) {

        return "";

    }

    return limparTexto(match[1]);

}

/* ==========================================================
   Descrição curta: prioriza <atom:subtitle> (resumo já
   pronto). Se não existir, usa <description> sem as tags/
   imagem embutidas, cortando num tamanho de card de notícia.
========================================================== */

function extrairDescricao(bloco) {

    const subtitulo = extrairTag(bloco, "atom:subtitle");

    if (subtitulo) {

        return subtitulo;

    }

    const descricaoBruta =
        extrairTag(bloco, "description")
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim();

    return descricaoBruta.length > 220
        ? descricaoBruta.slice(0, 217) + "..."
        : descricaoBruta;

}

/* ==========================================================
   Imagem de capa: prioriza <media:content url="...">, senão
   pega o primeiro <img src="..."> de dentro da <description>
========================================================== */

function extrairImagem(bloco) {

    const media =
        bloco.match(/<media:content[^>]*\burl="([^"]+)"/);

    if (media) {

        return media[1];

    }

    const img =
        bloco.match(/<img[^>]*\bsrc="([^"]+)"/);

    if (img) {

        return img[1];

    }

    return "";

}

/* ==========================================================
   Remove CDATA e decodifica entidades HTML básicas
========================================================== */

function limparTexto(bruto) {

    let texto = bruto.trim();

    const cdata =
        texto.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);

    if (cdata) {

        texto = cdata[1];

    }

    return texto
        .trim()
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'");

}

/* ==========================================================
   Verifica se o título/descrição bate com alguma palavra-
   chave relevante pro tema do app
========================================================== */

function contemPalavraChave(noticia) {

    const texto =
        `${noticia.title} ${noticia.description}`.toLowerCase();

    return PALAVRAS_CHAVE.some(palavra => texto.includes(palavra));

}
