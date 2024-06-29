import React, { useEffect, useRef, useState } from "react";
import { HamburgerMenu, OrderListContainer, OrderListTable, StatusTag } from "./OrderList.style";
import { Hamburger } from "@/assets/svg";
import Image from "next/image";
import { useRouter } from "next/router";

const OrderList = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const menuRef = useRef(null);
  const router = useRouter();

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

  return (
    <OrderListContainer>
      <h3>Order List</h3>

      <OrderListTable>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Quantity</th>
            <th>Payment Status</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#1</td>
            <td>#Ajayi Crowder</td>
            <td>Coke</td>
            <td>4</td>
            <td>
              <StatusTag>Pending</StatusTag>
            </td>
            <td>
              <button onClick={() => toggleMenu(1)}>
                <Image src={Hamburger} alt="menu icon" />
              </button>
              {menuVisible && activeOrder === 1 && (
                <HamburgerMenu ref={menuRef}>
                  <ul>
                    <li
                      onClick={() => {
                        router.push(`/order/${activeOrder}`);
                      }}
                    >
                      View Details
                    </li>
                    <li>Edit Order</li>
                    <li>Cancel Order</li>
                  </ul>
                </HamburgerMenu>
              )}
            </td>
          </tr>
        </tbody>
      </OrderListTable>
    </OrderListContainer>
  );
};

export default OrderList;
