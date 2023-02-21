var m;

function conversor() {
    m = Number(prompt('Digite uma distância em metros (m)'))
    let result = document.getElementById('resultado')
    result.innerHTML = `<h2>A distância de ${m} metros, corresponde a...</h2>`
    medidas(result)
}

function medidas(div) {
    for (let med = 0.001; med <= 1000; med *= 10) { 
        // a cada repetição é aumentado 1 digito na variável auxiliar
        let p = document.createElement('p')
        switch (med) {
            case 0.001:
                p.innerText = `${m * 0.001} quilômetros (Km)`
                break;
            case 0.01:
                p.innerText = `${m * 0.01} hectômetros (Hm)`
                break;
            case 0.1:
                p.innerText = `${m * 0.1} decâmetros (Dam)`
                break;
            case 10:
                p.innerText = `${m * 10} decímetros (dm)`
                break;
            case 100:
                p.innerText = `${m * 100} centímetros (cm)`
                break;
            case 1000:
                p.innerText = `${m * 1000} milímetros (mm)`
                break;
            default: // med == 1
                continue;
        }
        div.appendChild(p) // adiciona o parágrafo preenchido com informações a cada repetição
    }
}