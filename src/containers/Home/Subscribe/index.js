import React from 'react';
import * as S from './styles';

function Subscribe() {
  return (
    <S.Wrapper>
      <article>
        <h2>Sign up to our emails</h2>
        <p>Learn about our products. Hear about our offers</p>
      </article>
      <aside>
        <input type="text" placeholder="Your Email" className="email-field"/>
        <button className="email-btn">Send</button>
      </aside>
    </S.Wrapper>
  );
}

export default Subscribe;
