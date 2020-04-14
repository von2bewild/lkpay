import React from 'react';
import hk from 'assets/flags/hk.svg';
import jp from 'assets/flags/jp.svg';
import imgPerson1 from 'assets/img-person-quote-1.png';
import imgPerson2 from 'assets/img-person-quote-2.png';
import imgPerson3 from 'assets/img-person-quote-3.png';
import iconInquiry1 from 'assets/icon-inquiry-general.svg';
import iconInquiry2 from 'assets/icon-inquiry-funds.svg';
import iconInquiry3 from 'assets/icon-inquiry-merchant.svg';
import iconInquiry4 from 'assets/icon-inquiry-affiliates.svg';

import * as S from './styles';

function Component() {
  return (
    <S.Wrapper>
      <h2>How was your experience?</h2>
      <section>
        <S.Testimonial>
          <figure>
            <img src={imgPerson1} alt="" />
          </figure>
          <p>
            “I use to send money to my parents abroad. Without , sending money
            was costly and took 3 days. With , my parents can now get money
            immediately and conveniently.”
          </p>
          <footer>
            <img src={hk} alt="" className="flag" />
            <small>Chen in Hong Kong</small>
          </footer>
        </S.Testimonial>
        <S.Testimonial>
          <figure>
            <img src={imgPerson2} alt="" />
          </figure>
          <p>
            “Unless I convert to major currencies ($ or Euro), exchange fees
            were too high for me. LKPay allows me to travel without worrying
            about high exchanges fees as I can withdraw local currencies from
            the local ATM machines.”
          </p>
          <footer>
            <img src={jp} alt="" className="flag" />
            <small>Inoue in Japan</small>
          </footer>
        </S.Testimonial>
        <S.Testimonial>
          <figure>
            <img src={imgPerson3} alt="" />
          </figure>
          <p>
            “I use LKPay for my FX margin trading account. Now, I don’t have to
            worry about deposit/withdrawal as it’s done instantly with LKPay
            where I can manage the risk real time.”
          </p>
          <footer>
            <img src={jp} alt="" className="flag" />
            <small>Nakamura in Japan</small>
          </footer>
        </S.Testimonial>
      </section>
      <h5>
        Any other questions or concerns, do not hesitate to contact our friendly
        LKPay support! To serve you faster and more efficiently, LKPay responds
        to your queries online only (no phones but email us).
      </h5>
      <ul>
        <li>
          <img src={iconInquiry1} alt=""/>
          <p><strong>Account, General Inquiry</strong></p>
          <p>account@lkpay.com</p>
        </li>
        <li>
          <img src={iconInquiry2} alt=""/>
          <p><strong>Funds Inquiry</strong></p>
          <p>funds@lkpay.com</p>
        </li>
        <li>
          <img src={iconInquiry3} alt=""/>
          <p><strong>Merchant Inquiry</strong></p>
          <p>merchant@lkpay.com</p>
        </li>
        <li>
          <img src={iconInquiry4} alt=""/>
          <p><strong>Affiliates Inquiry</strong></p>
          <p>affiliate@lkpay.com</p>
        </li>
      </ul>
    </S.Wrapper>
  );
}

export default Component;
