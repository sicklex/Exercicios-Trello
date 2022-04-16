import "./App.css";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import { CartProvider } from "./Context/Cart";
import Payment from "./Pages/Payment";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
