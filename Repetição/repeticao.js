/*

//sintaxe for in:


let array = ['lucas', 2, 3]

for(let x in array) {
    console.log(x + ' - ' + array[x])
}

console.log(x)

//sintaxe foreach

//o primeiro parametro é o valor, o segundo o indice e o terceiro o array SEMPRE.

let callback = function x(valor, indice, array) {
    //lógica
}

array.forEach(callback)


*/


//Exercicio 1

document.write('<h1>Exercício 1</h1>')

let frutas = ['Banana', 'Maçã', 'Uva', 'Morango', 'Abacaxi']

for (let fruta in frutas) {
    document.write(frutas[fruta] + '<br>')
}

document.write('<hr>')
document.write('<hr>')

//Exercicio 2

document.write('<h1>Exercício 2</h1>')

let y = 1

while (y <= 10) {
    let x = 1
    while (x <= 10) {
        document.write(y + 'x' + x + ' = ' + x*y + '<br>')
        x += 1
    }
    document.write('<hr>')
    y += 1
}
