import styled, { css } from "styled-components";

export const LayoutContainer = styled.div``;

export const SidebarContainer = styled.nav`
  display: none;
  position: fixed;
  height: 100vh;
  width: 295px;
  background-color: #2e2659;
  padding: 80px 20px;

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
`;

export const SidebarNavlinkContainer = styled.ul`
  list-style-type: none;
`;

export const SidebarNavlink = styled.li`
  a {
    display: flex;
    align-items: center;
    column-gap: 12px;
    font-size: 16px;
    font-weight: 500;
    padding: 16px 18px;
    color: #fff;
    text-decoration: none;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 24px;
    transition: background-color 0.3s ease;
    ${({ $active }) => $active && "background-color: #504973;"}

    &:hover {
      background-color: #504973;
    }
  }
`;

export const MainContainer = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  padding-bottom: 2rem;
  padding-inline: 20px;
  @media screen and (min-width: 1024px) {
    padding-inline: 0;
    margin-left: 295px;
    width: calc(100% - 295px);
  }
`;

export const TopBarContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;

  > div {
    padding-block: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #2e2659;
  }

  .user-section {
    display: flex;
    align-items: center;
    column-gap: 2rem;

    &__notification {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  .user-profile {
    display: flex;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;

    &__avatar {
      border-radius: 50%;
    }
  }
`;
