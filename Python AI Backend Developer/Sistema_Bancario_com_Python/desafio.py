# Define o menu de operações disponíveis para o usuário
menu = """

[d] Depositar
[s] Sacar
[e] Extrato
[q] Sair

=> """

# Inicializa as variáveis de estado da conta
saldo = 0  # Saldo inicial da conta
limite = 500  # Limite diário de saque
extrato = ""  # String para armazenar o histórico de transações
numero_saques = 0  # Contador de saques realizados no dia
LIMITE_SAQUES = 3  # Número máximo de saques permitidos por dia

# Loop principal para execução do programa
while True:
    # Exibe o menu e solicita a opção ao usuário
    opcao = input(menu)

    # Opção para realizar um depósito na conta
    if opcao == "d":
        valor = float(input("Informe o valor do depósito: "))
        # Verifica se o valor do depósito é válido
        if valor > 0:
            saldo += valor  # Adiciona o valor ao saldo da conta
            extrato += f"Depósito: R$ {valor:.2f}\n"  # Atualiza o extrato com a transação
            print(f"Depósito de R$ {valor:.2f} realizado com sucesso!")
        else:
            print("Operação falhou! O valor do depósito deve ser positivo.")

    # Opção para realizar um saque na conta
    elif opcao == "s":
        valor = float(input("Informe o valor do saque: "))
        excedeu_saldo = valor > saldo
        excedeu_limite = valor > limite
        excedeu_saques = numero_saques >= LIMITE_SAQUES

        # Verifica se o saque pode ser realizado com base em várias condições
        if excedeu_saldo:
            print("Operação falhou! Você não tem saldo suficiente.")
        elif excedeu_limite:
            print("Operação falhou! O valor do saque excede o limite.")
        elif excedeu_saques:
            print("Operação falhou! Número máximo de saques diários excedido.")
        elif valor > 0:
            saldo -= valor  # Deduz o valor do saldo da conta
            extrato += f"Saque: R$ {valor:.2f}\n"  # Atualiza o extrato com a transação
            numero_saques += 1  # Incrementa o contador de saques realizados no dia
            print(f"Saque de R$ {valor:.2f} realizado com sucesso!")
        else:
            print("Operação falhou! O valor do saque deve ser positivo.")

    # Opção para exibir o extrato da conta
    elif opcao == "e":
        print("\n========== EXTRATO ==========")
        # Verifica se há movimentações no extrato
        if not extrato:
            print("Não foram realizadas movimentações.")
        else:
            print(extrato)  # Exibe o histórico de transações
        print(f"\nSaldo atual: R$ {saldo:.2f}")  # Exibe o saldo atual da conta
        print("==============================")

    # Opção para sair do programa
    elif opcao == "q":
        print("Saindo do sistema...")
        break # Encerra o loop e sai do programa

    # Caso o usuário escolha uma opção inválida    
    else:
        print("Operação inválida, por favor selecione novamente a operação desejada.")