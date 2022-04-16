import React from "react";
import { Container, Label, StyledInput } from "./styled";

function Input({ label, ...rest }) {
  return (
    <Container>
      <div>
        <Label>{label}</Label>
        <StyledInput {...rest} />
      </div>
    </Container>
  );
}

export default Input;
