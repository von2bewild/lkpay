import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  > header {
    background: #023f69;
    height: 28px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > section {
      margin-right: 20px;
      display: flex;
      align-items: center;

      a {
        color: #fff;
        font-size: 10px;
        text-transform: uppercase;
        color: ${colors.gray_2};

        &.active {
          color: #fff;
        }
      }
      .divider {
        margin: 0 10px;
        height: 10px;
        width: 1px;
        background: #fff;
        display: block;
        opacity: 0.2;
      }
    }
  }
  > nav {
    width: 100%;
    height: 75px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: 0px 3px 6px #00000029;
    @media (max-width: 1200px) {
      padding: 0 20px;
      height: 55px;
    }

    .logo {
      width: 129px;
      display: block;
      @media (max-width: 1200px) {
        width: 90px;
      }
    }
  }
`;

export const MainNav = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }
  a {
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    font-size: 14px;
    color: ${colors.dark_1};

    &:hover {
      color: ${colors.sky_blue};
    }
  }
  a.selected {
    font-weight: 700;
    color: ${colors.sky_blue};
  }
`;

export const SideNav = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    display: none;
  }

  a {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 10px;
    color: ${colors.dark_1};
    font-weight: 700;
  }
  .btn {
    border: 1px solid ${colors.navy_blue};
    font-size: 12px;
    text-transform: uppercase;
    padding: 8px 25px;
    margin: 0 5px;
    border-radius: 4px;
    font-weight: 700;

    &:hover {
      background: ${colors.navy_blue};
      color: #fff;
    }
  }
`;

export const NavButton = styled.button`
  background: transparent;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const MobileNav = styled.div`
  width: 100%;
  padding: 70px 15px 15px;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  background: #fff;
  z-index: -1;
  text-align: center;
  border: 1px solid ${colors.gray_4};
  transition: 0.3s all ease-in-out;
  opacity: 0;
  visibility: hidden;

  &.active {
    top: 0;
    opacity: 1;
    visibility: visible;
  }
  a {
    display: block;
    color: ${colors.dark_1};
    font-size: 16px;
    margin-bottom: 5px;
  }
  a.selected {
    font-weight: 700;
    color: ${colors.sky_blue};
  }
  footer {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
  .btn {
    border: 1px solid ${colors.navy_blue};
    font-size: 12px;
    text-transform: uppercase;
    padding: 8px 25px;
    margin: 0 5px;
    border-radius: 4px;
    font-weight: 700;
    flex: 0 0 48%;

    &:hover {
      background: ${colors.navy_blue};
      color: #fff;
    }
  }
`;
