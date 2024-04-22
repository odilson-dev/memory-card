import Card from "./Card";
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

  // Render the gallery of Pokémon sprites
  return (
    <div className="pokemonGallery">
      {pokemonNames.map((pokemonName) => (
        <Card key={pokemonName} pokemonName={pokemonName} />
      ))}
    </div>
  );
}

export default PokemonGallery;
