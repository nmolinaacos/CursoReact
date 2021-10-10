import logo from './logo.svg';
import './App.css';
import ComponenteEstaticaSaludar from './components/componente-estatica-saludar.js';
import ComponenteDinamicaSaludar from './components/componente-dinamica-saludar.js';
import Listapokemon from './components/pokemons/Info-Pokemons.js';

function App() {
  return (
    <div className="App">
      <Listapokemon/>
    </div>
  );
}

export default App;
