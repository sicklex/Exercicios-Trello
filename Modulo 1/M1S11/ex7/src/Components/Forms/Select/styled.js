import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  div {
    display: flex;
    flex-direction: column;
    margin: 20px 10px;
  }

  select {
    border-radius: 4px;
    padding: 10px;
    font-size: 14px;
    color: #666;
    width: 22%;
    margin-top: 10px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;
