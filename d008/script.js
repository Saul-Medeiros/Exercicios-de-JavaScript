function calcular() {
    let produto = prompt('Qual é o produto que você está comprando?')
    let preco = Number(prompt(`Qual é o preço de ${produto}?`))
    let desconto = (preco * 0.1)
    let total = Number(preco - desconto).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let resultado = document.querySelector('div#resultado')
    
    preco = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    desconto = desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    resultado.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2><p>O preço original era ${preco}.</p><p>Você acaba de ganhar ${desconto} de desconto (-10%).</p><p>No fim, você vai pagar ${total} no produto ${produto}.</p>`
}