function calcular() {
    let produto = prompt('Que produto você está comprando?')
    let preco = Number(prompt(`Quanto custa ${produto} que você está comprando?`))
    let pagamento = Number(prompt(`Qual o valor que você deu para pagar ${produto}?`))
    let troco = Number(pagamento - preco)
    alert(`Você comprou ${produto} que custou ${conversor(preco)}.\nDeu ${conversor(pagamento)} em dinheiro e vai receber ${conversor(troco)} de troco.\nVolte Sempre!`)
}

//formata o número para moeda em reais
function conversor(real) {
    return real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}