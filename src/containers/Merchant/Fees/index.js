import React, { useState } from 'react';
import classNames from 'classnames';

import us from 'assets/flags/us.svg';
import downArrow from 'assets/icon-down-arrow.svg';

import iconMerchant1 from 'assets/icon-merchant-1.png';
import iconMerchant2 from 'assets/icon-merchant-2.png';
import iconMerchant3 from 'assets/icon-merchant-3.png';
import iconMerchant4 from 'assets/icon-merchant-4.png';
import iconMerchant5 from 'assets/icon-merchant-5.png';
import iconMerchant6 from 'assets/icon-merchant-6.png';

import { CURRENCIES } from '../constants';

import * as S from './styles';

function Fees() {
  const [isSenderActive, toggleSender] = useState(false);
  const [isReceiverActive, toggleReceiver] = useState(false);
  const [selectedSender, setSelectedSender] = useState({
    currency: 'USD',
    flag: us,
  });
  const [selectedReceiver, setSelectedReceiver] = useState({
    currency: 'USD',
    flag: us,
  });

  return (
    <S.Wrapper>
      <h2>Merchant fees</h2>
      <section>
        <S.ExchangeField>
          <section>
            <div>
              <small>you send</small>
              <input type="number" placeholder="ex: 1000" />
            </div>
          </section>
          <aside onClick={() => toggleSender(!isSenderActive)}>
            <div>
              <img src={selectedSender.flag} alt="" className="flag" />
              <span className="flag-label">{selectedSender.currency}</span>
            </div>
            <img src={downArrow} alt="" className="down-arrow" />
            <ul
              className={classNames('currency-list', {
                active: isSenderActive,
              })}
            >
              {CURRENCIES.map((c, index) => (
                <li key={index} onClick={() => setSelectedSender(c)}>
                  <img src={c.flag} alt="" className="flag" />
                  <span className="flag-label">{c.currency}</span>
                </li>
              ))}
            </ul>
          </aside>
        </S.ExchangeField>
      </section>
      <ul>
        <li>
          <header className="exchange-label">
            <p>Client (Internal Transfer)</p>
            <p>
              <strong>$ 25.30</strong> (2.5% + $0.3, LKPay fee)
            </p>
          </header>
          <S.ExchangeField>
            <section>
              <div>
                <small>recipient gets</small>
                <input type="number" value="0" disabled />
              </div>
            </section>
            <aside onClick={() => toggleReceiver(!isReceiverActive)}>
              <div>
                <img src={selectedReceiver.flag} alt="" className="flag" />
                <span className="flag-label">{selectedReceiver.currency}</span>
              </div>
              <img src={downArrow} alt="" className="down-arrow" />
              <ul
                className={classNames('currency-list', {
                  active: isReceiverActive,
                })}
              >
                {CURRENCIES.map((c, index) => (
                  <li key={index} onClick={() => setSelectedReceiver(c)}>
                    <img src={c.flag} alt="" className="flag" />
                    <span className="flag-label">{c.currency}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </S.ExchangeField>
        </li>
        <li>
          <header className="exchange-label">
            <p>Local Bank Wire (Money In)</p>
            <p>
              <strong>$ 20.00 </strong> (2%)
            </p>
          </header>
          <S.ExchangeField>
            <section>
              <div>
                <small>recipient gets</small>
                <input type="number" value="0" disabled />
              </div>
            </section>
            <aside className="no-pointer">
              <div>
                <img src={selectedReceiver.flag} alt="" className="flag" />
                <span className="flag-label">{selectedReceiver.currency}</span>
              </div>
            </aside>
          </S.ExchangeField>
        </li>
        <li>
          <header className="exchange-label">
            <p>International Bank Wire (Money Out)</p>
            <p>
              <strong>$ 50.00</strong> (5%)
            </p>
          </header>
          <S.ExchangeField>
            <section>
              <div>
                <small>recipient gets</small>
                <input type="number" value="0" disabled />
              </div>
            </section>
            <aside className="no-pointer">
              <div>
                <img src={selectedReceiver.flag} alt="" className="flag" />
                <span className="flag-label">{selectedReceiver.currency}</span>
              </div>
            </aside>
          </S.ExchangeField>
        </li>
        <li>
          <header className="exchange-label">
            <p>E-money (Money Out)</p>
            <p>
              <strong>$ 10.00</strong> (1$)
            </p>
          </header>
          <S.ExchangeField>
            <section>
              <div>
                <small>recipient gets</small>
                <input type="number" value="0" disabled />
              </div>
            </section>
            <aside className="no-pointer">
              <div>
                <img src={selectedReceiver.flag} alt="" className="flag" />
                <span className="flag-label">{selectedReceiver.currency}</span>
              </div>
            </aside>
          </S.ExchangeField>
        </li>
      </ul>
      <footer>
        <article>
          <img src={iconMerchant1} alt="" />
          <p>
            Providing cards available around the world to clients. Comprehensive
            coverage of services for worldwide customers.
          </p>
        </article>
        <article>
          <img src={iconMerchant2} alt="" />
          <p>
            Various deposit methods and low fees: Deposit directly to LKPay
            via VISA/MASTER, UnionPay or Bitcoin with minimum fee.
          </p>
        </article>
        <article>
          <img src={iconMerchant3} alt="" />
          <div>
            <p>
              Domestic (local) bank withdrawal option: Clients can withdraw from
              their domestic bank within 1 business day.
            </p>
            <small>
              * Countries available for local payout (Japan,Korea, Philippines,
              China, Indonesia, Singapore, India)
            </small>
          </div>
        </article>
        <article>
          <img src={iconMerchant4} alt="" />
          <p>
            Providing convenient API and easy development documents for
            merchants.
          </p>
        </article>
        <article>
          <img src={iconMerchant5} alt="" />
          <p>Internal transfers fee 1% & 2.5%+$0.3 customer to merchant.</p>
        </article>
        <article>
          <img src={iconMerchant6} alt="" />
          <p>Supporting 24-hours customer center for all clients.</p>
        </article>
      </footer>
    </S.Wrapper>
  );
}

export default Fees;
