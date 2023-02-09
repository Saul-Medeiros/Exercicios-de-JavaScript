var valores = []
const detalhes = document.getElementById('det')

function adicionar() {
    const num = document.getElementById('txtnum')
    let n = Number(num.value)
    if (n < 1 || n > 100 || num.value.length == 0) {
        alert('Informe um número válido e tente novamente.')
    // verifica se a variável existe no vetor e retorna um valor acima de -1 caso seja verdade
    } else if (valores.indexOf(n) != -1) {
        alert('Este número já foi registrado, por favor, tente registrar outro número.')
    } else {
        let lista = document.getElementById('vetornum')
        let item = document.createElement('option')
        detalhes.innerHTML = '' // apaga o conteúdo da div
        item.text = `Valor ${n} adicionado`
        lista.appendChild(item)
        valores.push(n) // adiciona o número no final do vetor
    }
    num.value = '' // apaga o conteúdo inserido no input number
    num.focus() // mantém o cursor no input number
}

function finalizar() {
    if (valores.length == 0) {
        alert('Não é possível continuar pois não foi registrado nenhum número na lista.')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        detalhes.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}.</p>
        <p>O menor valor informado foi ${menor}.</p>
        <p>Somando todos os valores, temos ${soma}.</p>
        <p>A média dos valores digitados é ${media}.</p>`
    }
}