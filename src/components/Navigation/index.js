import React from 'react';
import * as S from './styles';

function Navigation() {
  return (
    <S.Wrapper>
      <header>
        <section>
          <a href="/">Personal</a>
          <span className="divider">|</span>
          <a href="/">Business</a>
        </section>
      </header>
      <nav>
        
      </nav>
    </S.Wrapper>
  );
}

export default Navigation;
