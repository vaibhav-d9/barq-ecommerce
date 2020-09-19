import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBagTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

import "./Subtotal.scss";

function Subtotal() {
  const [{ bag }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({bag?.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBagTotal(bag)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
