import React, { useState } from 'react';

import classNames from 'classnames';

import downArrow from 'assets/icon-down-arrow.svg';
import us from 'assets/flags/us.svg';

import { CURRENCIES } from '../constants';

import * as S from './styles';

function Header() {
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
      <section>
        <S.LeftContent>
          <h2>SEND MONEY WITH THE REAL TRANSFER FEE</h2>
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
          <p className="exchange-rate">
            Exchange rate: <strong>$ 1.00 = CA$ 1.39</strong>
          </p>
        </S.LeftContent>
        <S.RightContent>
          <header className="exchange-label">
            <p>Client (Internal Transfer)</p>
            <p>
              <strong>¥ 200</strong> (1%)
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
          <header className="exchange-label">
            <p>Merchant (Internal Transfer)</p>
            <p>
              <strong>¥ 200</strong> (No fee)
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
          <header className="exchange-label">
            <p>International Bank Wire (Money Out)</p>
            <p>
              <strong>¥ 200</strong> (5%)
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
          <header className="exchange-label">
            <p>Local Bank Wire (Money In)</p>
            <p>
              <strong>¥ 200</strong> (1%)
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
        </S.RightContent>
      </section>
    </S.Wrapper>
  );
}

export default Header;
