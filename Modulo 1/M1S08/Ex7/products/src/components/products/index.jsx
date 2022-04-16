import React from "react";
import { IntlProvider, FormattedNumber } from "react-intl";

function Products({
  productImage,
  productName,
  productPrice,
  productDescription,
}) {
  return (
    <main className="main-container">
      <div className="product-container">
        <div className="productName">
          <h2>{productName}</h2>
        </div>
        <div className="productImage">
          <img src={productImage} alt={productName} />
        </div>
        <div className="productDescription">
          <p>{productDescription}</p>
        </div>
        <div className="productPrice">
          <IntlProvider>
            <span>
              <FormattedNumber
                value={productPrice}
                style="currency"
                currency="BRL"
              />
            </span>
          </IntlProvider>
        </div>
      </div>
    </main>
  );
}

export default Products;
