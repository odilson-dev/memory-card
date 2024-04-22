import PokemonImage from "./PokemonImage";

function Card({ pokemonName }) {
  return (
    <div className="card">
      <PokemonImage pokemonName={pokemonName} />
      <p>{pokemonName}</p>
    </div>
  );
}

export default Card;
