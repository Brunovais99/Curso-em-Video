function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`

    if(hora >= 0 && hora < 12){
        img.src = "fotomanha.png"
        document.body.style.background = "#debb80"
    }else if(hora >= 12 && hora <= 18){
        img.src = "fototarde.png"
        document.body.style.background = "#be8e5c"
    }else{
        img.src = "fotonoite.png"
        document.body.style.background = "#091217"
      
    }
}
