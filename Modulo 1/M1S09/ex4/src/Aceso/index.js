import React, { useState } from "react";

function Aceso() {
  const [aceso, setAceso] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: aceso ? "#ffee00" : "#000",
      }}
    >
      <button onClick={() => setAceso(ligado => !ligado)}>
        {aceso ? "apagar" : "acender"}
      </button>
    </div>
  );
}

export default Aceso;
