import React, { Component } from "react"; // Importa o módulo React e Component
import Button from "../components/Button"; // Importa o componente Button
import Display from "../components/Display"; // Importa o componente Display
import "./Calculator.css"; // Importa o estilo CSS para o componente Calculator

// Define o estado inicial da calculadora
const initialState = {
  displayValue: "0", // Valor exibido no display
  clearDisplay: false, // Indica se o display deve ser limpo ao adicionar um novo dígito
  operation: null, // Operação matemática selecionada
  values: [0, 0], // Array para armazenar os valores utilizados nas operações
  current: 0, // Índice do valor atual
};

// Função de cálculo personalizada
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return NaN; // Retorna NaN se a operação for inválida
  }
};

// Define e exporta o componente Calculator
export default class Calculator extends Component {
  state = { ...initialState }; // Inicializa o estado com os valores padrão

  constructor() {
    super();
    // Faz o bind dos métodos para garantir que 'this' seja acessível dentro deles
    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  // Método para limpar a memória da calculadora
  clearMemory() {
    this.setState({ ...initialState }); // Define o estado inicial
  }

  // Método para definir a operação matemática selecionada
  setOperation(operation) {
    // Verifica se é a primeira operação ou se já existe uma em andamento
    if (this.state.current === 0) {
      // Define a operação, o valor atual e limpa o display
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      // Se já existe uma operação em andamento
      const equals = operation === "="; // Verifica se é uma operação de igualdade
      const currentOperation = this.state.operation; // Obtém a operação atual

      // Cria uma cópia dos valores
      const values = [...this.state.values];
      try {
        
        // Tenta realizar a operação matemática
        const result = calculate(values[0], values[1], currentOperation);
        values[0] = result;
      } catch (e) {
        // Em caso de erro, mantém o primeiro valor e limpa o segundo
        values[0] = this.state.values[0];
      }

      values[1] = 0; // Reseta o segundo valor para 0

      // Atualiza o estado com o resultado da operação
      this.setState({
        displayValue: values[0], // Define o valor exibido como o resultado da operação
        operation: equals ? null : operation, // Define a próxima operação ou nenhuma
        current: equals ? 0 : 1, // Reseta o índice do valor atual ou mantém o atual
        clearDisplay: !equals, // Define se o display deve ser limpo ou não
        values, // Atualiza o array de valores
      });
    }
  }

  // Método para adicionar dígitos ao display
  addDigit(n) {
    // Verifica se o dígito é um ponto e se o display já possui um ponto
    if (n === "." && this.state.displayValue.includes(".")) {
      return; // Não faz nada se o dígito for um ponto e o display já possuir um
    }

    // Verifica se o display deve ser limpo
    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    // Obtém o valor atual do display  
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    // Concatena o novo dígito ao valor atual
    const displayValue = currentValue + n;
    // Atualiza o estado com o novo valor exibido no display e desativa a limpeza
    this.setState({ displayValue, clearDisplay: false });

    // Verifica se o dígito não é um ponto
    if (n !== ".") {
      const i = this.state.current; // Obtém o índice do valor atual
      const newValue = parseFloat(displayValue); // Converte o novo valor para float
      const values = [...this.state.values]; // Cria uma cópia do array de valores
      values[i] = newValue; // Atualiza o valor atual no array de valores

      // Atualiza o estado com os novos valores
      this.setState({ values });
    }
  }

  // Renderiza o componente Calculator
  render() {
    return (
      <div className="calculator">
        {/* Renderiza o componente Display com o valor atual */}
        <Display value={this.state.displayValue} />
        {/* Renderiza os componentes Button com as operações e dígitos */}
        <Button label="AC" click={this.clearMemory} triple={true} />
        <Button label="/" click={this.setOperation} operation={true} />
        <Button label="7" click={this.addDigit} />
        <Button label="8" click={this.addDigit} />
        <Button label="9" click={this.addDigit} />
        <Button label="*" click={this.setOperation} operation={true} />
        <Button label="4" click={this.addDigit} />
        <Button label="5" click={this.addDigit} />
        <Button label="6" click={this.addDigit} />
        <Button label="-" click={this.setOperation} operation={true} />
        <Button label="1" click={this.addDigit} />
        <Button label="2" click={this.addDigit} />
        <Button label="3" click={this.addDigit} />
        <Button label="+" click={this.setOperation} operation={true} />
        <Button label="0" click={this.addDigit} double={true} />
        <Button label="." click={this.addDigit} />
        <Button label="=" click={this.setOperation} operation={true} />
      </div>
    );
  }
}
