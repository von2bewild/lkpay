import React from 'react';
import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <ul>
        <li>
          <h5>STEP 1</h5>
          <p>
            Create a LKPAY <br />
            Account
          </p>
        </li>
        <li className="arrow-item">
          <span className="arrow"></span>
        </li>
        <li>
          <h5>STEP 2</h5>
          <p>
            SMS <br />
            Validation
          </p>
        </li>
        <li>
          <h5>STEP 3</h5>
          <p>
            Registration <br />
            complete
          </p>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Header;
