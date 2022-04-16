import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";

import { Container, NavBar } from "./styles";

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
      <NavBar>
        <div>House do Código</div>
        <div> 9 produtos</div>
      </NavBar>
      <Container>
        {image.map(element => (
          <Cards
            image={element.image}
            title={element.title}
            price={element.price}
          />
        ))}
      </Container>
    </>
  );
}

export default Home;
