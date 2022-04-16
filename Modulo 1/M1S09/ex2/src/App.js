import "./App.css";
import Perfil from "./components/Changemovie";

function App() {
  return (
    <Perfil
      nome="Claydson"
      cidade="Niteroi"
      idade={28}
      filmePreferido="Matrix"
    />
  );
}

export default App;
