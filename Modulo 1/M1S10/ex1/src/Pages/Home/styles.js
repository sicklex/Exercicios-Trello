import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;
  background-color: blue;
  color: #fff;
  margin-bottom: 20px;

  div {
    font-size: 18px;
    font-weight: bold;
  }
`;
