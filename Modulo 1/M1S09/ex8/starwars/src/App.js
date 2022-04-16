import "./App.css";
import React, { useEffect, useState } from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";

const estado_inicial = {
  name: "",
  birth_year: "",
  gender: "",
  mass: "",
  height: "",
  eye_color: "",
  hair_color: "",
};

function App() {
  // useState
  const [characterInfo, setCharacterInfo] = useState([estado_inicial]);

  // useEffect para alterar título

  // useEffect para alterar personagem
  useEffect(() => {
    setCharacterInfo(characterInfo);
  }, [characterInfo]);

  return (
    <div>
      <Header />
      <SeletorPersonagem
        onChange={e => {
          fetch(`https://swapi.dev/api/people/${e.target.value}/`)
            .then(response => response.json())
            .then(data => {
              setCharacterInfo(data);
            });
        }}
      />
      <Personagem
        nome={characterInfo.name}
        nascimento={characterInfo.birth_year}
        genero={characterInfo.gender}
        peso={characterInfo.mass}
        altura={characterInfo.height}
        corOlhos={characterInfo.eye_color}
        corCabelo={characterInfo.hair_color}
      />
    </div>
  );
}

export default App;
