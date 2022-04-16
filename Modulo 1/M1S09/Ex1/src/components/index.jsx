import { useState } from "react";

function Component({ nome, cidade, idade, filmePreferido }) {
  const [atualizarNome, setAtualizarNome] = useState(nome);

  return (
    <div>
      <h2>
        Hello my name is {atualizarNome}, {idade} years old. I live in {cidade},
        and my favorite movie is {filmePreferido}
      </h2>
      <button
        onClick={() => {
          setAtualizarNome(prompt("Qual o seu nome?"));
        }}
      >
        atualiza nome
      </button>
    </div>
  );
}

export default Component;
