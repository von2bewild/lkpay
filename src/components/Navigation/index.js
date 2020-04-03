import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/logo.png';

import * as S from './styles';

function Navigation() {
  return (
    <S.Wrapper>
      <header>
        <section>
          <a href="/" className="active">
            Personal
          </a>
          <span className="divider" />
          <a href="/">Business</a>
        </section>
      </header>
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
      </nav>
    </S.Wrapper>
  );
}

export default Navigation;
