import styled, { css } from "styled-components";

export const OrderListContainer = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  position: relative;

  padding: 1rem 2rem 6rem;
  border: 1px solid #d9d9d9;
  overflow-x: auto;
  min-height: 50vh;

  h3 {
    font-size: 18px;
    font-weight: 500;
    color: #aca8c4;
    margin-bottom: 3rem;
  }
`;

export const OrderListTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 1024px;
  }

  thead tr:first-child {
    background-color: #fafafc;
    text-align: center;
  }

  tr {
    text-align: center;
  }

  th {
    font-size: 0.75rem;
    font-weight: 500;
    color: #2e2659;
    padding: 1rem;
    border: none;
  }

  td {
    padding: 1.5rem;
    border-bottom: 1px solid #d9d9d9;

    &:last-child {
      position: relative;
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const StatusTag = styled.span`
  padding: 4px 10px;
  background-color: #f5f5f5;
  color: #2e2659;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;

  ${({ $status }) => {
    switch ($status) {
      case "unpaid":
        return css`
          background-color: #f6dfdf;
          color: #ed3636;
        `;

      case "shipped":
      case "paid":
        return css`
          background-color: #e7f5ec;
          color: #066b26;
        `;

      default:
        break;
    }
  }}
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  top: 38px;
  left: -60px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
  z-index: 1000;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100px;

    li {
      padding: 8px 12px;
      cursor: pointer;
      width: 100%;
      text-align: left;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background: #f0f0f0;
      }

      &:last-child:hover {
        background: #e60424de;
        color: white;
      }
    }
  }
`;

export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
