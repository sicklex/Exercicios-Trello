import { Nav } from "./styles";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cart";
import { useContext } from "react";

function NavBar() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <Nav>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        House do Código
      </div>
      <div
        onClick={() => {
          navigate("/cart");
        }}
      >
        {cart.length} Produtos
      </div>
    </Nav>
  );
}

export default NavBar;
