function calcular() {
    let a = Number(prompt('Qual o valor de a?'))
    let b = Number(prompt('Qual o valor de b?'))
    let c = Number(prompt('Qual o valor de c?'))
    let delta = b ** 2 - 4 * a * c
    let resp = document.getElementById('resp')
    
    resp.style.marginTop = '0px' // retira o espaçamento superior

    resp.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    for (let cont = 0; cont < 3; cont++) {
        let p = document.createElement('p')
        if (cont == 0) {
            p.innerHTML = `A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong>`
        } else if (cont == 1) {
            p.innerHTML = `O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong>`
        } else {
            p.innerHTML = `O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong>`
        }
        resp.appendChild(p)
    }
}