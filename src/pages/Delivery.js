import React from 'react';
import styled from 'styled-components';
import Tip from '../components/Tip';

const Container = styled.div`
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
`;

//과제 2만들 때 .env에있는 포트번호로 연결
const Delivery = () => {
  //검색어 아무것도 안쳤을때 tip박스가 뜨고
  //검색어 입력하면 tip박스 사라지고 주소정보 컴포넌트가 생김
  return (
    <Container>
      <Search placeholder='예) 판교역로 235,분당 주공, 삼평동 681' />
      <Tip />
      우편번호 서비스
    </Container>
  );
};

export default Delivery;
