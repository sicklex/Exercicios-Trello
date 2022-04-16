import React, { useEffect, useState } from "react";

// import { Container } from './styles';

function Button({ number }) {
  const [count, setCount] = useState(number);

  //não entendi direito se era pra fazer uma função mesmo ou poderia ser anonima direto no onclick, entao fiz os 2 xD

  /*   function soma() {
    setCount(count + 1);
  }

  function diminui() {
    setCount(count - 1);
  } */

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Soma</button>
      <span>número atual é: {count}</span>
      <button onClick={() => setCount(count - 1)}>Diminui</button>
    </div>
  );
}

export default Button;
