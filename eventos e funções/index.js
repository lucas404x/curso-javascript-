function imprimirValores(x){
    for(i = 0; i < x.length; i++){
        console.log(x[i]);
    }
}

function inverterLista(x){
    var listaresult = [];
    for(i = x.length - 1; i >= 0; i--){
        listaresult.push(x[i]);
    } 

    return listaresult;
}

function gerarLista(n){
    var lista = []
    for(i = 0; i <= n; i++){
        lista.push(i);
    }
    return lista;
}

//Comentario de uma linha

/*

Comentarios
de
N
Linhas

*/

document.write('<h1>Olá, mundo</h1>')
var x = document.getElementsByName('data_nascimento');
x = x.values();

//escrever texto no browser

var n = prompt('digite um número');
document.write('<br>');
document.write(inverterLista(gerarLista(n)));