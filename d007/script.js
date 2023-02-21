var cotadolar;

function msg() {
    cotadolar = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?').replace(',', '.'))
}

function conversor() {
    let real = Number(prompt('Quantos R$ você tem na carteira?'))
    let dolar = Number((real / cotadolar).toFixed(2)).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    let result = document.getElementById('result')
    real = real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    result.innerText = `Com ${real} reais você vai conseguir comprar ${dolar} dólares.`
}