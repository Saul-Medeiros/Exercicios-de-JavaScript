function reajustar() {
    let nome = prompt('Qual é o nome do funcionário?')
    let salario = Number(prompt(`Qual é o salário de ${nome}`))
    let pcent = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)) / 100
    let reajuste = pcent * salario
    let total = (salario + reajuste).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let resposta = document.querySelector('div#resposta')
    
    salario = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    reajuste = reajuste.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    /* Operador ternário:
     * Condição verdadeira: diminuição de salário
     * Condiçaõ falsa: aumento de salário
    */

    resposta.innerHTML = pcent < 0? `<h1>${nome} recebeu uma diminuição de salário.</h1>` : `<h1>${nome} recebeu um aumento salarial!</h1>`

    for (let c = 0; c < 3; c++) {
        // auto-declaração de parágrafo a cada repretição
        let parag = document.createElement('p')
        if (c == 0) {
            parag.innerText = `O salário atual era ${salario}.` 
        } else if (c == 1) {
            parag.innerText = pcent < 0 ? `Com uma diminuição de ${pcent*100}%, o salário vai diminuir ${reajuste} no próximo mês.` : `Com um aumento de ${pcent*100}%, o salário vai aumentar ${reajuste} no próximo mês.`
        } else {
            parag.innerText = `E a partir daí, ${nome} vai passar a ganhar ${total}.`
        }
        resposta.appendChild(parag)
    }
}