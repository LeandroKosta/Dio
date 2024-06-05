import React from 'react'; // Importa o módulo React
import ReactDOM from 'react-dom'; // Importa o módulo ReactDOM
import Calculator from './main/Calculator'; // Importa o componente Calculator
import './index.css'; // Importa o estilo CSS do arquivo index

const elemento = document.getElementById('root'); // Obtém o elemento com o id 'root' do documento HTML
ReactDOM.render( // Renderiza o componente Calculator dentro do elemento 'root'
    <div>
        <h1>Calculator</h1> {/* Renderiza um título "Calculator" */}
        <Calculator /> {/* Renderiza o componente Calculator */}
    </div>,
    elemento); // Define o elemento onde o componente será renderizado