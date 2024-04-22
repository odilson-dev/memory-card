import "./App.css";
import PokemonGallery from "./components/PokemonGallery";
const App = () => {
  return (
    <div>
      <h1>Pokemon Gallery</h1>
      <PokemonGallery startId={1} endId={20} />
    </div>
  );
};

export default App;
