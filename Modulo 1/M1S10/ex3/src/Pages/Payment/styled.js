import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin: 20px;
`;

export const Container = styled.div`
  width: 55%;
  height: 100vh;
  background-color: hsl(214, 100%, 90%);
  border-radius: 10px 0px 0px 10px;
`;

export const PaymentContainer = styled.div`
  width: 70%;
  height: 80%;
  position: absolute;
  top: 10%;
  left: 15%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: rgba(184, 215, 255) 0px 22px 70px 4px;
`;

export const StyledForm = styled.form`
  display: flex;
  height: 100%;
`;

export const PaymentMethodContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  height: 10%;
  border-bottom: 1px solid #ccc;
  h2 {
    font-size: 1.5rem;
    margin: 10px;
  }
`;

export const PaymentInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(227, 238, 255);
  width: 60%;
  height: 70%;
  padding: 50px;
  margin-top: 50px;
  background-color: #fff;
  box-shadow: rgb(184 215 255) 0px 2px 7px 2px;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 20px;

    li {
      box-shadow: 0px 0px 10px rgba(228, 238, 254);
      width: 40px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fefeff;
      border-radius: 5px;
      border: 2px solid transparent;
      .icons {
        font-size: 1.5rem;
      }

      &:hover {
        cursor: pointer;
        background-color: rgb(229, 238, 254);
        border: 2px solid rgb(204, 228, 255);
      }
    }
  }
  label {
    font-size: 1.2rem;

    font-weight: bold;
  }
`;

export const CardHolderContainer = styled.div`
  width: 100%;
  margin-top: 40px;
  input {
    width: 90%;
    height: 25px;
    border: 2px solid rgb(227, 238, 255);
    border-radius: 5px;
    padding: 5px;
    margin-top: 10px;

    &:focus {
      outline: none;
    }
  }
`;

export const CardNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  input {
    height: 25px;
    border: 2px solid rgb(227, 238, 255);
    border-radius: 5px;
    padding: 5px;
    width: 50%;
    margin-right: 10px;
    display: flex;
    margin-top: 10px;
    &:focus {
      outline: none;
    }
  }

  input.firstChild {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 100px;
  font-size: 1.2rem;
`;

export const OrderSumary = styled.div`
  width: 30%;
  height: 100%;
  margin-top: 50px;
`;

export const OrderSummaryContainer = styled.div`
  width: 80%;
  height: 70%;
  padding: 50px;
  margin-top: 30px;
`;

export const OrderSummaryTitle = styled.div`
  width: 100%;
  height: 10%;
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

export const BalanceAmount = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  height: 10%;
  p {
    font-size: 1.2rem;
  }
  span {
    font-size: 1.3rem;
  }
`;

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10%;
  margin-top: 50px;
  p {
    font-size: 1.2rem;
  }
  span {
    font-size: 1.3rem;
  }
`;

export const BtnContainer = styled.div`
  margin-top: 150px;
  button {
    width: 100%;
    height: 50px;
    background-color: #0089ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
