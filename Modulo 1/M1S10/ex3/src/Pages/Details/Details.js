import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import { CartContext } from "../../Context/Cart";

import {
  Container,
  DetailsContainer,
  DetailsImage,
  CardDetails,
  CardInfo,
} from "./styles";

function Details() {
  const { id } = useParams();
  const { handleAddCart } = useContext(CartContext);
  const [data, setData] = useState({});

  useEffect(() => {
    async function handleGetData() {
      await axios.get(`http://localhost:3333/books/${id}`).then(response => {
        setData(response.data);
      });
    }
    handleGetData();
  }, []);

  return (
    <Container>
      <NavBar />
      <CardInfo>
        <DetailsContainer>
          <DetailsImage>
            <img src={data.image} alt={data.title}></img>
          </DetailsImage>
          <CardDetails>
            <h2>{data.title}</h2>
            <span>R$ {data.price}</span>
            <p>{data.description}</p>
            <div>
              <Button
                text="Adicionar ao Carrinho"
                id={data.id}
                onClick={() => {
                  handleAddCart(data);
                }}
              />
            </div>
          </CardDetails>
        </DetailsContainer>
      </CardInfo>
    </Container>
  );
}

export default Details;
