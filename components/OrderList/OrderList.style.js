import styled from "styled-components";

export const OrderListContainer = styled.div`
  background-color: #fff;
  border-radius: 1rem;

  padding: 1rem 2rem;
  border: 1px solid #d9d9d9;
  overflow-x: auto;
  min-height: 30vh;

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: #2e2659;
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
    // border-bottom: 1px solid #d9d9d9;

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
`;

export const StatusTag = styled.span`
  padding: 4px 10px;
  background-color: #f5f5f5;
  color: #2e2659;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const HamburgerMenu = styled.div`
  position: absolute;
  top: 38px;
  left: -73px;
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

    li {
      padding: 8px 12px;
      cursor: pointer;
      width: 100%;
      text-align: left;

      &:hover {
        background: #f0f0f0;
      }
    }
  }
`;
