/*
Arrays - Estruturas com N posições que armazena N elementos.

sintaxe:

tipo variavel = Array()

typeof = ver o tipo da variavel


Arrays multidimensionais (mais de uma dimensão)

tipo array = Array()

array['nome_de_um_indice'] = Array(elemento1, elemento2, elemento3, ..., elementoN)
array['nome_de_um_indice2'] = Array(elemento1, elemento2, elemento3, ..., elementoN)

temos agora um array com dois arrays.


-- metodos --

push -> adicionar elemento ao final da lista: lista.push(elemento)
unshift -> adicionar elemento ao inicio da lista: lista.unshift(elemento)
pop -> excluir elemento ao final da lista: lista.pop()
shift -> excluir elemento ao inicio da lista:lista.shift()


pesquisar elementos dentro do array

indexOf - Método que retorna o índice do elemento caso exista

sintaxe: lista.indexOf(elemento) -> indice

ordenar arrays

sort -> Método que ordena alfanumericamente os elementos

sintaxe: lista.sort()

Como posso ordenar valores númericos? 

//Primeiro crio uma função:

function ordenaNumeros(a, b){
    // (a - b) == 0: ordem é mantida;
    // (a - b) > 0: a vem antes de b, uma vez que b é menor que a;
    // (a - b) == 0: a vem depois de b, uma vez que b é maior que a.
    
    return a - b
}

//Depois passo a referencia para o método:

lista.sort(ordenaNumeros) // passo a referencia, não a função ativada.




*/


function trocarPrimeiroCaracter(elemento){
    return elemento.replace(elemento[0], elemento[0].toUpperCase())
}

function ordenar(){
    objetos = objetos.sort()
    console.log(objetos)
}


function elementoExiste(lista, elemento) {
    if(lista.indexOf(elemento) === -1){
        return false
    } else{
        return true
    }
}

function estaPreenchido(elemento) {
    if(elemento.length > 0){
        return true
    } else{
        return false
    }
}

function adicionarElemento(){
    let elemento = document.getElementById('inserir')
    if(estaPreenchido(elemento.value)){
        const elem = trocarPrimeiroCaracter(elemento.value)
        if(elementoExiste(objetos, elem) === false){
            objetos.push(elem)
            elemento.value = ''
        } else{
            alert('Objeto já foi adicionado.')
        }
    } else{
        alert('Informe um valor válido.')
    }

}

var objetos = ['Cadeira', 'Impressora', 'Garfo']


