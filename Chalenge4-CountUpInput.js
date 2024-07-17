let startNumber = 0
let countUp = prompt('Digite um número positivo aleatório ! ')

while (countUp < 0) {
    alert('Digite um número positivo ! ')
    countUp = prompt('Digite um número positivo aleatório ! ')
}

while (countUp > startNumber) {
    startNumber++
    alert(`Contagem Crescente: ${startNumber}`)
}
