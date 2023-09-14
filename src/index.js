import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//forma moderna

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App />
  </React.StrictMode>
 );

//forma antigua

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


//clase 21 inicial

// <p>Hola mundo</p>
//const x = React.createElement('p', null, 'Hola mundo')
//const X = () => <p>Hola mundo</p> //componente funcional que retorna jsx
//componente estático
// const X = () => <ul>
//   <li>Chancito Feliz</li>
//   <li>Chancito Triste</li>
//   <li>Felipe</li>
// </ul>

//clase 21 inicial fin

//componente final clase 21

// const Li = ({ children, estado, casa, edad }) => {
//   console.log(casa, edad);
//   return(<li>{children} estoy {estado}</li>)
// }

// const X = () => <ul>
//   <Li
//     estado={'feliz'}
//     casa={false}
//     edad={24}
//   >Chanchito</Li>
//   <Li estado={'triste'}>Chanchito</Li>
//   <Li estado={'emocionado'}>Felipe</Li>
// </ul>

//fin componente final clase 21

// ReactDOM.render : Encargado de renderizar una aplicación
// se debe cambiar el paquete import ReactDOM from 'react-dom/client';
// a import ReactDOM from 'react-dom´; y se usa en vez del createElement
// ReactDOM.render(
//   <X />, document.getElementById('root')
//   //jsx
//   //<p>Hola mundo</p>, document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
