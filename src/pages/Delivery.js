import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Tip from '../components/Tip';
import AddressBox from '../components/AddressBox';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #e8e8e8;
  color: gray;
`;
const Search = styled.input`
  width: 100%;
  height: 46px;
  font-size: 18px;
  padding-left: 15px;
  margin-bottom: 10px;
`;

//과제 2만들 때 .env에있는 포트번호로 연결
const Delivery = () => {
  const [keyDown, setKeyDown] = useState(false);

  const postAddress = async () => {
    try {
      const res = await axios.post(
        'https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest',
        { addrBasic: '서울특별시 송파구 위례성대로 12길 15-1' },
        {
          headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8',
          },
        },
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    postAddress();
  }, []);

  return (
    <Container>
      <Search
        placeholder='예) 판교역로 235,분당 주공, 삼평동 681'
        onKeyDown={() => {
          setKeyDown(true);
        }}
      />
      {/* {!keyDown ? <Tip /> : <div></div>} */}
      <AddressBox />
      우편번호 서비스
    </Container>
  );
};

export default Delivery;
