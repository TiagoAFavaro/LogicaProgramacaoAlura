let countDown = prompt('Digite um número positivo aleatório ! ')

while (countDown < 0) {
    alert('Digite um número positivo ! ')
    countDown = prompt('Digite um número positivo aleatório ! ')
}

alert(`Contagem Regressiva: ${countDown}`)

while (countDown > 0) {
    countDown--
    alert(`Contagem Regressiva: ${countDown}`)
}
