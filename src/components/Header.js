import styled from 'styled-components';
import Logo from '../images/logo_w.png';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  ${({ scrollMove }) =>
    scrollMove
      ? `
          background-color: rgba(2, 21, 48, 0.9);
        `
      : `
          background-color: none;
        `}
  position: fixed;
  width: 100%;
  height: 62.047px;
`;
const Pic = styled.img`
  position: absolute;
  width: 110px;
  object-fit: cover;
  left: 350px;
  top: 18px;
`;
const Box = styled.ul`
  position: absolute;
  display: flex;
  justify-content: space-between;
  list-style: none;
  top: -15px;
  right: 340px;
  width: 404.5px;
  height: 100%;
  line-height: 62px;
  padding: 0;
`;
const List = styled.li`
  position: relative;
  float: left;
  width: 100px;
  color: #fff;
  font-size: 18px;
  list-style: none;
  .ulBox {
    opacity: 0;
  }
  &:hover {
    cursor: pointer;
    .ulBox {
      position: absolute;
      list-style: none;
      left: 0;
      margin: 0;
      padding: 0;
      background-color: rgba(0, 0, 0, 0.2);
      width: 100px;
      opacity: 100%;
    }
  }
`;
const MiniList = styled.li`
  list-style: none;
  font-size: 14px;
  float: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;
const Header = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();
  const [scrollMove, setScrollMove] = useState(false);

  const goToBlank = () => {
    navigate('/blank');
  };

  const updateScroll = () => {
    if (window.scrollY <= 1) {
      setScrollMove(false);
    } else {
      setScrollMove(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.addEventListener('scroll', updateScroll);
    };
  });

  return (
    <Container ref={scrollRef} scrollMove={scrollMove}>
      <Pic src={Logo} alt='로고'></Pic>
      <Box>
        <List>회사소개</List>
        <List>
          서비스소개
          <ul className='ulBox'>
            <MiniList onClick={goToBlank}>물류</MiniList>
            <MiniList onClick={goToBlank}>유통</MiniList>
            <MiniList onClick={goToBlank}>프랜차이즈</MiniList>
            <MiniList onClick={goToBlank}>보험</MiniList>
          </ul>
        </List>
        <List>인재채용</List>
        <List>
          고객지원
          <ul className='ulBox'>
            <MiniList onClick={goToBlank}>팀프뉴스</MiniList>
            <MiniList onClick={goToBlank}>문의하기</MiniList>
            <MiniList onClick={goToBlank}>자주 묻는 질문</MiniList>
          </ul>
        </List>
      </Box>
    </Container>
  );
};

export default Header;
