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


*/

function estaPreenchido(elemento){
    if(elemento.length == 0){
        return true
    } else{
        return false
    }
}

function adicionarElemento(array){
    let elemento = document.getElementById('add').value
    if(estaPreenchido()){
        array.push(elemento)
    } else{
        alert('Informe um valor válido.')
    }

}

var objetos = ['Cadeira', 'Impressora', 'Garfo']