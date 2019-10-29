var largura, altura;
var vidas = 3;

function ajustarTamanhoJogo() {

    largura = window.innerWidth
    altura = window.innerHeight

}

function pegarTempo(tempo) {
    
    const inicio_indice = tempo[0].innerText.lastIndexOf(' ') + 1
    const fim_indice = tempo[0].innerText.length
    const tempo_f = inicio_indice != fim_indice ? tempo[0].innerText.slice(inicio_indice, fim_indice) : tempo[0].innerText[fim_indice]
    
    return parseInt(tempo_f)
}

function ajustarTempo() {
    
    let tempo = document.getElementsByClassName('cronometro')
    tempo[0].innerText = 'Tempo restante: ' + (pegarTempo(tempo) - 1)
}

ajustarTamanhoJogo()

function posicaoRandomica() {

    try {
        document.getElementById('mosca').remove()
        document.getElementById('coracao' + vidas).src = 'imagens/coracao_vazio.png'
        vidas -= 1
    } catch(e) {
        console.log(e)
    }


    let x = Math.floor(Math.random() * largura) - 80
    let y = Math.floor(Math.random() * altura) - 80

    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y


    // criar elemento HTML

    let tag = document.createElement('img')
    tag.id = 'mosca'
    tag.src = 'imagens/mosca.png'
    tag.className = gerarNumeroAleatorioClasse()
    tag.style.transform = ladoAleatorio()
    tag.style.left = x + 'px'
    tag.style.top = y + 'px'
    tag.style.position = 'absolute'

    tag.onclick = function() {

        // "this" faz referencia ao proprio elemento que executa a funcao
        this.remove()
        console.log('removeu!')
    }

    // adicionar o elemento no body

    document.body.appendChild(tag)
}

function gerarNumeroAleatorioClasse() {
    let num = Math.ceil(Math.random() * 3)
    return 'mosca' + num
}

function ladoAleatorio() {
    let lado = Math.ceil(Math.random() * 2)
    return lado == 1 ? 'scaleX(-1)' : 'scaleX(1)' 
    
}