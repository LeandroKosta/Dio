import React from "react";
import './Button.css';

// Componente funcional Button
// recebe propriedades como argumento e redenderiza um botão com base nessas propriedades
const Button = (props) => {
    // Função que será chamada ao clicar no botão
    const handleClick = () => {
        // Verifica se existe uma função de clique passada como propriedade
        // E chama essa função passando o rótulo do botão como argumento
        if (props.click) {
            props.click(props.label);
        }
    };

    // Classes CSS condicionais com base nas propriedades recebidas
    // Adiciona as classes 'operation', 'double' ou 'triple' se as propriedades correspondentes forem verdadeiras
    const buttonClasses = `
    button
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    `;

    return (
        // Botão com eventos de clique e classe CSS dinâmicas
        <button onClick={handleClick} className={buttonClasses}>
            {props.label} {/* texto do botão */}
        </button>
    );
};

// Exporta o componente Button
export default Button;