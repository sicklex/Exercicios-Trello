import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cart";
import Button from "../Button/Button";

import { CardContainer, CardInfos, ImageContainer } from "./styles";

function Cards({ image, title, price, id }) {
  const navigate = useNavigate();
  const [data, setData] = React.useState({});
  const { handleAddCart } = useContext(CartContext);

  useEffect(() => {
    async function handleGetData() {
      await axios.get(`http://localhost:3333/books/${id}`).then(response => {
        setData(response.data);
      });
    }
    handleGetData();
  }, []);

  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} alt={title}></img>
      </ImageContainer>
      <CardInfos>
        <p>{title}</p>
        <span>R$ {price}</span>
        <Button
          text="Comprar"
          id={id}
          onClick={() => {
            handleAddCart(data);
          }}
        />
        <Button text="Detalhes" onClick={() => navigate(`/details/${id}`)} />
      </CardInfos>
    </CardContainer>
  );
}

export default Cards;
