import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  width: 100%;
  max-width: 60%;
  margin: 0 auto;
`;

export const CartTable = styled.table`
  width: 100%;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 0 auto;

  tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }

  th {
    text-align: left;
    padding: 10px;
    font-size: 20px;
    color: #333;
  }

  td {
    text-align: right;
    padding: 10px;
    font-size: 20px;
  }

  img {
    width: 100px;
  }

  tbody {
    width: 50%;
  }
`;

export const TotalCost = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  div {
    margin-left: 350px;
    button {
      padding: 10px;
    }
  }
`;

export const TotalPrice = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  text-align: left;
`;
