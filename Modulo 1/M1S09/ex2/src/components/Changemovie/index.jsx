import { useState } from "react";

function Perfil({ nome, cidade, idade, filmePreferido }) {
  const [atualizaFilme, setFilme] = useState(filmePreferido);

  return (
    <div>
      <h2>
        Hello my name is {nome}, {idade} years old. I live in {cidade}, and my
        favorite movie is {atualizaFilme}
      </h2>
      <button
        onClick={() => {
          setFilme(prompt("Qual o filme preferido ?"));
        }}
      >
        atualiza filmes
      </button>
    </div>
  );
}

export default Perfil;
