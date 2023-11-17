/*Aqui muda o nome do usuário nas saldações*/
function atualizarNome(){
    let nome = document.getElementById("Usuario")
    let inputnome = document.getElementById("NomeUsuario").value
    nome.innerText = inputnome 
}

/*Aqui muda o tamanho da fonte para caber números maiores dentro do card*/
function atualizarSaldo(){
    let saldo = document.getElementById("saldo")
    let valorSaldo = document.getElementById("valorSaldo").value
    let total = valorSaldo ||0
    let card = parseFloat(valorSaldo).toLocaleString('pt-BR')
    let tamanhoFonte = 24 - (total.length - 10)* 2.2
    tamanhoFonte = Math.max(tamanhoFonte,22)
    saldo.style.fontSize = tamanhoFonte + "px"
    saldo.innerText = `R$${card}`
}
function atualizarLimite(){
    let limite = document.getElementById("limite")
    let valorlimite = document.getElementById("valorlimite").value
    let totallimite = valorlimite ||0
    let card2 = parseFloat(valorlimite).toLocaleString('pt-BR')
    let tamanhoFonte2 = 24 - (totallimite.length - 10)*2.2
    tamanhoFonte2 = Math.max(tamanhoFonte2,22)
    limite.style.fontSize = tamanhoFonte2 + "px"
    limite.innerText = `R$${card2}`
}

/*Aqui a função serve para esconder o valores dos cards*/
function Esconder(){   
    let card = document.getElementById("card")
    let texto = document.querySelector(".sumir")
    let barra = document.querySelector("#bar1")
    if (card.style.backgroundColor === 'rgb(246, 135, 33)') {
          card.style.backgroundColor = '#FFFFFF';
          texto.style.opacity = 1
          barra.style.opacity =1
          card.style.transition = "all 0.3s"
    }else{
          card.style.backgroundColor = '#F68721';
          texto.style.opacity = 0
          barra.style.opacity =0
    }
}
function Esconder2(){   
    let card2 = document.getElementById("card2")
    let texto = document.querySelector(".sumir2")
    let barra = document.querySelector("#bar2")
    if (card2.style.backgroundColor === 'rgb(246, 135, 33)'){
          card2.style.backgroundColor = '#FFFFFF';
          texto.style.opacity = 1
          barra.style.opacity =1
          card2.style.transition = "all 0.3s"
    }else{
          card2.style.backgroundColor = '#F68721';
          texto.style.opacity = 0
          barra.style.opacity = 0
    }
}