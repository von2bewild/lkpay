import styled from 'styled-components';
import { colors } from 'themes/colors';

export const Wrapper = styled.div`
  width: 100%;

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

    .logo {
      width: 129px;
      display: block;
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
