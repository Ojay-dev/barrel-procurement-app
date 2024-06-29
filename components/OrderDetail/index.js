import { useEffect, useState } from "react";
import { OrderDetailContainer, Spinner } from "./OrderDetail.style";
import { useRouter } from "next/router";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

function OrderDetail() {
  const router = useRouter();
  const orderId = router?.query?.id; // Get orderId from URL query parameter

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (orderId) {
      fetchOrder();
    }
  }, [orderId]);

  const fetchOrder = async () => {
    try {
      const response = await axios.get(`/api/orders/${orderId}`);
      setOrder(response.data);
    } catch (error) {
      console.log("error.message: ", error.message);
      setError(error.message || "An error occurred while fetching order details");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");

    if (confirmDelete) {
      try {
        await axios.delete(`/api/orders/${orderId}`);
        console.log(`Order ${orderId} deleted successfully.`);
        router.back();
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    }
  };

  return (
    <OrderDetailContainer>
      <h2>Order Summary</h2>

      {loading ? (
        <Spinner>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#2e2659"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </Spinner>
      ) : (
        <>
          <div className="detail-group">
            <div className="detail-group__value">Order ID #{order?.id}</div>
            <div className="detail-group__label">Date created: 18/08/2024</div>
          </div>

          <hr className="detail-group-hr" />

          <div className="detail-group">
            <div className="detail-group__label">Customer Name</div>
            <div className="detail-group__value">{order?.customerName}</div>
          </div>

          <div className="detail-group">
            <div className="detail-group__label">Phone number</div>
            <div className="detail-group__value">(+234) 809 234 4569</div>
          </div>

          <div className="detail-group">
            <div className="detail-group__label">Address</div>
            <div className="detail-group__value">{order?.customerAddress}</div>
          </div>

          <hr className="detail-group-hr" />

          <div className="detail-group-summary">
            <div className="detail-group">
              <div className="detail-group__label">Item</div>
              <div className="detail-group__value">{order?.item}</div>
            </div>

            <div className="detail-group__value">{order?.itemCost}</div>
          </div>

          <div className="detail-group-summary">
            <div className="detail-group">
              <div className="detail-group__label">Total</div>
              <div className="detail-group__value">{order?.quantity} Item(s)</div>
            </div>

            <div className="detail-group__value">N{order?.itemCost * order?.quantity}</div>
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
            <button type="submit" className="cta__delete-btn" onClick={() => handleDeleteOrder(order?.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </OrderDetailContainer>
  );
}

export default OrderDetail;
