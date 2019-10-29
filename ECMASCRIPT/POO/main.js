
//Exemplo


class Calculadora {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    calcular() {
        return this.a + this.b
    }
}


let calc = new Calculadora(1, 2)
console.log(calc.calcular())