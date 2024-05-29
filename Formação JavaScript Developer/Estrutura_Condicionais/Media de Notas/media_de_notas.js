const prompt = require('prompt-sync')();

// Função para substituir vírgula por ponto e converter para número
function parseInput(input) {
    return parseFloat(input.replace(',','.'));
}

// Solicitar as três notas do aluno
let nota1 = prompt("Digite a primeira nota: ");
let nota2 = prompt("Digite a segunda nota: ");
let nota3 = prompt("Digite a terceira nota: ");

// Converter as notas para números
nota1 = parseInput(nota1);
nota2 = parseInput(nota2);
nota3 = parseInput(nota3);

// Calcular a média
const media = (nota1 + nota2 + nota3) / 3;

// Determinar a classificação
let classificacao
if (media < 5) {
    classificacao = "reprovação";    
} else if (media >= 5 && media <= 7) {
    classificacao = "recuperação";
} else {
    classificacao = "passou de semestre";
}

// Imprimir a média e a classificação
console.log(`A média do aluno é ${media.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);