import styled from "styled-components";

export const StyledButton = styled.button`
  margin-top: 10px;
  padding: 5px 20px;
  border: 0;
  border-radius: 4px;
  background: blue;
  color: #fff;

  &:hover {
    cursor: pointer;
    background: #00a8ff;
    transition: 0.3s;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }
`;
