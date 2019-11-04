
/*Objetos Literais são objetos ÚNICOS!
Ou seja, mesmo que você crie uma variavel para armazenar o objeto,
eles não criam copias, e sim, referencias para o mesmo objeto!

*/


class Produto {

    constructor(descricao, preco) {
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao() {
        console.log(`${this.descricao} - por apenas $${this.preco}!`)
    }

}

let objeto_literal = {

    descricao:'',
    preco: 0,
    verDescricao: () => { 
        console.log(`${objeto_literal.descricao} -> por apenas $${objeto_literal.preco}`)
    }

}

objeto_literal.descricao = "asdasda"
objeto_literal.preco = 234
objeto_literal.verDescricao()

function pegarDados() {

    const dados = {

        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        mostrarDados() {
            console.log(nome.value)
            console.log(email.value)
            console.log(senha.value)
        }

    }

    dados.mostrarDados()

}

//Funcões construtoras para objetos literais


let Cadeira = function(cor, pernas) {
    this.cor = cor
    this.pernas = pernas

    this.getCor = function() {
        return this.cor
    }
}

let cadeira = new Cadeira("Azul", 4)

