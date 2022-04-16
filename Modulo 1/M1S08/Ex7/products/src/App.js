import "./App.css";
import Products from "./components/products";

function App() {
  return (
    <div className="container">
      <Products
        productName="Bomba Antiqueda"
        productPrice={100}
        productImage="https://www.salonline.com.br/ccstore/v1/images/?source=/file/v8711895929868452830/products/43232.1.jpg"
        productDescription="Kit Completo SOS Bomba Antiqueda 4 produtos Salon Line"
      />
      <Products
        productName="Produtos Limpeza"
        productPrice={100}
        productImage="https://a-static.mlcdn.com.br/1500x1500/produtos-limpeza-c-15-itens-alimentos-mr/alimentosmr/6325050892/0b2b4cf842c1b3f481a777af7b49862a.jpg"
        productDescription="Produtos Limpeza c/ 15 Itens - Alimentos MR"
      />
      <Products
        productName="Smart Watch"
        productPrice={419900}
        productImage="https://m.media-amazon.com/images/I/51JyRts2p4L._AC_SL1000_.jpg"
        productDescription="Apple Watch Series 7 GPS"
      />
    </div>
  );
}

export default App;
