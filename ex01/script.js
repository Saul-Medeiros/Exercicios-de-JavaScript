function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = './images/morning.png'
        document.body.style.background = '#f39b39'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './images/evening.png'
        document.body.style.background = '#5083b5'
    } else {
        img.src = './images/night.png'
        document.body.style.background = '#2e2122'
    }
}