/* 

O que é o ECMASCRIPT?

É uma forma de padronizar a implementação do JavaScript nos navegadores.
Além disso, também adiciona algumas features ao javascript.

Template String - usasse crase " ` " - pode quebrar linha dando "ENTER"

let nome = 'Lucas'

alert(`Olá, 
${nome}!`)

Parametros default


function calcular(x, y = 0) {
    return x + y
}

console.log(calcular(1)) // 1



Arrow Functions


Funções para mais de uma linha:


let x = x => {
    return x
}

Uma linha:

let x = x => x

(return é implicito)

*/