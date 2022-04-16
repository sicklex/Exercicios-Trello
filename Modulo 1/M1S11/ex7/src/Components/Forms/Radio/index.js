import React from "react";
import { Container, Label } from "./styled";

// import { Container } from './styles';

function Radio({ label, ...rest }) {
  return (
    <Container>
      <Label>
        <input {...rest} />
        {label}
      </Label>
    </Container>
  );
}

export default Radio;
