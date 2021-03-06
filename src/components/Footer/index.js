import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo-3.png';

import * as S from './styles';

function Footer() {
  return (
    <S.Wrapper>
      <nav>
        <Link to="/support/">Contact Us</Link>
        <Link to="/">Terms & Conditions</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">AML Policy</Link>
        <Link to="/support/faq">FAQ</Link>
      </nav>
      <footer>
        <img src={logo} alt="" />
        <p>
          Copyright © 2020 LKPay Holdings UK Limited. All rights reserved.<br />
          LKPay Limited (FRN: 900001) is authorised by the Financial Conduct
          Authority under the Electronic Money Regulations 2011 for the issuing
          of electronic money and payment instruments. LKPays is a registered
          trademark of LKPay Limited. LKPay Financial Services Limited (FRN:
          900015) is authorised by the Financial Conduct Authority under the
          Electronic Money Regulations 2011 for the issuing of electronic money
          and payment instruments.
        </p>
      </footer>
    </S.Wrapper>
  );
}

export default Footer;
