import React from 'react';
import { Select, DatePicker, Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

import { NATIONALITY, CURRENCIES } from '../constants';

import * as S from './styles';

const { Option } = Select;

function SignupForm() {
  return (
    <S.Wrapper>
      <header>
        <h4>OPEN LKPAY ACCOUNT</h4>
        <p>- Please fill the required fields in English.</p>
        <p>- Estimated time to complete your registration is 3 Minutes.</p>
      </header>
      <section>
        <S.FormGroup>
          <p className="label">Email*</p>
          <aside>
            <Input size="large" />
          </aside>
        </S.FormGroup>
        <S.FormGroup>
          <p className="label">First Name*</p>
          <aside>
            <Input size="large" />
          </aside>
        </S.FormGroup>
        <S.FormGroup>
          <p className="label">Last Name*</p>
          <aside>
            <Input size="large" />
          </aside>
        </S.FormGroup>
        <S.FormGroup>
          <p className="label">Date of birth*</p>
          <aside>
            <DatePicker size="large" />
          </aside>
        </S.FormGroup>
        <S.FormGroup>
          <p className="label">Password*</p>
          <aside>
            <Input size="large" type="password" />
          </aside>
        </S.FormGroup>
        <S.FormGroup>
          <p className="label">Confirm Password*</p>
          <aside>
            <Input size="large" type="password" />
          </aside>
        </S.FormGroup>
        <S.FormGroup>
          <p className="label">Nationality*</p>
          <aside>
            <Select style={{ width: '100%' }} size="large">
              {NATIONALITY.map((n) => (
                <Option value={n.code} key={n.code}>
                  {n.name}
                </Option>
              ))}
            </Select>
          </aside>
        </S.FormGroup>
        <S.FormGroup>
          <p className="label">Currency*</p>
          <aside>
            <Select style={{ width: '100%' }} size="large">
              {CURRENCIES.map((c) => (
                <Option value={c.cc} key={c.cc}>
                  {c.cc} : {c.name}
                </Option>
              ))}
            </Select>
          </aside>
        </S.FormGroup>
      </section>
      <footer>
        <p>To continue, please agree to our terms.</p>
        <Checkbox>I agree to all Terms.</Checkbox>
        <br />
        <Checkbox>
          I agree to LKPAY{' '}
          <Link to="/" target="_blank">
            Terms and Conditions.
          </Link>
        </Checkbox>
        <br />
        <Checkbox>
          I agree to LKPAY{' '}
          <Link to="/" target="_blank">
            Privacy Policy.
          </Link>
        </Checkbox>
        <br />
        <Checkbox>
          I agree to LKPAY{' '}
          <Link to="/" target="_blank">
            Anti-Money-Laundering Policy.
          </Link>
        </Checkbox>
      </footer>

      <S.Button>NEXT</S.Button>
    </S.Wrapper>
  );
}

export default SignupForm;
