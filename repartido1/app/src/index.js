import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App'; */
/* import reportWebVitals from './reportWebVitals'; */
/* import Prueba from './Prueba'; */
import App from './App' // Aquí importamos la función

//Y en la linea 30 la mostramos
ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
  );