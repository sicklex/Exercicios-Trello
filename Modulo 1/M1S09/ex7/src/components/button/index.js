import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function Button({ number }) {
  const [count, setCount] = useState(number);

  useEffect(() => {
    if (count < 0) {
      alert("O número não pode ser negativo");
      setCount(0);
    }

    if (count === 20) {
      alert("Número máximo atingido! Resetando…");
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Soma</button>
      <span>número atual é: {count}</span>
      <button onClick={() => setCount(count - 1)}>Diminui</button>
    </div>
  );
}

export default Button;
