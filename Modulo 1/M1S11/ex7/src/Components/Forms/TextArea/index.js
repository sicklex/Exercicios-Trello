import React from "react";
import { Container, Label } from "./styled";

function TextArea({ label, id, ...rest }) {
  return (
    <Container>
      <Label id={id}>{label}</Label>
      <textarea {...rest} />
    </Container>
  );
}

export default TextArea;
