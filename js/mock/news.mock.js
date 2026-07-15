/* ==========================================================
   EcoRobo
   Notícias — Curadoria Manual
   ----------------------------------------------------------
   NÃO É UMA FONTE DINÂMICA. Este array precisa ser atualizado
   manualmente sempre que quisermos trocar as notícias
   exibidas na Home (título, resumo, link e imagem de capa).

   Por quê manual e não uma busca automática (ex: scraping de
   G1/UOL direto do navegador)? Sites de notícia normalmente
   bloqueiam requisições cross-origin (CORS) vindas do
   navegador do usuário. Buscar esse conteúdo de forma dinâmica
   exigiria um backend/proxy nosso fazendo a requisição pelo
   servidor (e possivelmente uma API de notícias paga/com
   termos de uso). Isso ainda não existe no projeto — fica
   como pendência de integração futura.

   Até lá: para trocar as notícias, edite os itens abaixo
   (title, description, link, image) com o título, resumo
   curto, URL real da matéria e URL da imagem de capa dela.
========================================================== */

export const NEWS_MOCK = [

    {
        image: "https://imagens.ebc.com.br/Xkjujh1dmFAArCZz05s8rL7t5P0=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/_materiais_reciclaveis2807200517.jpg?itok=fRUycUHs",
        title: "4 em cada 10 brasileiros nunca ouviram falar em economia circular",
        description: "Pesquisa mostra que 39% da população desconhece o conceito, mas 74% se dizem dispostos a mudar hábitos de consumo para gerar menos lixo.",
        link: "https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-07/quatro-em-cada-dez-brasileiros-nunca-ouviram-falar-em-economia-circular"
    },

    {
        image: "https://cdn.prod.website-files.com/685315d359da870e33a719b9/69023187c31e33a3131cfebd_eureciclo-1.jpg.webp",
        title: "Novo Decreto do Plástico muda regras de reciclagem em 2026",
        description: "Novo marco regulatório exige que empresas usem plástico reciclado pós-consumo nas embalagens e amplia metas de coleta e reciclagem no Brasil.",
        link: "https://eureciclo.com.br/blog/novo-decreto-do-plastico-2026"
    },

    {
        image: "https://www.convale.ce.gov.br/fotos/54/Capa54.jpg",
        title: "Cinco dicas para você começar a reciclar",
        description: "Um guia simples para quem quer dar os primeiros passos: como separar os materiais, reduzir antes de reciclar e encontrar pontos de coleta.",
        link: "https://convale.ce.gov.br/informa/54/cinco-dicas-para-voce-comecar-a-reciclar"
    }

];
