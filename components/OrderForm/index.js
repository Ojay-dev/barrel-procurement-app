import { useState } from "react";
import { OrderFormContainer } from "./OrderForm.style";
import { useRouter } from "next/router";
import axios from "axios";

function OrderForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    item: "",
    customerName: "",
    customerAddress: "",
    quantity: 1,
    itemCost: 0,
    paymentStatus: "unpaid",
    status: "pending",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/orders", formData);
      window.alert("Order created successfully");
      router.push("/"); // Redirect to the orders list or another relevant page
    } catch (err) {
      setError(err.message || "An error occurred while creating the order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderFormContainer onSubmit={handleSubmit}>
      <h2>Create Order</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="input-row">
        <label htmlFor="item" className="input-row__label">
          Item Name
        </label>
        <input type="text" id="item" className="input-row__input" value={formData.item} onChange={handleChange} required />
      </div>

      <div className="input-row">
        <label htmlFor="customerName" className="input-row__label">
          Customer Name
        </label>
        <input type="text" id="customerName" className="input-row__input" value={formData.customerName} onChange={handleChange} required />
      </div>

      <div className="input-row">
        <label htmlFor="customerAddress" className="input-row__label">
          Customer Address
        </label>
        <input
          type="text"
          id="customerAddress"
          className="input-row__input"
          value={formData.customerAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-row">
        <label htmlFor="quantity" className="input-row__label">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="input-row__input"
          value={formData.quantity}
          onChange={handleChange}
          required
          min="1"
        />
      </div>

      <div className="input-row">
        <label htmlFor="itemCost" className="input-row__label">
          Price
        </label>
        <input
          type="number"
          id="itemCost"
          className="input-row__input"
          value={formData.itemCost}
          onChange={handleChange}
          required
          min="0"
        />
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
        <button type="submit" className="cta__save-btn" disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </OrderFormContainer>
  );
}

export default OrderForm;
