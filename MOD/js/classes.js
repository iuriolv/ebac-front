import { calcularCusto } from "./utils.js";

export class Parquimetro {
    constructor(tempo, valor) {
        this.tempo = tempo;
        this.valor = valor;
    }

    calcular() {
        return calcularCusto(this.tempo);
    }

    calcularTroco() {
        const custo = this.calcular();
        if (custo === null) {
            return {
                status: "Tempo máximo excedido. Tempo máximo é de 120 minutos.",
                troco: null
            };
        }
        if (this.valor < custo) {
            return {
                status: "Valor insuficiente.",
                troco: null
            };
        }
        return {
            status: "Valor suficiente.",
            troco: this.valor - custo
        };
    }
}