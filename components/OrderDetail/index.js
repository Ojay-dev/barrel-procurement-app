import { useEffect } from "react";
import { OrderDetailContainer } from "./OrderDetail.style";
import { useRouter } from "next/router";

function OrderDetail() {
  const router = useRouter();

  useEffect(() => {
    console.log("router: ", router);
  }, [router]);

  return (
    <OrderDetailContainer>
      <h2>Order Summary</h2>

      <div className="detail-group">
        <div className="detail-group__value">Order ID #{router?.query?.id}</div>
        <div className="detail-group__label">Date created: 18/08/2024</div>
      </div>

      <hr className="detail-group-hr" />

      <div className="detail-group">
        <div className="detail-group__label">Customer Name</div>
        <div className="detail-group__value">John Doe</div>
      </div>

      <div className="detail-group">
        <div className="detail-group__label">Phone number</div>
        <div className="detail-group__value">(+234) 809 205 4532</div>
      </div>

      <div className="detail-group">
        <div className="detail-group__label">Address</div>
        <div className="detail-group__value">124, Oyediran Estate, Lagos, Nigeria, 5432</div>
      </div>

      <hr className="detail-group-hr" />

      <div className="detail-group-summary">
        <div className="detail-group">
          <div className="detail-group__label">Item</div>
          <div className="detail-group__value">Samsung S20</div>
        </div>

        <div className="detail-group__value">N1,200.00</div>
      </div>

      <div className="detail-group-summary">
        <div className="detail-group">
          <div className="detail-group__label">Total</div>
          <div className="detail-group__value">5 Item(s)</div>
        </div>

        <div className="detail-group__value">N6,000.00</div>
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
        <button type="submit" className="cta__delete-btn">
          Delete
        </button>
      </div>
    </OrderDetailContainer>
  );
}

export default OrderDetail;
