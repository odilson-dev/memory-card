import { useState, useEffect } from "react";

const PokemonImage = ({ pokemonName }) => {
  // State to hold the sprite URL
  const [url, setUrl] = useState(null);

  // Function to fetch Pokémon data
  const fetchPokemonData = async () => {
    // Base URL of the PokeAPI
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    // URL for the specific Pokémon
    const pokemonURL = baseURL + pokemonName;

    try {
      // Fetch data from PokeAPI
      const response = await fetch(pokemonURL);

      // Check if the response is OK
      if (response.ok) {
        // Parse the JSON data
        const data = await response.json();

        // Get the front default sprite URL
        const frontSprite = data.sprites.front_default;

        // Update the state with the sprite URL
        setUrl(frontSprite);
      } else {
        console.error(`Failed to fetch data for ${pokemonName}`);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  // Fetch Pokémon data when the component mounts or the pokemonName changes
  useEffect(() => {
    fetchPokemonData();
  });

  // Render the sprite image if available
  return (
    <div>
      {url ? (
        <img src={url} alt={`${pokemonName} sprite`} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonImage;
