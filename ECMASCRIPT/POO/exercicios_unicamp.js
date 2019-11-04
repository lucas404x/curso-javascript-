/*

Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto
dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de
trabalho. Escreva os seguintes métodos para esta classe:

media calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 2)
final calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)

*/

class Estudante {

    constructor(matricula, nome, notasProvas, notaTrabalho) {
        this.matricula = matricula
        this.nome = nome
        this.notasProvas = notasProvas
        this.notaTrabalho = notaTrabalho
    }

    media() {
        return (this.notasProvas[0] * 2.5 + this.notasProvas[1] * 2.5 + this.notaTrabalho * 2) / 2.5 * 2 + 2
    }

    final() {
        return this.media() >= 30 ? 0 : -1
    }
}

let estudante = new Estudante(12345, "Lucas", [3, 4], 8)
