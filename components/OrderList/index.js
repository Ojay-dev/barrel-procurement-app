import React, { useEffect, useRef, useState } from "react";
import { HamburgerMenu, OrderListContainer, OrderListTable, Spinner, StatusTag } from "./OrderList.style";
import { handleDeleteOrder } from "@/utils/func";
import { Hamburger } from "@/assets/svg";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

const OrderList = () => {
  const router = useRouter();
  const menuRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleMenu = (orderId) => {
    setActiveOrder(orderId);
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    if (menuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuVisible]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders");
      setOrders(response.data);
    } catch (error) {
      setError(error.message || "An error occurred while fetching orders");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderListContainer>
      <h3>Order List</h3>

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
          <OrderListTable>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>item</th>
                <th>Quantity</th>
                <th>Payment Status</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>{order.item}</td>
                  <td>{order.quantity}</td>
                  <td>
                    <StatusTag>{order.paymentStatus}</StatusTag>
                  </td>
                  <td>
                    <StatusTag>{order.status}</StatusTag>
                  </td>
                  <td>
                    <button onClick={() => toggleMenu(order.id)}>
                      <Image src={Hamburger} alt="menu icon" />
                    </button>
                    {menuVisible && activeOrder === order.id && (
                      <HamburgerMenu ref={menuRef}>
                        <ul>
                          <li
                            onClick={() => {
                              router.push(`/order/${activeOrder}`);
                            }}
                          >
                            View
                          </li>

                          <li
                            onClick={() => {
                              router.push(`/order/edit/${activeOrder}`);
                            }}
                          >
                            Edit
                          </li>

                          <li onClick={() => handleDeleteOrder(activeOrder)}>Delete</li>
                        </ul>
                      </HamburgerMenu>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </OrderListTable>
        </>
      )}
    </OrderListContainer>
  );
};

export default OrderList;
