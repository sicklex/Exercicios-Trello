import "./App.css";
import Pokedex from "./components/index";

function App() {
  return (
    <div className="main-container">
      <Pokedex
        className="card"
        name="Pikachu"
        id={100}
        image="https://comofazeremcasa.net/wp-content/uploads/2020/04/desenho-de-pikachu-para-pintar-2.jpg"
        types={["electric"]}
      />
      <Pokedex
        className="card"
        name="Charmander"
        id={120}
        image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
        types={["fire"]}
      />
    </div>
  );
}

export default App;
