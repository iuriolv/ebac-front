export class Parquimetro {
    constructor(tempo, valor) {
        this.tempo = tempo;
        this.valor = valor;
    }

    calcular() {
        let custo = 0;
        if (this.tempo <= 30) {
            custo = 1.00;
        } else if (this.tempo <= 60) {
            custo = 2.00;
        } else if (this.tempo <= 120) {
            custo = 3.00;
        } else {
            return null;
        }
        return custo;
    }

    calcularTroco() {
        const custo = this.calcular();
        if (custo === null) {
            document.getElementById("status").textContent = "Tempo máximo excedido. Tempo máximo é de 120 minutos.";
            document.getElementById("troco").textContent = "";
            return;
        }
        if (this.valor < custo) {
            document.getElementById("status").textContent = "Valor insuficiente.";
            document.getElementById("troco").textContent = "";
        } else {
            const troco = this.valor - custo;
            document.getElementById("status").textContent = "Valor suficiente.";
            document.getElementById("troco").textContent = `Troco: R$ ${troco.toFixed(2)}`;
        }
    }
}