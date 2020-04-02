import React from 'react';
import logoHeader from 'assets/logo-2.png';

import * as S from './styles';

function Header() {
  return (
    <S.Wrapper>
      <header />
      <section>
        <div className="reward">
          <aside>
            <img src={logoHeader} alt="" />
            <article>
              <h4>GET REWARDED WITH LKPay's New Loyalty Programme</h4>
              <small>
                EArn Loyalty points on all your transaction, Get LKnnect'ed now!
              </small>
            </article>
          </aside>
          <button>start earning points</button>
        </div>
      </section>
    </S.Wrapper>
  );
}

export default Header;
