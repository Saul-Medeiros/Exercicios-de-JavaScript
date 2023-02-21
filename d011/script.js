function verificar() {
    let ano = Number(prompt('Qual é o ano que você quer verificar?'))
    let resp = document.getElementById('resp')
    let p = document.createElement('p')

    resp.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`

    /* ano bissexto ocorre a cada 4 anos (exceto anos múltiplos de 100 que não são múltiplos de 400)
    *
    * 1º teste: ser múltiplo de 4
    * 2º teste: ser múltiplo de 400
    * 3º teste: não ser múltiplo de 100 
    * (este teste vai incluir números menores e não divisíveis por 400, 
    * que sejam divisíveis por 4, como números bissextos)
    */
    if (ano % 4 == 0 && (ano % 400 == 0 || ano % 100 != 0)) {
        p.innerHTML = `O ano de ${ano} <strong><mark class="bissexto">É BISSEXTO</mark></strong> &#x2705;`
    } else {
        p.innerHTML = `O ano de ${ano} <strong><mark class="naobissexto">NÃO É BISSEXTO</mark></strong> &#x274C;`
    }
    resp.appendChild(p)
}