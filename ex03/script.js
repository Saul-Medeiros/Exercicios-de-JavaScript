function contar() {
    let inicio = Number(document.querySelector('input#inicio').value)
    let fim = Number(document.querySelector('input#fim').value)
    let passo = Number(document.querySelector('input#passo').value)
    let resposta = document.querySelector('div#resultado')
    
    // Para contagem regressiva
    if (inicio > fim) {
        passo *= -1
    }
    
    resposta.innerHTML = 'Contando: <br>'

    while ((passo > 0)? inicio <= fim : inicio >= fim) {
        //                        unicode emoji ↓
        resposta.innerHTML += ` ${inicio} \u{1f449}`
        inicio += passo
    }
    resposta.innerHTML += ' \u{1f3c1}'
}