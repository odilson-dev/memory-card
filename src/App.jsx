import "./App.css";
import PokemonGallery from "./components/PokemonGallery";
const App = () => {
  return (
    <div>
      <h1>
        Memory Card{" "}
        <a
          href="https://github.com/odilson-dev/memory-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
      </h1>
      <PokemonGallery />
    </div>
  );
};

export default App;
