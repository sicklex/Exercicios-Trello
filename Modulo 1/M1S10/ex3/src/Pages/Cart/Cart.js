import Button from "../../Components/Button/Button";
import NavBar from "../../Components/NavBar/NavBar";
import { CartContainer, CartTable, TotalCost, TotalPrice } from "./style";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart";
import { Children } from "react/cjs/react.production.min";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, handleRemoveBook } = useContext(CartContext);

  const navigate = useNavigate();

  function handleTotalCost() {
    let price = cart.map(item => item.price).reduce((a, b) => a + b, 0);
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  return (
    <div>
      <NavBar />
      <TotalCost>
        <div>
          <Button
            onClick={() => navigate("/payment")}
            text="Finalizar compra"
          />
        </div>
        <TotalPrice>Total:{handleTotalCost()}</TotalPrice>
      </TotalCost>
      <CartContainer>
        <CartTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Produto</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              cart.map(item => (
                <tr>
                  <td>
                    <img src={item.image}></img>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <Button
                      text={`Remover`}
                      id={item.id}
                      onClick={() => {
                        handleRemoveBook(item.id);
                      }}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </CartTable>
      </CartContainer>
    </div>
  );
}

export default Cart;
