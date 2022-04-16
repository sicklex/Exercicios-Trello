import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #6a62ce;
  display: flex;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
`;

export const LoginInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  input {
    margin-bottom: 10px;
    width: 70%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #e5e8ed;
    padding: 0 10px;
    font-size: 14px;
  }
`;

export const BoxContainer = styled.div`
  width: 75%;
  margin-top: 20px;
  input {
    margin-top: 5px;
  }
  span {
    margin-left: 5px;
    color: #a9acb4;
    font-size: 15px;
  }
`;

export const ButtonContainer = styled.div`
  width: 75%;
  button {
    background-color: #746bda;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 20px 10px;
    width: 100%;
    font-size: 14px;
    margin-top: 40px;
    cursor: pointer;
  }
  p {
    margin-top: 50px;
    font-size: 14px;
    color: #a9acb4;
    text-align: center;
  }
`;
