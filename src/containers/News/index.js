import React, { useState } from 'react';
import classNames from 'classnames';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import * as S from './styles';

function News() {
  const [selectedTab, setSelectedTab] = useState('news');

  return (
    <S.Wrapper>
      <Navigation />
      <S.Tabs>
        <nav>
          <button
            className={classNames({
              active: selectedTab === 'news',
            })}
            onClick={() => setSelectedTab('news')}
          >
            news
          </button>
          <button
            className={classNames({
              active: selectedTab === 'expo',
            })}
            onClick={() => setSelectedTab('expo')}
          >
            expo
          </button>
        </nav>
      </S.Tabs>
      <S.TabContent
        className={classNames({
          active: selectedTab === 'news',
        })}
      >
        <ul>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Duis velit ea occaecat et commodo et ullamco.</h4>
              <p>Nostrud ea ipsum aute aliqua officia velit. In laborum duis eu magna nostrud et consequat ea deserunt nostrud aliquip adipisicing tempor.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Duis velit ea occaecat et commodo et ullamco.</h4>
              <p>Nostrud ea ipsum aute aliqua officia velit. In laborum duis eu magna nostrud et consequat ea deserunt nostrud aliquip adipisicing tempor.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Duis velit ea occaecat et commodo et ullamco.</h4>
              <p>Nostrud ea ipsum aute aliqua officia velit. In laborum duis eu magna nostrud et consequat ea deserunt nostrud aliquip adipisicing tempor.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Duis velit ea occaecat et commodo et ullamco.</h4>
              <p>Nostrud ea ipsum aute aliqua officia velit. In laborum duis eu magna nostrud et consequat ea deserunt nostrud aliquip adipisicing tempor.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
        </ul>
      </S.TabContent>
      <S.TabContent
        className={classNames({
          active: selectedTab === 'expo',
        })}
      >
        <ul>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Anim ex pariatur elit reprehenderit.</h4>
              <p>Ad ipsum nisi ipsum pariatur do ea sunt ex officia laboris.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Anim ex pariatur elit reprehenderit.</h4>
              <p>Ad ipsum nisi ipsum pariatur do ea sunt ex officia laboris.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Anim ex pariatur elit reprehenderit.</h4>
              <p>Ad ipsum nisi ipsum pariatur do ea sunt ex officia laboris.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Anim ex pariatur elit reprehenderit.</h4>
              <p>Ad ipsum nisi ipsum pariatur do ea sunt ex officia laboris.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Anim ex pariatur elit reprehenderit.</h4>
              <p>Ad ipsum nisi ipsum pariatur do ea sunt ex officia laboris.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
          <li>
            <S.Items>
              <figure></figure>
              <h4>Anim ex pariatur elit reprehenderit.</h4>
              <p>Ad ipsum nisi ipsum pariatur do ea sunt ex officia laboris.</p>
              <small>mar 25 2020</small>
            </S.Items>
          </li>
        </ul>
      </S.TabContent>
      <Footer />
    </S.Wrapper>
  );
}

export default News;
