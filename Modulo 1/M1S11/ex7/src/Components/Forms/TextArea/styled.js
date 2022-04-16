import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;

  textarea {
    width: 25%;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    padding: 10px;
    font-size: 16px;
    color: #555;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
`;
