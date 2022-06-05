import styled from 'styled-components';
import Logo from '../images/logo_w.png';
import { useState, useRef } from 'react';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 62.047px;
  background-color: rgba(2, 21, 48, 0.9);
`;
const Pic = styled.img`
  position: absolute;
  width: 110px;
  object-fit: cover;
  left: 0;
`;
const Box = styled.ul`
  position: relative;
  display: flex;
  left: 800px;
  width: 30%;
  height: 100%;
  border: 1px solid red;
`;
const List = styled.li`
  list-style: none;
  width: 100px;
  color: #fff;
  font-size: 18px;
`;
const Header = () => {
  const scrollRef = useRef();
  const [scrollMove, setScrollMove] = useState(false);
  //스크롤 안내릴땐 투명색상, 스크롤 내리면 배경색상 생김!!!
  //스크롤 내려도 항상 맨 위에 고정
  const handleScroll = () => {};
  return (
    <Container>
      <Pic src={Logo} alt='로고'></Pic>
      <Box>
        <List>회사소개</List>
        <List>서비스소개</List>
        <List>인재채용</List>
        <List>고객지원</List>
      </Box>
    </Container>
  );
};

export default Header;
