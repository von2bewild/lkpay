import React from 'react';
import { Select, Input } from 'antd';

import * as S from './styles';

const { Option } = Select;
const { TextArea } = Input;

function GetInTouch() {
  return (
    <S.Wrapper>
      <header>
        <h3>get in touch with us</h3>
        <p>
          If you have any questions, please provide your contact email and fill
          the form below. We will get back to you as soon as possible.
        </p>
      </header>
      <S.FormGroup>
        <p className="label">Department*</p>
        <aside>
          <Select defaultValue="general" style={{ width: '100%' }} size="large">
            <Option value="general">General Inquiry</Option>
            <Option value="funds">Funds Inquiry</Option>
            <Option value="mechant">Merchant Inquiry</Option>
            <Option value="affiliates">Affiliates Inquiry</Option>
          </Select>
        </aside>
      </S.FormGroup>
      <S.FormGroup>
        <p className="label">Full Name*</p>
        <aside>
          <Input size="large" />
        </aside>
      </S.FormGroup>
      <S.FormGroup>
        <p className="label">Email*</p>
        <aside>
          <Input size="large" />
        </aside>
      </S.FormGroup>
      <S.FormGroup>
        <p className="label">Message*</p>
        <aside>
          <TextArea rows={4} />
        </aside>
      </S.FormGroup>

      <S.Button>SUBMIT</S.Button>
    </S.Wrapper>
  );
}

export default GetInTouch;
