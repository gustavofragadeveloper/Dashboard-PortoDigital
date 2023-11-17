const home = document.getElementById("página-home")
const rec = document.getElementById("página-recursos")
const cart = document.getElementById("página-carteira")
const chat = document.getElementById("página-mensagens")
const ajus = document.getElementById("página-ajustes")
const buttonhome = document.getElementById("btn1")
const buttonrecursos = document.getElementById("btn2")
const buttoncarteira = document.getElementById("btn3")
const buttonmensagem = document.getElementById("btn4")
const buttonajustes = document.getElementById("btn5")
const txt1 = document.getElementById("txt1")
const txt2 = document.getElementById("txt2")
const txt3 = document.getElementById("txt3")
const txt4 = document.getElementById("txt4")
const txt5 = document.getElementById("txt5")

function menu(){
    if(home.style.display === "block"){
        home.style.display = "none"
        txt1.style.color = "white"
        buttonhome.style.width = "45px "
        buttonhome.style.backgroundColor = "#B116A247"
        txt1.style.color = "white"
    }else{
        home.style.display = "block"
        buttonhome.style.width = "450px"
        
        buttonhome.style.backgroundColor = "rgb(255,255,255)"
        txt1.style.color="black"
        txt2.style.color="white"
        txt3.style.color="white"
        txt4.style.color="white"
        txt5.style.color="white"
        
        buttonrecursos.style.width = "45px"
        buttoncarteira.style.width = "45px "
        buttonmensagem.style.width = "45px "
        buttonajustes.style.width = "45px "
        buttonrecursos.style.backgroundColor = "#B116A247"
        buttoncarteira.style.backgroundColor = "#B116A247"
        buttonmensagem.style.backgroundColor = "#B116A247"
        buttonajustes.style.backgroundColor = "#B116A247"
        rec.style.display = "none"
        cart.style.display="none"
        chat.style.display= "none"
        ajus.style.display="none"
        
        
    }
}
function recursos(){
    if(rec.style.display === "block"){
        rec.style.display = "none"
        buttonrecursos.style.width = "45px"
        buttonrecursos.style.backgroundColor = "#B116A247"
        buttonrecursos.style.color = "white"
        txt2.style.color = "white"
    }else{
        buttonrecursos.style.width = "450px"
        buttonrecursos.style.backgroundColor = "rgb(255,255,255)"
        txt2.style.color = "black"
        txt1.style.color="white"
        txt3.style.color="white"
        txt4.style.color="white"
        txt5.style.color="white"
        buttonhome.style.width = "45px "
        buttoncarteira.style.width = "45px "
        buttonmensagem.style.width = "45px "
        buttonajustes.style.width = "45px "
        buttonhome.style.backgroundColor = "#B116A247"
        buttoncarteira.style.backgroundColor = "#B116A247"
        buttonajustes.style.backgroundColor = "#B116A247"
        buttonmensagem.style.backgroundColor = "#B116A247"
        chat.style.display = "none"
        rec.style.display = "block"
        home.style.display = "none"
        cart.style.display = "none"
        ajus.style.display = "none"
        
        
    }
}
function carteira(){
    if(cart.style.display === "block"){
        cart.style.display = "none"
        buttoncarteira.style.width = "45px"
        buttoncarteira.style.backgroundColor = "#B116A247"
        buttoncarteira.style.color = "white"
        txt3.style.color = "white"
    }else{
        cart.style.display = "block"
        buttoncarteira.style.width = "450px"
        buttoncarteira.style.backgroundColor = "rgb(255,255,255)"
        txt3.style.color = "black"
        txt2.style.color="white"
        txt1.style.color="white"
        txt4.style.color="white"
        txt5.style.color="white"
        buttonmensagem.style.width = "45px"
        buttonhome.style.width = "45px"
        buttonajustes.style.width = "45px"
        buttonrecursos.style.width = "45px"
        buttonmensagem.style.backgroundColor = "#B116A247"
        buttonajustes.style.backgroundColor = "#B116A247"
        buttonrecursos.style.backgroundColor = "#B116A247"
        buttonhome.style.backgroundColor = "#B116A247"
        chat.style.display = "none"
        rec.style.display = "none"
        home.style.display = "none"
        ajus.style.display = "none"
        
    }
}
function mensagem(){
    if(chat.style.display === "block"){
        chat.style.display = "none"
        buttonmensagem.style.width = "45px"
        buttonmensagem.style.backgroundColor = "#B116A247"
        buttonmensagem.style.color = "white"
        txt4.style.color = "white"
    }else{
        chat.style.display = "block"
        buttonmensagem.style.width = "450px"
        buttonmensagem.style.backgroundColor = "rgb(255,255,255)"
        txt4.style.color = "black"
        txt2.style.color="white"
        txt3.style.color="white"
        txt1.style.color="white"
        txt5.style.color="white"
        buttonrecursos.style.width = "45px"
        buttonhome.style.width = "45px"
        buttoncarteira.style.width = "45px"
        buttonajustes.style.width = "45px"
        buttonajustes.style.backgroundColor = "#B116A247"
        buttonrecursos.style.backgroundColor = "#B116A247"
        buttoncarteira.style.backgroundColor = "#B116A247"
        buttonhome.style.backgroundColor = "#B116A247"
        home.style.display = "none"
        rec.style.display = "none"
        cart.style.display="none"
        ajus.style.display="none"
        
       
    }
}
function ajustes(){
    if(ajus.style.display === "block"){
        ajus.style.display = "none"
        buttonajustes.style.width = "45px"
        buttonajustes.style.backgroundColor = "#B116A247"
        buttonajustes.style.color = "white"
        txt5.style.color = "white"
    }else{
        ajus.style.display = "block"
        buttonajustes.style.width = "450px"
        buttonajustes.style.backgroundColor = "rgb(255,255,255)"
        txt5.style.color = "black"
        txt2.style.color="white"
        txt3.style.color="white"
        txt4.style.color="white"
        txt1.style.color="white"
        buttonrecursos.style.width = "45px"
        buttonhome.style.width = "45px"
        buttoncarteira.style.width = "45px"
        buttonmensagem.style.width = "45px"
        buttonrecursos.style.backgroundColor = "#B116A247"
        buttoncarteira.style.backgroundColor = "#B116A247"
        buttonhome.style.backgroundColor = "#B116A247"
        buttonmensagem.style.backgroundColor = "#B116A247"
        home.style.display="none"
        rec.style.display="none"
        cart.style.display="none"
        chat.style.display="none"
        
        
    }
}
