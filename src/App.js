import './App.css';
import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

console.log(P);

P.getPokemonsList() 
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });

function App() {
  return (
    <div className="App">
      <ul>
        
      </ul>
    </div>
  );
}

export default App;
