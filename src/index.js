import React from 'react'; //Importando react, la biblioteca en si
import ReactDOM from 'react-dom'; //Importando react, enfocado al navegador porque esto es para una web  

import './index.css'; //importando estilos css

import App from './App'; //importando app.js que contiene el html y css
import reportWebVitals from './reportWebVitals'; //Permitiendo que la app funcione sin conexion al servidor

//Biblioteca enfocada al navegador
//Renderizando la aplicacion de APP
ReactDOM.render(
  <React.StrictMode>
    <App /> 
    {/* Desde esta etiqueta App estoy renderizando mi componente que se encuentra en App.js */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
