function verificar() {
    let p_antes = Number(prompt('Qual era o preço anterior do produto?'))
    let p_agora = Number(prompt('Qual é o preço atual do produto?'))
    let resp = document.getElementById('resp')
    let difer = p_agora - p_antes // difere o preço anterior do atual

    resp.innerHTML = `<h2>Analisando os valores informados</h2>
    <p>O produto custava ${p_antes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa 
    ${p_agora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    for (let cont = 0; cont < 3; cont++) {
        let p = document.createElement('p') // cria um novo parágrafo a cada repetição
        if (cont == 0) {
            p.innerText = `Hoje, o produto ${dif(difer, 0)}`
        } else if (cont == 1) {
            let aux = difer==0 ? p_agora : difer
            p.innerText = `O preço ${dif(difer, 1)} ${convnumber(aux).toLocaleString
                ('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.`
        } else {
            // para porcentagem, o valor de referência é sempre o menor
            let pcent = (difer<0 ? difer/p_agora*100 : difer/p_antes*100).toFixed(2)
            p.innerText = `Com uma variação de ${convnumber(pcent)}% ${dif(difer, 2)}.`
        }
        resp.appendChild(p) // adiciona um novo parágrafo a cada repetição
    }
}


/**
 * Esta função vai converter um número para positivo ou, se o número já for
 * positivo, esta função retornará o mesmo valor.
 * 
 * @param {number} num Recebe o valor a ser convertido.
 * @returns {number} O valor convertido para number e com valor positivo.
 */
function convnumber(num) {
    if (num < 0) {
        return Number(num * -1)
    } else {
        return Number(num)
    }
}

/**
 * Esta função vai determinar um texto de acordo com o valor do parâmetro difer e pode ter 3 
 * escolhas distintas dependendo do valor do parâmetro cont, sendo seu valor padrão 0.
 ** Escolha 0: vai retornar um texto informando se o produto em comparação está mais barato,
 caro ou se continua com o mesmo preço.
 ** Escolha 1: vai indicar se o preço subiu, desceu ou se manteve igual.
 ** Escolha 2: similar a escolha 2, mas neste caso informa pra qual direção o preço foi, pra
 cima, pra baixo ou se manteve no mesmo lugar.
 * 
 * @param {number} difer Recebe a diferença de valores para comparação.
 * @param {number} cont Recebe a escolha de qual retorno o usuário deseja.
 * @returns {string} Uma String dependendo do valor de difer e da escolha.
 */
function dif(difer, cont=0) {
    // Escolha 0 (padrão) 
    if (cont == 0) {
        if (difer > 0) {
            return 'está mais caro.'
        } else if (difer < 0) {
            return 'está mais barato.'
        } else {
            return 'continua com o mesmo preço.'
        }
    // Escolha 1
    } else if (cont == 1) {
        if (difer > 0) {
            return 'subiu'
        } else if (difer < 0) {
            return 'caiu'
        } else {
            return 'se manteve em'
        }
    // Escolha 2
    } else if (cont == 2) {
        if (difer > 0) {
            return 'pra cima'
        } else if (difer < 0) {
            return 'pra baixo'
        } else {
            return 'se mantendo equivalente ao preço anterior'
        }
    }
}