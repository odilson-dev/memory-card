import "./App.css";

import PokemonImage from "./components/PokemonImage";

const App = () => {
  return (
    <div>
      <h1>Pokémon Sprite</h1>
      <PokemonImage pokemonName="pikachu" />
    </div>
  );
};

export default App;
