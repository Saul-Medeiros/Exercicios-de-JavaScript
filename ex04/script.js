function tabuada() {
    let num = document.querySelector('input#txtnum')
    let tabuada = document.querySelector('select#seltab')

    if (num.value.length == 0) {
        alert('[ERRO] Informe um número válido!')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML = `<option>Tabuada do número ${n}:</option>`
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // adiciona um value para a tag atual, util para php
            tabuada.appendChild(item)
        }
    }
}