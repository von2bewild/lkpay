import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import Footer from 'components/Footer';
import * as S from './styles';

function Login() {
  return (
    <Fragment>
      <S.Wrapper>
        <section>
          <h3>LOGIN</h3>
          <Input
            placeholder="Enter your email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            size="large"
          />
          <br />
          <br />
          <Input
            placeholder="Enter your password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            size="large"
            type="password"
          />
          <button>LOGIN</button>
          <footer>
            <Link to="/sign-up">Sign up</Link>
            <Link to="/forgot-password">Forgot Password</Link>
          </footer>
        </section>
      </S.Wrapper>
      <Footer />
    </Fragment>
  );
}

export default Login;
