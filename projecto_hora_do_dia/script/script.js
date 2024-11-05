function load(){
    var img = document.querySelector('body>main>img')
    var data = new Date()
    var hora = data.getHours()
    var txtHora = document.querySelector('body>main>p')
    hora = 20
    if (hora >= 6 && hora < 12){
        txtHora.innerHTML = `Bom dia! Já são ${hora}`
        img.setAttribute('src','img/dia.png')
        document.body.style.backgroundColor = 'wheat'
    }else if (hora >= 12 && hora <= 18){
        txtHora.innerHTML = `Boa tarde! Já são ${hora}`
        img.setAttribute('src','img/tarde.png')
        document.body.style.backgroundColor = '#34e234cb'
    }else{
        txtHora.innerHTML = `Boa noite! Já são ${hora}`
        img.setAttribute('src','img/noite.png')
        document.body.style.backgroundColor = '#795512'
    }
}