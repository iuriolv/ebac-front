import { Parquimetro } from './classes.js';

function calcularParquimetro() {
    const tempo = Number(document.getElementById("tempo").value);
    const valor = Number(document.getElementById("valor").value);
    const parquimetro = new Parquimetro(tempo, valor);
    parquimetro.calcularTroco();
}