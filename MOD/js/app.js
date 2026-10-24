import { Parquimetro } from './classes.js';
import { faixasPreco, formatarMoeda } from './utils.js';

const campoTempo = document.getElementById("tempo");
const campoValor = document.getElementById("valor");
const botaoCalcular = document.getElementById("calcular");
const status = document.getElementById("status");
const troco = document.getElementById("troco");
const listaValores = document.getElementById("valores");

listaValores.innerHTML = faixasPreco.map(faixa => 
    `<p>${faixa.tempoMaximo} minutos - R$ ${formatarMoeda(faixa.custo)}</p>`).join("");

function calcularParquimetro() {
    const tempo = Number(campoTempo.value);
    const valor = Number(campoValor.value);
    const parquimetro = new Parquimetro(tempo, valor);
    const resultado = parquimetro.calcularTroco();

    status.textContent = resultado.status;
    troco.textContent = resultado.troco !== null ? `Troco: R$ ${formatarMoeda(resultado.troco)}` : "";
}

botaoCalcular.addEventListener("click", calcularParquimetro);