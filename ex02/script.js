var img = document.createElement('img')
img.setAttribute('id', 'foto')

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    // maior que o ano atual ou ano não preenchido
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero;
        if (fsex[0].checked) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        setImagem(idade, genero)
        res.appendChild(img)
    }
}

// Muda a imagem de acordo com idade e gênero
function setImagem(age, gen) {
    // Complemento para o nome da foto de acordo com o gênero
    var comp;
    if (gen == 'Homem') {
        comp = 'man'
    } else {
        comp = 'woman'
    }

    // Atribui uma imagem de acordo com a idade
    if (age >= 0 && age < 10) {
        img.setAttribute('src', `./images/child${comp}.png`)
    } else if (age >= 10 && age < 21) {
        img.setAttribute('src', `./images/young${comp}.png`)
    } else if (age >= 21 && age < 50) {
        img.setAttribute('src', `./images/adult${comp}.png`)
    } else {
        img.setAttribute('src', `./images/older${comp}.png`)
    }
}