import React from "react";
import { Container, Label } from "./styled";

function CheckBox({ label, ...rest }) {
  return (
    <Container>
      <Label>
        <input type="checkbox" />
        <span>{label}</span>
      </Label>
    </Container>
  );
}

export default CheckBox;
