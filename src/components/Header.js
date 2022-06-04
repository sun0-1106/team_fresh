import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid purple;
`;
const Box = styled.ul`
  width: 50%;
  height: 100%;
  border: 1px solid red;
`;
const List = styled.li`
  width: 100px;
`;
const Header = () => {
  //스크롤 내리면 배경색상 생김!!!
  return (
    <Container>
      <img alt='로고'></img>
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
