export const faixasPreco = [
    { tempoMaximo: 30, custo: 1.00 },
    { tempoMaximo: 60, custo: 2.00 },
    { tempoMaximo: 120, custo: 3.00 }
];

export function calcularCusto(tempo) {
    const faixa = faixasPreco.find(faixa => tempo <= faixa.tempoMaximo);
    return faixa ? faixa.custo : null;
}

export function formatarMoeda(valor) {
    return valor.toFixed(2);
}