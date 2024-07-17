alert('Bem vindo ao nosso Jogo !')

let nome = "Tiago"
alert(`Olá ${nome} ! `)

let linguagemPreferida = prompt('Qual a linguagem de programação que você mais gosta? ')
alert(`A linguagem que o ${nome} mais gosta é ${linguagemPreferida} !`)

let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;

alert(`A Soma de ${valor1} + ${valor2} é: ${resultado}`);

valor1 = 234;
valor2 = 333;
resultado = valor1 - valor2;

alert(`A diferença entre ${valor1} e ${valor2} é ${resultado}`)

let idade = prompt('Qual a sua idade ? ')

if (idade < 18){
    alert('Você é de menor')
}
else{
    alert('Você é de maior')
}

let numero = prompt('Digite um numero qualquer ! ')
if (numero == 0){
    alert('Numero 0 ')
}
if (numero < 0){
    alert('Você digitou um número negativo')
}
else{
    alert('Você digitou um numero positivo')
}

numero = 0
while(numero < 10){
    numero++
    alert(`Ordem Crescente de números: ${numero}`)
}

let nota = 6;
let situacao

if (nota >= 7){
    situacao = "APROVADO"
}
else {
    situacao = "REPROVADO"
}

alert(`Você tirou a nota ${nota} e está ${situacao} ! `)

numeroAleatorio = Math.random()
alert(`O computador gerou um número aleatório: ${numeroAleatorio}`)

numeroAleatorio = parseInt(Math.random() * 10 + 1)
alert(`O computador gerou um número aleatório: ${numeroAleatorio}`)

numeroAleatorio = parseInt(Math.random() * 1000 + 1)
alert(`O computador gerou um número aleatório: ${numeroAleatorio}`)














