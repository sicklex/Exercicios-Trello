import React from "react";
import { Container, Label } from "./styled";

function Select({ label, ...rest }) {
  return (
    <Container>
      <div>
        <Label>{label}</Label>
        <select {...rest}>
          <option value="">Selecione</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </Container>
  );
}

export default Select;
