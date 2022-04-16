import React from "react";
import { Container } from "./styled";

function CheckBox({ label, ...rest }) {
  return (
    <Container>
      <input type="checkbox" />
      <span>{label}</span>
    </Container>
  );
}

export default CheckBox;
