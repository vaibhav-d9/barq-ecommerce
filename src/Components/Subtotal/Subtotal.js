import React from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.scss";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 items): <strong>0</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
