import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBagTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

import "./Subtotal.scss";

function Subtotal({ noOfItems, totalPrice }) {
  const history = useHistory();
  const [{ bag }] = useStateValue();
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({noOfItems} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")} disabled={disabled}>
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default Subtotal;
