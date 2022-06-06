import styled from 'styled-components';
import Img1 from '../images/main_images01.jpg';
import Img2 from '../images/main_images02.jpg';
import Img3 from '../images/main_images03.jpg';
import { useState, useEffect } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 975px;
  background-color: gray;
`;
const Album = styled.img`
  width: 100%;
  height: 975px;
`;
const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 530px;
  height: 130px;
  font-size: 55px;
  font-weight: 600;
  margin-left: -575px;
  margin-top: -150px;
  text-align: left;
  color: #fff;
  z-index: 20;
`;
const Text2 = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -575px;
  margin-top: 20px;
  color: #fff;
  font-size: 20px;
  z-index: 20;
`;
const BtnBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -575px;
  margin-top: 120px;
  width: 45 * 3px;
  height: 7px;
`;
const Btn1 = styled.button`
  ${({ picture }) =>
    picture === 'one'
      ? `
      background-color: blue;
        `
      : `
          background-color:#fff;
        `}
  width: 45px;
  height: 7px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  z-index: 19;
  &:hover {
    cursor: pointer;
  }
`;
const Btn2 = styled(Btn1)`
  ${({ picture }) =>
    picture === 'two'
      ? `
      background-color: blue;
        `
      : `
          background-color:#fff;
        `}
`;
const Btn3 = styled(Btn1)`
  ${({ picture }) =>
    picture === 'three'
      ? `
      background-color: blue;
        `
      : `
          background-color:#fff;
        `}
`;

const Carousel = () => {
  const [picture, setPicture] = useState('one');

  return (
    <Container>
      <Album
        alt='이미지'
        src={picture === 'one' ? Img1 : picture === 'two' ? Img2 : Img3}
      ></Album>
      <Text>
        대한민국 No.1
        <br />
        Cold-chain platform
      </Text>
      <Text2>팀프레시는 신선함을 이어 풍요로운 세상을 만듭니다.</Text2>
      <BtnBox>
        <Btn1
          picture={picture}
          onClick={() => {
            setPicture('one');
          }}
        />
        <Btn2
          picture={picture}
          onClick={() => {
            setPicture('two');
          }}
        />
        <Btn3
          picture={picture}
          onClick={() => {
            setPicture('three');
          }}
        />
      </BtnBox>
    </Container>
  );
};

export default Carousel;
