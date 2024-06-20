Sistema Bancário Simples
Este é um programa Python que simula um sistema bancário básico com funcionalidades de depósito, saque, consulta de extrato e saída do sistema.

Funcionalidades
1. Depósito (d):

    - Permite ao usuário realizar um depósito na conta.
    - O valor do depósito deve ser positivo para ser aceito.
    - Atualiza o saldo e registra a transação no extrato.

2. Saque (s):

    - Permite ao usuário realizar um saque na conta.
    - Verifica se o saldo é suficiente para o saque.
    - Verifica se o valor do saque excede o limite diário estabelecido.
    - Atualiza o saldo, registra a transação no extrato e controla o número de saques diários.

3. Extrato (e):

    - Exibe todas as transações realizadas até o momento.
    - Mostra o saldo atual da conta.

4. Sair (q):

    - Encerra a execução do programa.

Limitações
    - Saldo Inicial: Iniciado com zero.
    - Limite de Saques: Estabelecido em 3 saques por dia.
    - Limite de Saldo: Estabelecido em R$ 500,00 para saques.

Uso
Para usar o programa, execute o código e siga as instruções apresentadas no menu. Você poderá realizar operações de depósito, saque, consultar extrato e sair do sistema.

Como Executar
Para executar o programa:

1. Certifique-se de ter o Python instalado em seu sistema.
2. Copie o código para um arquivo Python (por exemplo, banco.py).
3. Execute o arquivo Python:

python banco.py

Exemplo de Uso

Aqui está um exemplo simplificado de como você pode usar o programa:

1. Depósito:
    - Escolha a opção d e informe o valor do depósito quando solicitado.

2. Saque:
    - Escolha a opção s e informe o valor do saque desejado.

3. Extrato:
    - Escolha a opção e para visualizar todas as transações e o saldo atual.

4. Sair:
    - Escolha a opção q para encerrar o programa.

Contribuição
Este programa foi desenvolvido para fins educacionais e pode ser expandido com mais funcionalidades, validações e melhorias no código conforme necessário. Sinta-se à vontade para contribuir com melhorias e correções de bugs.

Esse README fornece uma visão geral do código, suas funcionalidades, instruções para execução e exemplos de uso. Ele é projetado para facilitar o entendimento e o uso do programa bancário simples em Python.