import "./App.css";
import React, { useEffect, useState } from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";

/* const estado_inicial = {
  name: "",
  birth_year: "",
  gender: "",
  mass: "",
  height: "",
  eye_color: "",
  hair_color: "",
}; */

function App() {
  const [characterInfo, setCharacterInfo] = useState(1);

  async function handleApi(characterId) {
    const response = await fetch(
      `https://swapi.dev/api/people/${characterId}/`
    );
    const data = await response.json();
    setCharacterInfo(data);
  }

  useEffect(() => {
    handleApi(characterInfo);
  }, []);

  useEffect(() => {
    setCharacterInfo(characterInfo);
  }, [characterInfo]);

  return (
    <div>
      <Header />
      <SeletorPersonagem
        onChange={e => {
          handleApi(e.target.value);
        }}
      />
      <Personagem dados={characterInfo} />
    </div>
  );
}

export default App;
