import { useEffect, useState } from 'react';
import Card from './components/card/Card';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    function fetchPokemonData(pokemon) {
      let url = pokemon.url // <--- this is saving the pokemon url to a variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
      fetch(url)
        .then(response => response.json())
        .then((pokeData) => {
          setPokemons((prev) => [...prev, pokeData])
        })
    }

    function fetchKantoPokemon() {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=6")
        .then(response => response.json())
        .then(allpokemon => {
          allpokemon.results.forEach(function (pokemon) {
            console.log(pokemon)
            fetchPokemonData(pokemon);
          })
        });
    }
    fetchKantoPokemon();
  }, []);

  return (
    <div className="App">
      <Card pokemons={pokemons} />
    </div>
  );
}

export default App;
