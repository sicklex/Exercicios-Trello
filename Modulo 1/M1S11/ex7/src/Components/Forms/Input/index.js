import React from "react";
import { Container, Label, StyledInput } from "./styled";

function Input({ label, ...rest }) {
  return (
    <Container>
      <Label>{label}</Label>
      <input {...rest} />
    </Container>
  );
}

export default Input;
