function calcular(){
    let img = document.getElementById('imgCalculo')
    let mensagem = document.getElementById('mensagemRetorno')
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value

    let imc = peso / (altura * altura).toFixed(2)

    if(imc >= 0 && imc < 18.5){
        img.src = 'img/muitomagra.png'
        mensagem = `Você está muito abaixo do peso.`

    }else if(imc >= 18.5 && imc < 24.99){
        img.src = 'img/pesoideal.png'
        mensagem = `Você está com o peso normal.`

    }else if(imc >= 25 && imc < 30){
        img.src = 'img/acimadopeso.png'
        mensagem = `Você está acima do peso.`

    }else if(imc >= 30.1 && imc < 35){
        img.src = 'img/gordo.png'
        mensagem = `Você está muito acima do peso`

    }else if(imc > 35){
        img.src = 'img/obeso.png'
        mensagem = `Você está obeso`
       
        console.log(imc)
    }else{imc
        mensagem = `Digite um valor válido`
    }

    mensagemRetorno.innerHTML = `${mensagem}`
}

let button = document.getElementById('button')
button.addEventListener('click', calcular)
