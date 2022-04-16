import { StyledButton } from "./styles";

function Button({ text, id, onClick }) {
  return (
    <StyledButton id={id} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

export default Button;
