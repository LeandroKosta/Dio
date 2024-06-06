import React from "react"; // Importa o módulo React
import './Display.css'; // Importa o estilo CSS do componente Display

// Define o componente Display
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div className="display">{props.value}</div> // Renderiza um elemento div com a classe "display" e o valor fornecido por props