function modificarBg(classe){
    document.getElementById('campo').className = classe
}

function verificarConteudo(){
    const conteudo = document.getElementById('campo')
    if(conteudo.value.length < 3){
        conteudo.style.color = 'red'
    } else{
        conteudo.style.color = 'green'
    }
}