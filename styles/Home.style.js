import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 4.5rem auto 0;
`;

export const CreateOrderBtn = styled.button`
  display: block;

  background-color: #2e2659;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: 2rem;
`;

export const OverviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

export const OverviewCard = styled.div`
  display: flex;

  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  height: 185px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: flex-start;
  }

  .overview-text-area {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 0.75rem;
  }

  h2 {
    font-size: 14px;
    font-weight: 500;
    color: #7d7c7c;
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    color: #2e2659;
  }
`;

export const OverviewTrendTag = styled.span`
  background-color: #e7f5ec;
  color: #066b26;
  border-radius: 10px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  witdh: fit-content;
`;
