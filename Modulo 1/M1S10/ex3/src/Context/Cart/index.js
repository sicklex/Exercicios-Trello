import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddCart(product) {
    setCart([...cart, product]);
  }

  function handleRemoveBook(id) {
    const bookFiltered = cart.filter(item => {
      if (item.id === id) {
        return false; //remove do carrinho
      } else {
        return true; //continua no carrinho
      }
    });
    setCart(bookFiltered);
  }

  return (
    <CartContext.Provider value={{ handleAddCart, handleRemoveBook, cart }}>
      {children}
    </CartContext.Provider>
  );
}
