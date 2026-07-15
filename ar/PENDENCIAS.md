# AR do EcoRobo — o que falta pra sair do modo de teste

Miguel, a AR já está ligada dentro do app (botão "Ver em Realidade Aumentada", na tela de Resultado e no Catálogo). Mas ainda em **modo de teste**: reconhece uma imagem qualquer e sempre mostra o mesmo modelo (as latas), não importa a categoria. Serviu só pra provar que funciona. Agora falta o conteúdo de verdade.

## Já está pronto (não mexer)

- App abre a câmera, reconhece o marcador e mostra o modelo 3D em cima dele.
- App já sabe qual categoria foi escaneada e já manda essa info pra dentro da AR.
- AR já avisa o app quando a câmera está pronta e quando acha/perde o marcador.
- A lógica de "qual modelo mostrar por categoria" já existe — só falta trocar os arquivos (item 2).

## O que você precisa entregar

1. **Uma foto de marcador por categoria** (Plástico, Metal, Vidro, Papel, Orgânico). Boa foto de marcador: bem detalhada, iluminada, sem padrão repetido (nada de fundo liso ou listrado).

2. **Um modelo 3D (`.glb`) por categoria.** Hoje só existe o de latas (`cansScaleUpdate.glb`). Faltam Plástico, Vidro, Papel e Orgânico.

3. **Um marcador por categoria, não um só.** Hoje o `targets.mind` foi gerado com uma imagem de teste (o ícone do EcoRobo). Precisa recompilar com as 5 fotos reais.

## Passo a passo pra trocar

1. Compile o novo `targets.mind` juntando as 5 fotos, uma por categoria, aqui: https://hiukim.github.io/mind-ar-js-doc/tools/compile/ (arrasta as imagens e baixa o `.mind`). **Anota a ordem** que você arrastou — cada marcador vira um número (0, 1, 2, 3, 4) nessa mesma ordem, e o código usa esse número pra saber qual foi reconhecido.

2. Substitua `ar/targets.mind` pelo novo arquivo.

3. Coloque os 5 `.glb` dentro de `ar/modelos/`.

4. Em `ar/scripts/ar.js`, atualize duas coisas:
   - `MODELO_POR_CATEGORIA` (topo do arquivo) — troca o nome do arquivo de cada categoria pelo `.glb` certo.
   - A linha `mindarThree.addAnchor(0)` — hoje só usa o marcador 0. Com 5 marcadores, precisa virar 5 âncoras (uma por número, na mesma ordem do passo 1), cada uma mostrando o modelo certo.

## Fora do escopo

- Fotos e modelos reais — ficam com você.
- Visual da experiência AR (cores, layout, animação) — também é com você.