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

const Delivery = () => {
  const [keyDown, setKeyDown] = useState(false);
  const [address, setAddress] = useState();
  const [result, setResult] = useState();

  const postAddress = async () => {
    try {
      const res = await axios.post(
        'https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest',
        { addrBasic: address },
        {
          headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8',
          },
        },
      );
      if (res.data) {
        setResult(res.data.result);
      }
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
        onKeyDown={e => {
          setKeyDown(true);
          setAddress(e.target.value);
        }}
      />
      {result ? result.map(el => <AddressBox result={el} />) : <Tip />}
      우편번호 서비스
    </Container>
  );
};

export default Delivery;
