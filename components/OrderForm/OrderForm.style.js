import styled from "styled-components";

export const OrderFormContainer = styled.form`
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

  .input-row {
    margin-bottom: 1.75rem;

    &__label {
      font-size: 18px;
      font-weight: 500;
      color: #2e2659;
    }

    &__input {
      font-size: 16px;
      width: 100%;
      padding: 1rem;
      margin-top: 0.5rem;
      border: 2px solid #aba5cf;
      border-radius: 0.75rem;
    }
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
      border: 1px solid #2e2659;
      border-radius: 0.75rem;
      margin-right: 1rem;
      cursor: pointer;
    }

    &__save-btn {
      background-color: #2e2659;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      padding: 0.75rem 3rem;
      border: 2px solid #2e2659;
      border-radius: 0.75rem;
      cursor: pointer;
    }
  }
`;
