import PokemonImage from "./PokemonImage";

function Card({ pokemonName, onClick }) {
  return (
    <div className="card" onClick={onClick} id={pokemonName}>
      <PokemonImage pokemonName={pokemonName} />
      <p name={pokemonName}>{pokemonName}</p>
    </div>
  );
}

export default Card;
