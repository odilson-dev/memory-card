import { useState } from "react";
import Card from "./Card";
const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
function PokemonGallery() {
  const pokemonNames = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
  ];

  const [pokemonNameList, setPokemonNameList] = useState([...pokemonNames]);
  function handleClick() {
    // Shuffling the listOfCards
    console.log("Clicked");
    const shuffledList = shuffle([...pokemonNames]);
    // Updating state with the shuffled list
    setPokemonNameList(shuffledList);
  }

  return (
    <div className="pokemonGallery">
      {pokemonNameList.map((pokemonName) => (
        <Card
          key={pokemonName}
          pokemonName={pokemonName}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

export default PokemonGallery;
