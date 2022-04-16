import React, { useContext } from "react";
import { RiVisaFill, RiMastercardFill } from "react-icons/ri";
import { FaCcDinersClub, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import { SiNubank } from "react-icons/si";
import Input from "../../Components/Form/Input";
import {
  BalanceAmount,
  BtnContainer,
  CardHolderContainer,
  CardNumbersContainer,
  Container,
  InfoContainer,
  MainContainer,
  OrderSumary,
  OrderSummaryContainer,
  OrderSummaryTitle,
  PaymentContainer,
  PaymentInfosContainer,
  PaymentMethodContainer,
  StyledForm,
  TitleContainer,
  TotalValue,
} from "./styled";
import { CartContext } from "../../Context/Cart";

function Payment() {
  const { cart, handleRemoveBook } = useContext(CartContext);

  function handleTotalCost() {
    let price = cart.map(item => item.price).reduce((a, b) => a + b, 0);
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  return (
    <MainContainer>
      <Container>
        <PaymentContainer>
          <StyledForm>
            <PaymentMethodContainer>
              <PaymentInfosContainer>
                <TitleContainer>
                  <h2>Payment Method</h2>
                </TitleContainer>
                <ul>
                  <li>
                    <RiVisaFill className="icons" />
                  </li>
                  <li>
                    <RiMastercardFill className="icons" />
                  </li>
                  <li>
                    <FaCcDinersClub className="icons" />
                  </li>
                  <li>
                    <FaCcAmex className="icons" />
                  </li>
                  <li>
                    <FaCcPaypal className="icons" />
                  </li>
                  <li>
                    <SiNubank className="icons" />
                  </li>
                </ul>
                <CardHolderContainer>
                  <Input label="CardHolder Name" />
                </CardHolderContainer>
                <CardNumbersContainer>
                  <Input label="Card Number" className="firstChild" />
                  <div>
                    <Input label="Date" />
                    <Input label="CVV" />
                  </div>
                </CardNumbersContainer>
                <InfoContainer>
                  <p>Credit Card Payments may take up to 24h to be processed</p>
                </InfoContainer>
              </PaymentInfosContainer>
            </PaymentMethodContainer>
            <OrderSumary>
              <OrderSummaryContainer>
                <OrderSummaryTitle>
                  <p>Order Summary</p>
                </OrderSummaryTitle>
                <BalanceAmount>
                  <p>Balance amount:</p>
                  <span>{handleTotalCost()} </span>
                </BalanceAmount>
                <TotalValue>
                  <p>Total:</p>
                  <span>{handleTotalCost()}</span>
                </TotalValue>
                <BtnContainer>
                  <button
                    onClick={() => {
                      alert("Compra realizada com sucesso!");
                    }}
                  >
                    Confirm Your order
                  </button>
                </BtnContainer>
              </OrderSummaryContainer>
            </OrderSumary>
          </StyledForm>
        </PaymentContainer>
      </Container>
    </MainContainer>
  );
}

export default Payment;
