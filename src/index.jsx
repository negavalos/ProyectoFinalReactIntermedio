// import de react
import React from 'react';
import ReactDOM from 'react-dom/client';

// imports de redux
// import { Provider } from "react-redux"; 
// IMPORT component
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import App from './components/app';

// Importar los estilos
/* import "bootstrap/dist/css/bootstrap.min.css"; */
 import './styles/css/index.scss';

 // TODO Si trabajamos con Redux, crear el store y aplicar el middleware de Redux saga
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
