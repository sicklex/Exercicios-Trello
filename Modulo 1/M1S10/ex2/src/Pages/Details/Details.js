import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import {
  Container,
  DetailsContainer,
  DetailsImage,
  CardDetails,
  CardInfo,
} from "./styles";

// import { Container } from './styles';

function Details() {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function handleGetData() {
      await axios.get(`http://localhost:3333/books/${id}`).then(response => {
        setImage(response.data.image);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPrice(response.data.price);
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
            <img src={image} alt={title}></img>
          </DetailsImage>
          <CardDetails>
            <h2>{title}</h2>
            <span>R$ {price}</span>
            <p>{description}</p>
            <div>
              <Button text="Adicionar ao Carrinho" />
            </div>
          </CardDetails>
        </DetailsContainer>
      </CardInfo>
    </Container>
  );
}

export default Details;
