//import logo from './logo.svg';
//import './App.css';
import './main.css';

const estilo2 = {
  boxShadow: '0 5px 3px rgba(0,0,0,1)'
}

const estilo = (bg = '#222') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px'
})

const Li = ({ children }) => {
  console.log(children)
  return (
    <li style={{ ...estilo2, ...estilo({ bg: '#333' }) }} className='clase-li'>{children}</li>
  )
};

const App = () => {
  //const valor = 'triste'
  return (
    // jsx como html pero en javascript
    <ul style={estilo({ bg: '#750' })} className='clase-css'>
      {/* Chanchito {valor} */}
      <Li estado="feliz" >valor de Li</Li>
    </ul>

  );
};

export default App;
