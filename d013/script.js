function calcular() {
    let nome = prompt('Qual é o nome do aluno?')
    let p_nota = Number(prompt(`Primeira nota de ${nome}:`))
    let s_nota = Number(prompt(`Segunda nota de ${nome}:`))
    let media = (p_nota + s_nota) / 2
    let resp = document.getElementById('resp')
    let situacao = document.createElement('p')

    if (media >= 0) {
        resp.innerHTML = `<h2>Analisando a situação de ${nome}</h2>
        <p>Com as notas ${String(p_nota).replace('.',',')} e ${String(s_nota).replace('.',',')}, a <strong>média é ${media.toFixed(2).replace('.',',')}</strong></p>`
    }

    if (media > 6) {
        // aprovado
        situacao.innerHTML = 'Com média acima de 6,0, o aluno está <mark class="aprovado">APROVADO</mark>'
    } else if (media <= 6 && media >= 3) {
        // recuperação
        situacao.innerHTML = 'Com média entre 3,0 e 6,0, o aluno está em <mark class="recuperacao">RECUPERAÇÃO</mark>'
    } else if (media < 3 && media >= 0){
        // reprovado
        situacao.innerHTML = 'Com média abaixo de 3,0, o aluno está <mark class="reprovado">REPROVADO</mark>'
    } else {
        alert('Sua média ficou em valores negativos. Informe números corretamente e tente novamente.')
    }
    resp.appendChild(situacao)
}