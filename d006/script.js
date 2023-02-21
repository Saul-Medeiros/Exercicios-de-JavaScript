function conversor() {
    let c = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    let k = (c + 273.15).toFixed(2) // corrigindo erro de decimal quebrada
    let f = c * 9 / 5 + 32
    let div = document.getElementById('resultado')
    div.innerHTML = `<h1>A temperatura de ${c}°C, corresponde a...</h1><p>${k}°K (Kelvin)</p><p>${f}°F (Fahrenheit)</p>`
}