// Função para substituir vígula por ponto e converter para número
function converterParaNumero(valor) {
    return parseFloat(valor.replace(',','.'));
}

// Função para calcular o valor a ser pago
function calcularValor(precoProduto, codigoPagamento) {
    let valorPago;

    switch (codigoPagamento) {
        case '1':
            // À vista Débito - 10% de desconto
            valorPago = precoProduto * 0.9;
            break;
        case '2':
            // À vista Dinheiro/Pix - 15% de desconto
            valorPago = precoProduto * 0.85;
            break;
        case '3':
            // Em duas vezes - preço normal sem juros
            valorPago = precoProduto;
            break;
        case '4':
            // Acima de dias vezes - preço normal mais 10% de juros
            valorPago = precoProduto * 1.1;
            break;
        default:
            console.log("Código de pagamento inválido.");
            return;                
    }

    console.log(`O valor a ser pago pelo produto é: R$ ${valorPago.toFixed(2)}`);    
}

// Solicita as informações ao usuário
const prompt = require('prompt-sync')({ sigint: true });

const precoProdutoStr = prompt("Digite o preço do produto: ");
const precoProduto = converterParaNumero(precoProdutoStr);

console.log("Escolha a condição de pagamento:");
console.log("1 - À vista Débito (10% de desconto");
console.log("2 - À vista Dinheiro/Pix (15% de desconto");
console.log("3 - Em duas vezes (sem juros");
console.log("4 - Acima de duas vezes (10% de juros)");
const codigoPagamento = prompt("Digite o código da condição de pagamento: ");

calcularValor(precoProduto, codigoPagamento);