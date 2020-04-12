import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/logo.png';
import menu from 'assets/icon-menu.svg';

import * as S from './styles';

function AuthNav() {
  const [isMobileNavActive, toggleMobileNav] = useState(false);

  const toggleNav = () => toggleMobileNav(!isMobileNavActive);
  return (
    <S.Wrapper>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <S.NavButton onClick={toggleNav}>
          <img src={menu} alt="" />
        </S.NavButton>
      </nav>
    </S.Wrapper>
  );
}

export default AuthNav;
