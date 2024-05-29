Este código JavaScript calcula o Índice de Massa Corporal (IMC) do usuário com base no peso e altura fornecidos e determina a condição de saúde correspondente. Abaixo está uma explicação detalhada de cada parte do código:

1. Importação do Módulo prompt-sync:

    - prompt-sync é utilizado para obter entradas do usuário de forma síncrona no console. A constante prompt armazena a função retornada por require('prompt-sync')().

2. Função parseInput:

    - A função parseInput recebe uma string de entrada, substitui vírgulas por pontos para acomodar diferentes formatos numéricos e converte a string para um número de ponto flutuante usando parseFloat.

3. Solicitação do Peso e Altura do Usuário:

    - O programa solicita ao usuário que insira seu peso em kg e sua altura em metros. Essas entradas são armazenadas nas variáveis peso e altura.

4. Conversão do Peso e Altura para Números:

    - O peso e a altura inseridos pelo usuário são passados para a função parseInput para serem convertidos de string para número.

5. Cálculo do IMC:

    - O IMC é calculado usando a fórmula: IMC = peso / (altura * altura). O resultado é armazenado na variável imc.

6. Determinação da Condição com Base no IMC:

    - A condição de saúde é determinada com base no valor do IMC:
        - IMC < 18.5: "Abaixo do peso"
        - 18.5 <= IMC < 25: "Peso Normal"
        - 25 <= IMC < 30: "Acima do peso"
        - 30 <= IMC < 40: "Obeso"
        - IMC >= 40: "Obesidade Grave"

7. Impressão do Resultado:

    - O IMC calculado é formatado para duas casas decimais usando toFixed(2) e impresso no console.
    - A condição de saúde correspondente também é impressa no console.