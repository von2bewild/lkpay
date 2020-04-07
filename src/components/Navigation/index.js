import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/logo.png';
import menu from 'assets/icon-menu.svg';

import * as S from './styles';

function Navigation() {
  const [isMobileNavActive, toggleMobileNav] = useState(false);

  const toggleNav = () => toggleMobileNav(!isMobileNavActive);

  return (
    <S.Wrapper>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="" className="logo" />
        </NavLink>
        <S.MainNav>
          <NavLink to="/about" activeClassName="selected">
            About LKPay
          </NavLink>
          <NavLink to="/fees" activeClassName="selected">
            Fees
          </NavLink>
          <NavLink to="/merchant" activeClassName="selected">
            Merchant
          </NavLink>
          <NavLink to="/lkpay-card" activeClassName="selected">
            LKPay Card
          </NavLink>
          <NavLink to="/local-bankwire" activeClassName="selected">
            Local Bankwire
          </NavLink>
          <NavLink to="/affiliates" activeClassName="selected">
            Affiliates
          </NavLink>
          <NavLink to="/news" activeClassName="selected">
            News
          </NavLink>
          <NavLink to="/support" activeClassName="selected">
            Support
          </NavLink>
        </S.MainNav>
        <S.SideNav>
          <NavLink to="/" className="btn">
            login
          </NavLink>
          <NavLink to="/" className="btn">
            register
          </NavLink>
        </S.SideNav>
        <S.NavButton onClick={toggleNav}>
          <img src={menu} alt="" />
        </S.NavButton>
      </nav>
      <S.MobileNav className={isMobileNavActive ? 'active' : ''}>
        <NavLink to="/home" activeClassName="selected" onClick={toggleNav}>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="selected" onClick={toggleNav}>
          About LKPay
        </NavLink>
        <NavLink to="/fees" activeClassName="selected" onClick={toggleNav}>
          Fees
        </NavLink>
        <NavLink to="/merchant" activeClassName="selected" onClick={toggleNav}>
          Merchant
        </NavLink>
        <NavLink
          to="/lkpay-card"
          activeClassName="selected"
          onClick={toggleNav}
        >
          LKPay Card
        </NavLink>
        <NavLink
          to="/local-bankwire"
          activeClassName="selected"
          onClick={toggleNav}
        >
          Local Bankwire
        </NavLink>
        <NavLink
          to="/affiliates"
          activeClassName="selected"
          onClick={toggleNav}
        >
          Affiliates
        </NavLink>
        <NavLink to="/news" activeClassName="selected" onClick={toggleNav}>
          News
        </NavLink>
        <NavLink to="/support" activeClassName="selected" onClick={toggleNav}>
          Support
        </NavLink>
        <footer>
          <NavLink to="/" className="btn" onClick={toggleNav}>
            login
          </NavLink>
          <NavLink to="/" className="btn" onClick={toggleNav}>
            signup
          </NavLink>
        </footer>
      </S.MobileNav>
    </S.Wrapper>
  );
}

export default Navigation;
