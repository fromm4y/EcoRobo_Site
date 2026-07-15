/* ==========================================================
   EcoRobo
   Statistics Helper
   ----------------------------------------------------------
   Funções puras (não mexem no Firestore, só recebem e
   devolvem um StatisticsModel já atualizado) usadas tanto
   ao SALVAR um escaneamento (result.controller.js) quanto ao
   EXCLUIR um item do Catálogo (catalog.controller.js) — pra
   não duplicar a mesma lógica de contagem por categoria/CO₂
   nos dois lugares.
========================================================== */

import {

    CATEGORY_STATS_KEY,
    CO2_SAVINGS_PER_CATEGORY,
    ACHIEVEMENTS

} from "./constants.js";

/* ==========================================================
   Aplica (direcao = 1) ou reverte (direcao = -1) os números
   de um resíduo nas estatísticas: total de scans, recicláveis
   x não recicláveis, contagem por categoria e CO₂ economizado.

   Não mexe em streak/histórico diário/conquistas — esses só
   fazem sentido no momento em que o escaneamento acontece de
   verdade, não quando um item antigo é excluído depois.
========================================================== */

export function aplicarResiduoNaEstatistica(statistics, waste, direcao = 1){

    statistics.totalScans =
        Math.max(0, statistics.totalScans + direcao);

    if(waste.recyclable){

        statistics.totalRecyclables =
            Math.max(0, statistics.totalRecyclables + direcao);

    }

    else{

        statistics.totalNonRecyclables =
            Math.max(0, statistics.totalNonRecyclables + direcao);

    }

    const categoryKey = CATEGORY_STATS_KEY[waste.category];

    if(categoryKey){

        statistics[categoryKey] =
            Math.max(0, statistics[categoryKey] + direcao);

    }

    if(waste.recyclable){

        const co2DoItem =
            CO2_SAVINGS_PER_CATEGORY[waste.category] || 0;

        statistics.co2Saved = Math.max(

            0,

            Math.round(

                (statistics.co2Saved + (direcao * co2DoItem)) * 10

            ) / 10

        );

    }

    statistics.favoriteWasteType = calcularFavorito(statistics);

    return statistics;

}

/* ==========================================================
   Categoria com mais itens escaneados no momento
========================================================== */

function calcularFavorito(statistics){

    let favorito = "";
    let maior = 0;

    Object.entries(CATEGORY_STATS_KEY).forEach(

        ([nomeCategoria, campo]) => {

            const total = statistics[campo];

            if(total > maior){

                maior = total;
                favorito = nomeCategoria;

            }

        }

    );

    return favorito;

}

/* ==========================================================
   Sequência de dias seguidos escaneando

   Compara a data do último escaneamento (antes desse) com
   hoje: mesmo dia mantém, dia seguinte soma 1, qualquer
   intervalo maior reseta pra 1. Precisa rodar ANTES de
   sobrescrever statistics.lastScanDate com a data de agora.
========================================================== */

export function atualizarStreak(statistics){

    const hoje = new Date();

    const ultimaData =
        statistics.lastScanDate
        ? new Date(statistics.lastScanDate)
        : null;

    if(!ultimaData){

        statistics.currentStreak = 1;

        return statistics;

    }

    const diffDias = diferencaEmDiasCorridos(ultimaData, hoje);

    if(diffDias === 0){

        statistics.currentStreak = statistics.currentStreak || 1;

    }

    else if(diffDias === 1){

        statistics.currentStreak = (statistics.currentStreak || 0) + 1;

    }

    else{

        statistics.currentStreak = 1;

    }

    return statistics;

}

function diferencaEmDiasCorridos(data1, data2){

    const inicioDia1 =
        new Date(data1.getFullYear(), data1.getMonth(), data1.getDate());

    const inicioDia2 =
        new Date(data2.getFullYear(), data2.getMonth(), data2.getDate());

    return Math.round(

        (inicioDia2 - inicioDia1) / (1000 * 60 * 60 * 24)

    );

}

/* ==========================================================
   Histórico diário (pro gráfico de evolução do Perfil)

   Soma o escaneamento de hoje numa entrada por dia. Guarda só
   os últimos 60 dias, pra não deixar o array crescer sem
   limite.
========================================================== */

export function atualizarHistoricoDiario(statistics, waste){

    const hojeISO = new Date().toISOString().slice(0, 10);

    let historico = [...(statistics.dailyStats || [])];

    let entradaHoje = historico.find(item => item.date === hojeISO);

    if(!entradaHoje){

        entradaHoje = { date: hojeISO, scans: 0, co2: 0 };

        historico.push(entradaHoje);

    }

    entradaHoje.scans += 1;

    if(waste.recyclable){

        const co2DoItem =
            CO2_SAVINGS_PER_CATEGORY[waste.category] || 0;

        entradaHoje.co2 =
            Math.round((entradaHoje.co2 + co2DoItem) * 10) / 10;

    }

    historico.sort((a, b) => a.date.localeCompare(b.date));

    if(historico.length > 60){

        historico = historico.slice(historico.length - 60);

    }

    statistics.dailyStats = historico;

    return statistics;

}

/* ==========================================================
   Conquistas

   Compara as estatísticas atuais contra a lista de
   ACHIEVEMENTS e devolve as que foram desbloqueadas AGORA
   (ainda não estavam em statistics.unlockedAchievements).
   Já atualiza statistics.unlockedAchievements com elas.
========================================================== */

export function verificarConquistas(statistics){

    const jaDesbloqueadas = statistics.unlockedAchievements || [];

    const novas = ACHIEVEMENTS.filter(

        achievement =>

            !jaDesbloqueadas.includes(achievement.id) &&
            achievement.condition(statistics)

    );

    if(novas.length > 0){

        statistics.unlockedAchievements = [

            ...jaDesbloqueadas,

            ...novas.map(achievement => achievement.id)

        ];

        statistics.totalAchievements =
            statistics.unlockedAchievements.length;

    }

    return novas;

}
