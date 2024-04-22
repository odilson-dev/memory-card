import PokemonImage from "./PokemonImage";

function Card({ pokemonName, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <PokemonImage pokemonName={pokemonName} />
      <p>{pokemonName}</p>
    </div>
  );
}

export default Card;
