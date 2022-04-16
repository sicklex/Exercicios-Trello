import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledButton } from "./styles";

function Button({ text, id }) {
  const navigate = useNavigate();

  let handleGetButtonId = e => {
    if (text === "Detalhes") {
      navigate(`/details/${id}`);
    }
  };

  return (
    <StyledButton id={id} onClick={handleGetButtonId}>
      {text}
    </StyledButton>
  );
}

export default Button;
