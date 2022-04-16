import React from "react";
import Button from "../Button/Button";

import { CardContainer, CardInfos, ImageContainer } from "./styles";

function Cards({ image, title, price, id }) {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt={title}></img>
      </ImageContainer>
      <CardInfos>
        <p>{title}</p>
        <span>R$ {price}</span>
        <Button text="Comprar" id={id} />
        <Button text="Detalhes" id={id} />
      </CardInfos>
    </CardContainer>
  );
}

export default Cards;
