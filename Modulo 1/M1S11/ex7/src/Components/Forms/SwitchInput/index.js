import React from "react";
import Switch from "react-switch";
import { Container, Label } from "./styled";

function SwitchInput({ label }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => setChecked(previousState => !previousState);

  return (
    <Container>
      <Label>{label}</Label>
      <Switch
        onChange={handleChange}
        checked={checked}
        onColor="#86d3ff"
      ></Switch>
    </Container>
  );
}

export default SwitchInput;
