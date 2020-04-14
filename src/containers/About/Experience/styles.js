import styled from 'styled-components';
import { colors } from 'themes/colors';
import quoteLeft from 'assets/icon-quote-left.svg';
import quoteRight from 'assets/icon-quote-right.svg';

export const Wrapper = styled.div`
  padding: 60px 40px;
  @media (max-width: 600px) {
    padding: 40px 20px;
  }

  > h2 {
    text-align: center;
    margin: 0 0 20px 0;
    font-size: 30px;
    color: ${colors.navy_blue};
    line-height: 1.2;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }
  > h5 {
    text-align: center;
    font-size: 16px;
    max-width: 800px;
    margin: 40px auto 0;
    color: ${colors.gray_2};
    line-height: 1.4;
    font-weight: 400;
    @media (max-width: 900px) {
      margin: 0 auto;
    }
  }
  > section {
    display: flex;
    max-width: 1200px;
    justify-content: space-between;
    margin: 80px auto 60px;
    @media (max-width: 900px) {
      justify-content: center;
      flex-direction: column;
      margin: 80px auto 0;
    }
  }
  > ul {
    display: flex;
    max-width: 1000px;
    width: 100%;
    margin: 40px auto;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 900px) {
      justify-content: center;
    }

    li {
      flex: 0 0 23%;
      text-align: center;
      padding: 0 10px;
      @media (max-width: 900px) {
        flex: 0 0 47%;
        margin-bottom: 20px;
      }

      img {
        width: 32px;
        height: 32px;
        margin: 0 auto 10px;
        display: block;
      }
      p {
        font-size: 16px;
        color: ${colors.dark_1};
        margin: 0;
        @media (max-width: 600px) {
          font-size: 12px;
        }
      }
      strong {
        color: ${colors.navy_blue};
      }
    }
  }
`;

export const Testimonial = styled.div`
  border: 1px solid ${colors.gray_4};
  padding: 80px 25px;
  flex: 0 0 32%;
  position: relative;
  @media (max-width: 900px) {
    margin-bottom: 70px;
  }

  p {
    font-size: 14px;
    text-align: center;
    position: relative;
    margin: 0;
    padding: 30px 0;
  }
  p:before {
    width: 30px;
    height: 30px;
    position: absolute;
    top: -5px;
    left: 0;
    content: '';
    background: url(${quoteLeft}) center/contain no-repeat;
  }
  p:after {
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: -5px;
    right: 0;
    content: '';
    background: url(${quoteRight}) center/contain no-repeat;
  }
  figure {
    width: 86px;
    height: 86px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: -43px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    border: 2px solid ${colors.gray_4};
    background: ${colors.gray_3};

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .flag {
    width: 50px;
    display: block;
    margin: auto;
  }
  small {
    margin: 0;
    display: block;
    text-align: center;
    font-size: 14px;
  }
  > footer {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
