import React from 'react';

import money from 'assets/icon-money.svg';
import monitor from 'assets/icon-monitor.svg';
import plane from 'assets/icon-plane.svg';
import motel from 'assets/icon-motel.svg';
import card from 'assets/img-card.png';

import * as S from './styles';

function LkCard() {
  return (
    <S.Wrapper>
      <header>
        <article>
          <h3>LK Card</h3>
          <p>
            Our prepaid cards offer you convenience and control. You simply load
            a STIC Card with funds and use it for the things you would normally
            use cash for. Of course, every card comes with Unionpay in all over
            the world acceptance.
          </p>
        </article>
      </header>
      <section>
        <article>
          <ul>
            <li>
              <div className="circle">
                <img src={money} alt="" />
              </div>
              <h5>Withdraw to any ATMs</h5>
            </li>
            <li>
              <div className="circle">
                <img src={monitor} alt="" />
              </div>
              <h5>Online Shop</h5>
            </li>
            <li>
              <div className="circle">
                <img src={plane} alt="" />
              </div>
              <h5>Book your trip</h5>
            </li>
            <li>
              <div className="circle">
                <img src={motel} alt="" />
              </div>
              <h5>Book Accomodation</h5>
            </li>
          </ul>
          <div className="card">
            <img src={card} alt="" />
            <button>Learn more</button>
          </div>
        </article>
      </section>
    </S.Wrapper>
  );
}

export default LkCard;
