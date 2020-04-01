import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';

import * as S from './styles';

function Navigation() {
  return (
    <S.Wrapper>
      <header>
        <section>
          <a href="/" className="active">Personal</a>
          <span className="divider" />
          <a href="/">Business</a>
        </section>
      </header>
      <nav>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <S.MainNav>
          <Link to="/about">about lkpay</Link>
          <Link to="/about">fees</Link>
          <Link to="/about">merchant</Link>
          <Link to="/about">local bankwire</Link>
          <Link to="/about">affiliates</Link>
          <Link to="/about">support</Link>
        </S.MainNav>
        <S.SideNav>
          <a href="/">exclusive offers</a>
          <Link to="/" className="btn">login</Link>
          <Link to="/" className="btn">register</Link>
        </S.SideNav>
      </nav>
    </S.Wrapper>
  );
}

export default Navigation;
