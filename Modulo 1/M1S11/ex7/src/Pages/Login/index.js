import React from "react";
import CheckBox from "../../Components/Forms/CheckBox";
import Input from "../../Components/Forms/Input";
import {
  BoxContainer,
  ButtonContainer,
  Container,
  LoginContainer,
  LoginInfos,
  StyledLogin,
} from "./styled";

function Login() {
  return (
    <Container>
      <LoginContainer>
        <div>
          <h2>SIGN IN TO YOUR ACCOUNT</h2>
        </div>
        <LoginInfos>
          <Input type="email" />
          <Input type="password" />
        </LoginInfos>
        <BoxContainer>
          <CheckBox label="Keep me signed in" />
        </BoxContainer>
        <ButtonContainer>
          <button>
            <span>SIGN IN</span>
          </button>
          <p>Forgot your password?</p>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
}

export default Login;
