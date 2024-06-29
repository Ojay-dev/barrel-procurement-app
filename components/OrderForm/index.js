import React from "react";
import { OrderFormContainer } from "./OrderForm.style";
import { useRouter } from "next/router";

function OrderForm() {
  const router = useRouter();

  return (
    <OrderFormContainer>
      <h2>Create Order</h2>

      <div className="input-row">
        <label htmlFor="item" className="input-row__label">
          Item Name
        </label>
        <input type="text" id="item" className="input-row__input" />
      </div>

      <div className="input-row">
        <label htmlFor="customer" className="input-row__label">
          Customer Name
        </label>
        <input type="text" id="customer" className="input-row__input" />
      </div>

      <div className="input-row">
        <label htmlFor="address" className="input-row__label">
          Customer Address
        </label>
        <input type="text" id="address" className="input-row__input" />
      </div>

      <div className="input-row">
        <label htmlFor="quantity" className="input-row__label">
          Quantity
        </label>
        <input type="number" id="quantity" className="input-row__input" />
      </div>

      <div className="input-row">
        <label htmlFor="price" className="input-row__label">
          Price
        </label>
        <input type="number" id="price" className="input-row__input" />
      </div>

      <div className="cta">
        <button
          type="button"
          className="cta__cancel-btn"
          onClick={() => {
            router.back();
          }}
        >
          Cancel
        </button>
        <button type="submit" className="cta__save-btn">
          Save
        </button>
      </div>
    </OrderFormContainer>
  );
}

export default OrderForm;
