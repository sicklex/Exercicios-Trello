import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #f0f0f5;
  height: 100vh;
`;

export const CardInfo = styled.div`
  margin-top: 50px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 52%;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #fff;
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  gap: 10px;
`;

export const DetailsImage = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardDetails = styled.div`
  width: 85%;

  margin-left: 30px;
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    margin-top: 20px;
    color: #666;
    word-break: break-all;
  }

  div {
    width: 40%;
    margin: 0 auto;
  }

  button {
    margin-top: 20px;
    padding: 15px;
    width: 100%;
  }
`;
