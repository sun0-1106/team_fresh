import styled from 'styled-components';
import building from '../images/main_pointimg01.jpg';
import packaging from '../images/main_pointimg02.jpg';
import service from '../images/main_pointimg03.jpg';
import truck from '../images/main_pointimg04.jpg';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 790px;
  //border: 2px solid purple;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0% 50%,
    rgba(0, 0, 0, 0.05) 50% 100%
  );
`;
const TitleBox = styled.div`
  position: absolute;
  top: 10px;
  left: 18.5%;
  width: 1150px;
  height: 90px;
`;
const Title1 = styled.span`
  position: relative;
  font-weight: 300;
  font-size: 20px;
  color: #000;
`;
const Title2 = styled.div`
  position: relative;
  text-align: center;
  font-weight: 700;
  font-size: 55px;
  line-height: 45px;
  color: #000;
  margin-top: 10px;
`;
const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1150px;
  height: 500px;
`;
const Frame1 = styled.div`
  ${({ isOpen }) =>
    isOpen === 'first'
      ? `
      width: 54.7%;
        `
      : `
      width: 14.7%;
        `}
  position: relative;
  float: left;
  height: 500px;
  margin: 0 0.15%;
  overflow: hidden;
  transition: all ease 0.5s;
  img {
    ${({ isOpen }) =>
      isOpen === 'first'
        ? `
      filter: brightness(80%);
        `
        : `
      filter: brightness(50%);
        `}
    position: absolute;
    left: 0;
    width: 629.05px;
    height: 500px;
    object-fit: cover;
    z-index: 5;
  }
`;
const Frame2 = styled(Frame1)`
  ${({ isOpen }) =>
    isOpen === 'second'
      ? `
      width: 54.7%;
        `
      : `
      width: 14.7%;
        `}
  img {
    ${({ isOpen }) =>
      isOpen === 'second'
        ? `
      filter: brightness(90%);
        `
        : `
      filter: brightness(50%);
        `}
  }
`;
const Frame3 = styled(Frame1)`
  ${({ isOpen }) =>
    isOpen === 'third'
      ? `
      width: 54.7%;
        `
      : `
      width: 14.7%;
        `}
  img {
    ${({ isOpen }) =>
      isOpen === 'third'
        ? `
      filter: brightness(90%);
        `
        : `
      filter: brightness(50%);
        `}
  }
`;
const Frame4 = styled(Frame1)`
  ${({ isOpen }) =>
    isOpen === 'last'
      ? `
      width: 54.7%;
        `
      : `
      width: 14.7%;
        `}
  img {
    ${({ isOpen }) =>
      isOpen === 'last'
        ? `
      filter: brightness(90%);
        `
        : `
      filter: brightness(50%);
        `}
  }
`;
const TBox = styled.div`
  position: absolute;
  width: 559.047em;
  height: 95px;
  padding: 40px 40px 30px 40px;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 30;
`;
const MiniTitle = styled.div`
  position: absolute;
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
  color: #fff;
  z-index: 30;
`;
const Explain = styled.div`
  position: absolute;
  top: 90px;
  font-size: 17px;
  font-weight: 300;
  color: #fff;
`;
const MiniTitle2 = styled.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  font-size: 25px;
  line-height: 25px;
  font-weight: 500;
  color: #fff;
  z-index: 30;
`;
const Competency = () => {
  const [isOpen, setIsOpen] = useState('first');

  return (
    <Container>
      <TitleBox>
        <Title1>팀프레시를 이끄는 힘</Title1>
        <Title2>핵심역량</Title2>
      </TitleBox>
      <Box>
        <Frame1
          isOpen={isOpen}
          onMouseOver={() => {
            setIsOpen('first');
          }}
        >
          <img src={building} />
          {isOpen === 'first' ? (
            <TBox>
              <MiniTitle>특허 보유 TMS</MiniTitle>
              <Explain>
                새벽 배송 추적에 최적화된 배차 및 고객 주문관리 시스템
                <br />* TMS : Transportation Management System
              </Explain>
            </TBox>
          ) : (
            <MiniTitle2>
              특허 보유
              <br />
              TMS
            </MiniTitle2>
          )}
        </Frame1>
        <Frame2
          isOpen={isOpen}
          onMouseOver={() => {
            setIsOpen('second');
          }}
        >
          <img src={packaging} />
          {isOpen === 'second' ? (
            <TBox>
              <MiniTitle>국내 1위 새벽배송</MiniTitle>
              <Explain>대한민국 1위 안정된 새벽배송망 구축</Explain>
            </TBox>
          ) : (
            <MiniTitle2>
              국내 1위
              <br />
              새벽배송
            </MiniTitle2>
          )}
        </Frame2>
        <Frame3
          isOpen={isOpen}
          onMouseOver={() => {
            setIsOpen('third');
          }}
        >
          <img src={service} />
          {isOpen === 'third' ? (
            <TBox>
              <MiniTitle>24시간 관제</MiniTitle>
              <Explain>
                24시간 현장 관제를 통해 상품을 안전하게 배송 완료
              </Explain>
            </TBox>
          ) : (
            <MiniTitle2>24시간 관제</MiniTitle2>
          )}
        </Frame3>
        <Frame4
          isOpen={isOpen}
          onMouseOver={() => {
            setIsOpen('last');
          }}
        >
          <img src={truck} />
          {isOpen === 'last' ? (
            <TBox>
              <MiniTitle>라이선스 보유 차량망</MiniTitle>
              <Explain>합법적으로 허가 받은 차량만을 섭외해 운영</Explain>
            </TBox>
          ) : (
            <MiniTitle2>
              라이선스
              <br />
              보유 차량망
            </MiniTitle2>
          )}
        </Frame4>
      </Box>
    </Container>
  );
};

export default Competency;
