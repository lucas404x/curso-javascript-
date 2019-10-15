// funções de matemática

//inicia chamando o Math


for(i = 0; i < 5; i++){     
    document.write(Math.random()) //retorna um pseudonumero aleatorio entre 0 e 1
    document.write('<br>')
}


/* funções de manipulação de string

var string = prompt('Digite absolutamente qualquer coisa abaixo')

document.write('Palavra a ser analisada: ' + string)
document.write('<br>')
document.write('<br>')

for(i = 0; i < string.length; i++){
    document.write(string.charAt(i))
    document.write('<br>')
}

*/


/*funções callback

são funções que são passadas como parametros para outras funções;
são muito usadas para acionar um evento esperado.
*/


/*funções anonimas

var x = function(a, b){
    return a * a * b * 3
}

document.write('<h1>' + x(13, 13) + '</h1>')


objeto 'arguments'

basicamente ele retorna um objeto com todos os argumentos passados para a função.


function soma() {
    return arguments // [2, 3, 55]

}

soma(2, 3, 55)

*/

function soma() {
    return arguments // [2, 3, 55]

}

console.log(soma(2, 3, 55))