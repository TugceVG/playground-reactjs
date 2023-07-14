import { useEffect, useState } from 'react';
import Card from './components/card/Card';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemonIndex, setSelectedPokemonIndex] = useState(0);

  useEffect(() => {
    function fetchPokemonData(pokemon) {
      let url = pokemon.url // <--- this is saving the pokemon url to a      variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
        .then(response => response.json())
        .then((pokeData) => {
          setPokemons((prev) => [...prev, pokeData])
        })
    }

    function fetchKantoPokemon() {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(allpokemon => {
          allpokemon.results.forEach(function (pokemon) {
            fetchPokemonData(pokemon);
          })
        });
    }

    fetchKantoPokemon();
  }, []);

  return (
    <div className="App">
      <Card pokemon={pokemons[selectedPokemonIndex]} setSelectedPokemonIndex={setSelectedPokemonIndex} />
    </div>
  );
}

export default App;
