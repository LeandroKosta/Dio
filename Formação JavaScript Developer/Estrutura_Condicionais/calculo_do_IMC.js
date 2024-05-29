const prompt = require('prompt-sync')();

// Função para substituir vírgula por ponto e converter para número
function parseInput(input) {
    return parseFloat(input.replace(',','.'));
}

// Solicitar o peso e a altura do usuário
let peso = prompt("Digite seu peso em kg: ");
let altura = prompt("Digite sua altura em metros: ");

// Converter o peso e a altura para número
peso = parseInput(peso);
altura = parseInput(altura);

// Calcular o IMC
const imc = peso / (altura * altura);

// Determinar a condição com base no IMC
let condicao;
if (imc < 18.5) {
    condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc < 25) {
    condicao = "Peso Normal";
} else if (imc >= 25 && imc < 30) {
    condicao = "Acima do peso";
} else if (imc >= 30 && imc < 40) {
    condicao = "Obeso";
} else {
    condicao = "Obesidade Grave";
}

// Imprimir o resultado
console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Condição: ${condicao}`);