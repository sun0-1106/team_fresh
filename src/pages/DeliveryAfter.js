import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 800px;
  border: 1px solid #ccc;
`;
const Address = styled.div`
  width: 95%;
  height: 50px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
`;
const Search = styled.input``;
const DeliveryAfter = () => {
  const [keyDown, setKeyDown] = useState(false);
  const [address, setAddress] = useState();
  const [result, setResult] = useState();
  const { state } = useLocation();
  console.log(state);

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
      <Address>{state.data.zonecode}</Address>
      <Address>{state.fullAddress}</Address>
      <Search placeholder='나머지 주소를 입력해주세요'></Search>
    </Container>
  );
};

export default DeliveryAfter;
