const prompt = require('prompt-sync')();

// Função para substituir virgula por ponto e converter para número
function parseInput(input) {
    return parseFloat(input.replace(',','.'));
}

// Perguntar o tipo de combustível do veículo
let tipoCombustivel = prompt("Digite o tipo de combustível que está no seu carro (Etanol/Gasolina):").toLowerCase();

let precoCombustivel;

if (tipoCombustivel === "etanol") {
    // Solicitar o preço do etanol
    let precoEtanol = prompt("Digite o preço do Etanol (por litro):");
    precoCombustivel = parseInput(precoEtanol);
} else if (tipoCombustivel === "gasolina") {
    // Solicitar o preço da gasolina
    let precoGasolina = prompt("Digite o preço da Gasolina (por litro)");
    precoCombustivel = parseInput(precoGasolina);
} else {
    console.error("Tipo de combustível inválido. Por favor, insira 'Etanol' ou 'Gasolina'.");
}

// Solicitar as outras informações se o tipo de combustível for válido
if (precoCombustivel) {
    let consumoPorKm = prompt("Digite o consumo médio de combustível do carro (litros por km):");
    let distancia = prompt("Digite a distência da viagem (em km):");

    // Converter entradas para números
    consumoPorKm = parseInput(consumoPorKm);
    distancia = parseInput(distancia);

    // Calcular o valor da viagem
    const valorViagem = distancia / consumoPorKm * precoCombustivel;

    // Imprimir o resultado no console
    console.log(`O valor gasto para realizar a viagem será de R$ ${valorViagem.toFixed(2)}`);
} else {
    console.error("Não foi possível calcular o valor da viagem devido a uma entrada inválida.");
}