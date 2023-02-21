function resultado() {
    while (true) {
        let num = prompt('Digite um número inteiro qualquer')
        if (num != Number(num)) {
            alert('Informe um número válido e tente novamente.')
        } else {
            let bef = Number(num) - 1
            let aft = Number(num) + 1
            alert(`Antes de ${num}, temos o número ${bef}.\nDepois de ${num}, temos o número ${aft}.`)
            break
        }
    }
}