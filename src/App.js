import React from 'react';
import './App.css';
import Pokedex from 'pokedex-promise-v2';

const pokedex = new Pokedex();
const interval = {
  limit: 100,
  offset: 0
}

pokedex.getPokemonsList(interval) 
.then(function(response) {
  localStorage.setItem('pokemonsList', JSON.stringify(response.results));
})
.catch(function(error) {
  console.log('There was an ERROR: ', error);
});

const allPokemons = JSON.parse(localStorage.getItem('pokemonsList'));
const pokemonNames = allPokemons.map((pokemon) => { return pokemon.name; });

console.log(pokemonNames);

function App() {
  return (
    <div className="App">
      <ul>
        {pokemonNames.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
