import styled from "styled-components";

export const OrderDetailContainer = styled.form`
  background-color: #fff;
  max-width: 626px;
  margin: 3.5rem auto;
  margin-bottom: 4rem;

  padding: 1rem 2.5rem 3rem;
  border-radius: 1rem;

  h2 {
    font-size: 18px;
    font-weight: 500;
    color: #aca8c4;
    margin-bottom: 3rem;
  }

  .detail-group {
    display: grid;
    row-gap: 8px;
    margin-bottom: 28px;

    &__value {
      font-size: 20px;
      font-weight: 500;
    }

    &__label {
      font-size: 14px;
      font-weight: 500;
      color: #7d7c7c;
    }
  }

  .detail-group-summary {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 28px;

    > .detail-group {
      margin-bottom: 0;
    }
  }

  .detail-group-hr {
    border: none;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 28px;
  }

  .cta {
    display: flex;
    justify-content: center;
    column-gap: 4rem;
    margin-top: 4rem;

    &__cancel-btn {
      background-color: #fff;
      color: #2e2659;
      font-size: 16px;
      font-weight: 500;
      padding: 0.75rem 3rem;
      border: 2px solid #2e2659;
      border-radius: 0.75rem;
      margin-right: 1rem;
      cursor: pointer;
    }

    &__delete-btn {
      background-color: #e30f0f;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      padding: 0.75rem 3rem;
      border: 2px solid #e30f0f;
      border-radius: 0.75rem;
      cursor: pointer;
    }
  }
`;
