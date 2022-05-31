function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano") //formulario ano do input
    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value) > ano){ //vazio ou maior q o ano atual
        alert("[ERRO] Verifique os dados e tente novamente")
    }else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img") //o elemento vai ser uma imagem
        img.setAttribute("id", "foto") // img com o id "foto"
        
        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute("src", "fotohomemcriança.png")
            } else if(idade <21){
                //jovem
                img.setAttribute("src", "fotohomemjovem.png")
            } else if(idade <50){
                //adulto
                img.setAttribute("src", "fotohomemadulto.png")
            }else{
                //idoso
                img.setAttribute("src", "fotohomemidoso.png")
            }
        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade <10){
                //criança
                img.setAttribute("src", "fotomulhercriança.png")
            } else if(idade <21){
                //jovem
                img.setAttribute("src", "fotomulherjovem.png")
            } else if(idade <50){
                //adulto
                img.setAttribute("src", "fotomulheradulta.png")
            }else{
                //idoso
                img.setAttribute("src", "fotomulheridosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //vai adicionar um elemento em baixo

    }
}