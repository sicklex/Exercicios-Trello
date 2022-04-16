import axios from "axios";
import navigate from "navigate";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cards from "../../Components/Cards/Cards";
import NavBar from "../../Components/NavBar/NavBar";

import { Container } from "./styles";

function Home() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function handleGetData() {
      await axios.get("http://localhost:3333/books").then(response => {
        response.data.forEach(element => {
          setImage(image => [...image, element]);
        });
      });
    }

    handleGetData();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        {image.map(element => (
          <>
            <Cards
              image={element.image}
              title={element.title}
              price={element.price}
              id={element.id}
              key={element.id}
            />
          </>
        ))}
      </Container>
    </>
  );
}

export default Home;
