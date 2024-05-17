const prompt = require('prompt-sync')();

// Função para substituir vírgula por ponto e converter para número
function parseInput(input) {
    const number = parseFloat(input.replace(',','.'));
    if (isNaN(number)) {
        throw new Error("Entrada inválida. Por favor, insira um número válido.");
    }
    return number;
}

// Função para calcular o valor da viagem
function calcularValorViagem(distancia, consumoPorKM, precoCombustivel) {
    // Calcula o valor total gasto na viagem
    const valorGasto = distancia / consumoPorKM * precoCombustivel;
    return valorGasto;
}

try {
    // Solicitando as variáveis ao usuário
const distancia = parseInput(prompt("Digite a distância da viagem (em km): "));
const consumoPorKM = parseInput(prompt("Digite o consumo médio de combustível do carro (litros por km): "));
const precoCombustivel = parseInput(prompt("Digite o preço do combustível (por litro): "));

// Calculando o valor da viagem
const valorViagem = calcularValorViagem(distancia, consumoPorKM, precoCombustivel);

// Imprimindo o resultado no console
console.log(`O valor gasto para realizar a viagem será de R$ ${valorViagem.toFixed(2)}`);

} catch (error) {
    // Tratando erros de entrada
    console.error(error.message);
}