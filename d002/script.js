function start() {
    let nome = prompt('Qual é o seu nome?')
    if (nome.length == 0) {
        alert('Não foi possível registrar seu nome, tente novamente.')
    } else {
        while (true) {
            idade = prompt(`Olá, ${nome}! Quantos anos você tem?`)
            // Number(idade) pode retornar NaN ou o número, caso seja informado corretamente
            if (idade.length == 0 || Number(idade) < 0 || idade != Number(idade)) {
                alert(`Não foi possível registrar sua idade ${nome}, por favor, tente novamente.`)
                continue
            } else {
                alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
                break
            }
        }
    }
}