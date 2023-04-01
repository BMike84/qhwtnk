import React, { useRef, useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({ price }) => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const details = await actions.order.capture();
        const name = details.payer.name.given_name;
        alert("Transaction completed by " + name);
      }}
    />
  );
};

export default PaypalButton;
