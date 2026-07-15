# 🌱 EcoRobo

> Transformando a conscientização ambiental em uma experiência interativa utilizando Inteligência Artificial, Realidade Aumentada e Gamificação.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-green)
![Version](https://img.shields.io/badge/version-1.0-blue)
![License](https://img.shields.io/badge/license-MIT-orange)

---

# 📖 Sobre o Projeto

O **EcoRobo** é uma plataforma web responsiva desenvolvida para incentivar a educação ambiental por meio da tecnologia.

O projeto une Inteligência Artificial, Visão Computacional, Gamificação e Realidade Aumentada para transformar o simples ato de identificar um resíduo em uma experiência educativa e divertida.

O usuário utiliza a câmera do dispositivo para fotografar um objeto. A Inteligência Artificial identifica automaticamente o tipo de resíduo e apresenta informações educativas, como tempo de decomposição, impacto ambiental e forma correta de descarte.

Após o reconhecimento, o usuário poderá desbloquear experiências gamificadas, visualizar modelos em Realidade Aumentada e acompanhar seu progresso ambiental.

---

# 🎯 Objetivo

Criar uma plataforma capaz de incentivar hábitos sustentáveis utilizando tecnologias emergentes de forma acessível para qualquer dispositivo com navegador.

O projeto busca transformar educação ambiental em uma experiência prática, visual e interativa.

---

# 💡 Problema

Grande parte da população possui dificuldade em identificar corretamente os resíduos recicláveis.

Os principais desafios encontrados atualmente são:

- descarte incorreto
- pouca educação ambiental
- campanhas pouco atrativas
- baixo engajamento dos jovens
- ausência de feedback imediato

O EcoRobo busca resolver esses problemas utilizando Inteligência Artificial e elementos de jogos para incentivar o aprendizado.

---

# 🚀 Tecnologias Utilizadas

## Front-end

- HTML5
- CSS3
- JavaScript
- Bootstrap

---

## Inteligência Artificial

- Google Gemini Vision API

Responsável por:

- identificar resíduos
- classificar categorias
- retornar informações ambientais

---

## Jogos

- GDevelop

Responsável pelo desenvolvimento dos minigames educativos.

Os jogos serão exportados para HTML5 e incorporados diretamente na plataforma.

---

## Realidade Aumentada

- Unity
- Unity WebGL

Responsável por apresentar experiências imersivas relacionadas ao resíduo identificado.

---

## Banco de Dados

Durante o protótipo:

- LocalStorage

Possível evolução:

- Firebase
- Supabase

---

# 📱 Plataforma

O EcoRobo será desenvolvido como uma aplicação web responsiva.

Características:

- funciona em computadores
- funciona em tablets
- funciona em celulares
- pode ser instalado como PWA (Progressive Web App)

Não será necessário instalar um aplicativo pela Play Store.

---

# 👥 Público-alvo

- estudantes
- escolas
- professores
- projetos ambientais
- usuários interessados em sustentabilidade

Faixa etária recomendada:

10 a 35 anos.

---

# 🎮 Fluxo Geral do Sistema

```text
Login

↓

Home

↓

Abrir câmera

↓

Fotografar resíduo

↓

Gemini identifica

↓

Resultado

↓

Salvar no catálogo

↓

Abrir experiência

├── Minigame
└── Realidade Aumentada

↓

Receber XP

↓

Subir de nível
```

---

# 🧠 Fluxo da Inteligência Artificial

```text
Usuário

↓

Captura foto

↓

Gemini Vision API

↓

Reconhecimento

↓

JSON

↓

Sistema

↓

Tela de Resultado
```

---

# 📂 Funcionalidades

## Login

O usuário poderá acessar a plataforma utilizando e-mail e senha.

O sistema armazenará:

- nível
- experiência
- progresso
- resíduos encontrados

---

## Home

Tela principal contendo:

- resumo do progresso
- quantidade de resíduos encontrados
- nível atual
- XP
- notícias ambientais
- acesso rápido às funcionalidades

---

## Scanner

Permite abrir a câmera do dispositivo para fotografar resíduos.

Fluxo:

```text
Abrir câmera

↓

Capturar foto

↓

Enviar para IA

↓

Receber classificação

↓

Exibir resultado
```

---

## Resultado

Após a identificação serão exibidos:

- nome do objeto
- categoria
- confiança da IA
- tempo de decomposição
- impacto ambiental
- reciclagem
- XP recebido

Além disso, serão disponibilizados dois botões:

- Explorar em Realidade Aumentada
- Jogar Minigame

---

## Catálogo

Armazena todos os resíduos identificados pelo usuário.

Cada item conterá:

- imagem
- nome
- categoria
- descrição
- impacto ambiental
- reciclagem
- data do reconhecimento

---

## Minigames

Após identificar um resíduo, o usuário poderá iniciar um jogo desenvolvido no GDevelop.

O jogo seguirá o estilo:

- endless runner
- inspirado em Subway Surfers
- ambientação sustentável

O objetivo será coletar resíduos corretamente enquanto evita obstáculos.

---

## Realidade Aumentada

Cada resíduo identificado poderá ser explorado em uma experiência interativa.

A experiência será desenvolvida utilizando Unity WebGL.

---

## Perfil

O usuário poderá acompanhar:

- nível
- XP
- resíduos identificados
- conquistas
- estatísticas

---

# 🗂 Estrutura do Projeto

```text
EcoRobo/

assets/

css/

fonts/

icons/

images/

js/

pages/

components/

services/

models/

utils/

game/

ar/

docs/

README.md
```

---

# 🔌 Integrações

## Google Gemini

Responsável por:

- reconhecimento do lixo
- classificação
- retorno das informações ambientais

A chamada real acontece via backend/proxy (`api/analisar-residuo.js`,
formato de função serverless da Vercel) — o front-end nunca chama o
Gemini nem guarda a chave da API diretamente. Ver seção
"⚙️ Configuração do Backend" abaixo.

---

# ⚙️ Configuração do Backend (Gemini)

A tela de Câmera/Resultado usa um endpoint próprio,
`POST /api/analisar-residuo`, que recebe a foto do usuário, chama a
API do Gemini com a chave guardada só no servidor, e devolve o
resultado já no formato que a tela de Resultado espera.

**Passos pra rodar/deployar com a IA real funcionando:**

1. Gere uma chave em [aistudio.google.com/apikey](https://aistudio.google.com/apikey).
2. Copie `.env.example` para `.env` e preencha `GEMINI_API_KEY` (esse
   arquivo é ignorado pelo git — a chave nunca deve ser commitada).
3. Deploy na [Vercel](https://vercel.com): importe o repositório e,
   em *Project Settings → Environment Variables*, adicione
   `GEMINI_API_KEY` com o mesmo valor. A Vercel detecta o arquivo
   `api/analisar-residuo.js` automaticamente e publica o endpoint,
   sem passo de build.
4. Se preferir Netlify Functions ou um servidor Node/Express próprio
   em vez da Vercel, o arquivo `api/analisar-residuo.js` concentra
   toda a lógica (prompt, schema de resposta, tratamento de erro) —
   só muda o formato de exportação da função (`handler(req, res)`
   é o padrão da Vercel; Netlify e Express usam assinaturas um pouco
   diferentes).

Sem a `GEMINI_API_KEY` configurada, o endpoint responde com erro
claro (500) e a tela de Resultado mostra o estado de erro amigável
("Não conseguimos identificar esse resíduo, tente outra foto."), em
vez de travar ou ficar em branco.

## ⚠️ Como rodar localmente (importante)

**Não abra o projeto via Live Server (VS Code) ou qualquer outra
extensão de preview estático.** Elas só servem arquivos estáticos —
não executam a pasta `api/`. Qualquer `POST` pra
`/api/analisar-residuo` feito a partir de algo como
`http://127.0.0.1:5500` cai no vazio (erro `405 Method Not Allowed`),
porque não existe backend nenhum rodando naquela porta pra atender a
requisição.

Pra testar a IA de verdade, use sempre um destes dois:

- **Local, com backend real**: `npm i -g vercel` (uma vez só) e depois
  `vercel dev` na raiz do projeto — isso sobe um servidor local que
  executa tanto os arquivos estáticos quanto a pasta `api/`, lendo o
  `.env` local (confirme que o `.env` está na raiz do projeto, não
  dentro de `api/`, e que a variável se chama exatamente
  `GEMINI_API_KEY`, igual ao `.env.example`).
- **Produção**: o domínio publicado na Vercel (ex:
  `https://seu-projeto.vercel.app`), que já roda a pasta `api/` de
  verdade.

## 🔎 Índices compostos do Firestore

As consultas de "últimos escaneamentos" (`getUserWaste`) e "jogos"
(`getGames`) filtram por `userId` e ordenam por `createdAt` ao mesmo
tempo — o Firestore exige um índice composto pra esse tipo de
consulta, senão as telas de Home/Perfil/Catálogo mostram
`FirebaseError: The query requires an index` no console.

Duas formas de resolver:

- **Manual**: o próprio erro no console do navegador traz um link
  pronto pra criar o índice — clique nele e confirme em "Criar
  índice" no Firebase Console (leva alguns minutos pra ficar pronto).
- **Via código** (recomendado, evita repetir isso a cada ambiente
  novo): os dois índices já estão declarados em
  `firestore.indexes.json`. Com a
  [Firebase CLI](https://firebase.google.com/docs/cli) instalada
  (`npm i -g firebase-tools` ou use `npx firebase-tools`, sem
  instalar nada globalmente) e logada (`firebase login`), rode:

  ```bash
  npx firebase-tools deploy --only firestore:indexes
  ```

  na raiz do projeto. Esse é o único comando de deploy necessário —
  o projeto não usa Firebase Storage (ver seção abaixo), então não
  há regra de Storage pra publicar.

## 🖼 Imagens (foto de resíduo e de perfil) — sem Firebase Storage

O projeto usa o Firestore no plano gratuito (Spark), que não inclui
Firebase Storage (esse exige o plano pago Blaze). Por isso, as fotos
não sobem pra um bucket: elas são comprimidas no próprio navegador
(`utils/image_compressor.js`, via `<canvas>`) e salvas como texto
base64 direto dentro do documento no Firestore:

- foto do resíduo escaneado → campo `imageUrl` do documento em
  `wastes` (o nome do campo continuou `imageUrl` por compatibilidade
  com o resto do código, mesmo guardando um base64 e não uma URL).
- foto de perfil → campo `photoUrl` do documento em `users`.

Como o Firestore tem limite de 1MB por documento, a compressão
reduz a imagem pra no máximo 600px no maior lado (400px pra foto de
perfil) e qualidade JPEG reduzida, sempre verificando se o resultado
ficou bem abaixo desse limite antes de salvar.

## 🔐 Login social (Google, etc.) — domínios autorizados

O login hoje é só e-mail/senha, então o aviso `The current domain is
not authorized for OAuth operations` (visto rodando em
`127.0.0.1`) pode ser ignorado por enquanto — ele só vira erro de
verdade se algum dia usarmos `signInWithPopup`/`signInWithRedirect`
(login social). Se isso for implementado, adicionar `127.0.0.1` e
`localhost` em **Firebase Console → Authentication → Settings →
Authorized domains**.

---

## GDevelop

Responsável pelos minigames.

Exportado em HTML5.

Incorporado via iframe.

---

## Unity

Responsável pela experiência em Realidade Aumentada.

Exportado para WebGL.

---

# 🌎 Categorias Reconhecidas

O sistema reconhecerá inicialmente cinco categorias.

- Plástico
- Papel
- Metal
- Vidro
- Orgânico

---

# 🎯 Gamificação

O sistema contará com:

- XP
- níveis
- conquistas
- catálogo
- histórico
- progresso ambiental

---

# 🔒 Futuras Melhorias

- autenticação Firebase
- ranking online
- desafios semanais
- missões diárias
- mapa de reciclagem
- compartilhamento de conquistas
- novas categorias de resíduos
- integração com coleta seletiva

---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos e de pesquisa.

Todos os direitos reservados aos autores do projeto EcoRobo.