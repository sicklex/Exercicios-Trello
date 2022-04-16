import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20%;
  border: 1px solid #fff;
  border-radius: 12px;
  margin: 0 auto;
  margin-bottom: 20px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  p {
    font-size: 20px;
  }
  span {
    font-size: 18px;
    font-weight: bold;
    color: #3f327a;
  }
`;
