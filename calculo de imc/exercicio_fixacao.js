function calcularImc(altura, peso){
    return peso / (altura * altura)
}

function classificarImc(imc){
    if(imc < 16){
        return "Baixo peso muito grave"
    } else if(imc >= 16 && imc <= 16.99){
        return "Baixo peso grave"
    } else if(imc >= 17 && imc <= 18.49){
        return "Baixo peso"
    } else if(imc >= 18.50 && imc <= 24.99){
        return "Peso normal"
    } else if(imc >= 25 && imc <= 29.99){
        return "Sobrepeso"
    } else if(imc >= 30 && imc <= 34.99){
        return "Obesidade grau I"
    } else if(imc >= 35 && imc <= 39.99){
        return "Obesidade grau II"
    } else{
        return "Obesidade grau III"
    }
}


// Calculo de IMC

var nome = prompt('Digite seu nome')
var peso = parseFloat(prompt('Digite seu peso'))
var altura = parseFloat(prompt('Digite sua altura (em CM)'))

var imc = calcularImc(altura/100, peso)
var classificacao = classificarImc(imc)

document.write(nome + " possui índice de massa corporal igual a " + imc + ", sendo classificado como:\n" 
+ classificacao + ".")