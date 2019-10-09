/*

O que é o DOM?

Document Object Model é uma API JavaScript que nos permite manipular os elementos do HTML.

*/
function start() {
    caracter = retornarCaracter()
    adicionarNoCampo(caracter)
}


// selecionando elementos da página


function retornarCaracter() {

    let campo = document.getElementById('livre').value
    document.getElementById('livre').value = '' // limpando o campo
    return campo

}


//modificando elementos

function adicionarNoCampo(caracter) {

    let numeros = document.getElementById('numeros')
    let letras = document.getElementById('letras')

    if (isNaN(caracter)){
        letras.value += caracter
    } else{
        numeros.value += caracter
    }

}

// Trocar cor da div


function modificarEstilo(cor) {
    const divisao = document.getElementById('bg-teste')
    divisao.style.background = cor
}


/*
E se eu quisesse alterar o nome da classe? Seria: divisao.className.

*/

