import { useState } from "react";
import Card from "./Card";
const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const alreadyChoosedNames = [];
function PokemonGallery() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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
  const handleClick = (e) => {
    const cardName = e.currentTarget.id;
    if (alreadyChoosedNames.includes(cardName)) {
      setScore(0);
      alreadyChoosedNames.length = 0;
    } else {
      alreadyChoosedNames.push(cardName);
    }

    setScore((prevScore) => prevScore + 1);

    // Update high score if the new score is higher
    setHighScore((prevHighScore) => Math.max(prevHighScore, score + 1));
    const shuffledList = shuffle([...pokemonNames]);
    // Updating state with the shuffled list
    setPokemonNameList(shuffledList);
  };

  return (
    <>
      <p className="high-score">Best Score: {highScore}</p>
      <p className="score">Score: {score}</p>
      <div className="pokemonGallery">
        {pokemonNameList.map((pokemonName) => (
          <Card
            key={pokemonName}
            pokemonName={pokemonName}
            onClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default PokemonGallery;
