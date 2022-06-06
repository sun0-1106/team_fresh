import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//아이콘
import Car from '../images/icon03.png';
import Truck from '../images/icon04.png';
import Location from '../images/icon06.png';
import Health from '../images/icon07.png';
import arrowIcon from '../images/arrowicon.png';
//이미지
import truck from '../images/main_business_img01.jpg';
import basket from '../images/main_business_img02.jpg';
import pasta from '../images/main_business_img03.jpg';
import book from '../images/main_business_img04.jpg';

const Container = styled.div`
  width: 100%;
  height: 822.5px;
  //border: 1px solid purple;
`;
const TitleBox = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90px;
`;
const Title1 = styled.span`
  font-weight: 300;
  font-size: 20px;
  line-height: 45px;
  color: #000;
`;
const Title2 = styled.span`
  font-weight: 700;
  font-size: 55px;
  line-height: 45px;
  color: #000;
`;
const ContentBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1150px;
  height: 632.5px;
  //  border: 3px solid red;
`;
const BtnBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  display: flex;
  width: 544.5px;
  height: 130px;
  z-index: 3;
  &:hover {
    cursor: pointer;
  }
`;
const Btn1 = styled.div`
  ${({ icon }) =>
    icon === 'logistics'
      ? `
      background-color: rgba(2, 21, 48, 0.9);
        `
      : `
          background-color: #f5f5f5;;
        `}
  position: relative;
  width: 136.13px;
  height: 130px;
  z-index: 3;
  span {
    ${({ icon }) =>
      icon === 'logistics'
        ? `
    color:#fff;
        `
        : `
         color:#000;
        `}
    width: 136.13px;
    left: 0;
    position: absolute;
    font-size: 20px;
    top: 80px;
    text-align: center;
  }
  img {
    ${({ icon }) =>
      icon === 'logistics'
        ? `
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
    brightness(103%) contrast(101%);
        `
        : `
         filter:none;
        `}
    position: absolute;
    top: 15px;
    left: 50%;
    width: 60px;
    height: 60px;
    margin-left: -30px;
  }
`;
const Btn2 = styled(Btn1)`
  ${({ icon }) =>
    icon === 'retail'
      ? `
      background-color: rgba(2, 21, 48, 0.9);
        `
      : `
          background-color: #f5f5f5;;
        `}
  span {
    ${({ icon }) =>
      icon === 'retail'
        ? `
    color:#fff;
        `
        : `
         color:#000;
        `}
  }
  img {
    ${({ icon }) =>
      icon === 'retail'
        ? `
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
    brightness(103%) contrast(101%);
        `
        : `
         filter:none;
        `}
  }
`;
const Btn3 = styled(Btn1)`
  ${({ icon }) =>
    icon === 'franchise'
      ? `
      background-color: rgba(2, 21, 48, 0.9);
        `
      : `
          background-color: #f5f5f5;;
        `}
  span {
    ${({ icon }) =>
      icon === 'franchise'
        ? `
    color:#fff;
        `
        : `
         color:#000;
        `}
  }
  img {
    ${({ icon }) =>
      icon === 'franchise'
        ? `
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
    brightness(103%) contrast(101%);
        `
        : `
         filter:none;
        `}
  }
`;
const Btn4 = styled(Btn1)`
  ${({ icon }) =>
    icon === 'insurance'
      ? `
      background-color: rgba(2, 21, 48, 0.9);
        `
      : `
          background-color: #f5f5f5;;
        `}
  span {
    ${({ icon }) =>
      icon === 'insurance'
        ? `
    color:#fff;
        `
        : `
         color:#000;
        `}
  }
  img {
    ${({ icon }) =>
      icon === 'insurance'
        ? `
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
    brightness(103%) contrast(101%);
        `
        : `
         filter:none;
        `}
  }
`;
const Text = styled.div`
  position: absolute;
  top: 230px;
  width: 460px;
  height: 135px;
  text-align: left;
  font-size: 35px;
  line-height: 45px;
  color: #02204b;
  font-weight: 700;
`;
const MiniText = styled.div`
  position: absolute;
  top: 360px;
  width: 460px;
  height: 75px;
  margin-top: 30px;
  font-weight: 300;
  font-size: 18px;
  text-align: left;
  line-height: 25px;
  color: #666;
`;
const ArrowIcon = styled.img`
  position: absolute;
  left: 0;
  bottom: 120px;
  width: 48px;
  height: 12px;
  z-index: 99;
  opacity: 50%;
`;
const RightImg = styled.img`
  position: absolute;
  top: 0%;
  right: 0%;
  width: 632.5px;
  height: 632.5px;
`;
const IntroduceService = () => {
  const [icon, setIcon] = useState('logistics');
  const navigate = useNavigate();

  return (
    <Container>
      <TitleBox>
        <Title1>Service Introduction</Title1>
        <Title2>서비스소개</Title2>
      </TitleBox>
      <ContentBox>
        <BtnBox>
          <Btn1
            icon={icon}
            onClick={() => {
              setIcon('logistics');
            }}
          >
            <img src={Car} />
            <span>물류</span>
          </Btn1>
          <Btn2
            icon={icon}
            onClick={() => {
              setIcon('retail');
            }}
          >
            <img src={Truck} />
            <span>유통</span>
          </Btn2>
          <Btn3
            icon={icon}
            onClick={() => {
              setIcon('franchise');
            }}
          >
            <img src={Location} />
            <span>프랜차이즈</span>
          </Btn3>
          <Btn4
            icon={icon}
            onClick={() => {
              setIcon('insurance');
            }}
          >
            <img src={Health} />
            <span>보험</span>
          </Btn4>
        </BtnBox>
        {icon === 'logistics' ? (
          <Text>
            상품의 관리,
            <br />
            보관부터 배송까지
            <br />
            완벽하게
          </Text>
        ) : icon === 'retail' ? (
          <Text>
            식자재 제안,
            <br />
            업장 운영 형태에 맞는
            <br />
            최적의 형태로
          </Text>
        ) : icon === 'franchise' ? (
          <Text>
            외식 창업,
            <br />
            적은 자본으로
            <br />
            빠르고 간편하게
          </Text>
        ) : (
          <Text>
            기업 대상 전문 보험,
            <br />
            상해부터 재산종합보험까지
            <br />
            똑똑하게
          </Text>
        )}
        {icon === 'logistics' ? (
          <MiniText>
            이커머스 운영에 최적화된 풀필먼트 센터와
            <br />
            새벽배송망을 보유한 팀프레시의
            <br />
            이커머스 전문 물류 서비스를 제공받으세요.
          </MiniText>
        ) : icon === 'retail' ? (
          <MiniText>
            주기적인 단가 관리 시스템을 통해
            <br />
            합리적인 가격의 상품을 제공하고,
            <br />
            자체 물류 역량으로 상품을 안정적으로 공급하고 있습니다.
          </MiniText>
        ) : icon === 'franchise' ? (
          <MiniText>
            외식 전문 브랜드 팀프에프앤비가
            <br />
            소형, 소자본으로도 쉽고 편리하게
            <br />
            점포를 운영할 수 있도록
            <br />
            가맹 패키지를 제안해드립니다.
          </MiniText>
        ) : (
          <MiniText>
            기업 전문 보험 GA와 만나
            <br />
            팀프인슈어런스가 탄생했습니다.
            <br />
            기업 맞춤형, 최적의 보험 상품을 추천받아보세요.
          </MiniText>
        )}
        <ArrowIcon
          src={arrowIcon}
          onClick={() => {
            navigate('/blank');
          }}
        />
        <RightImg
          src={
            icon === 'logistics'
              ? truck
              : icon === 'retail'
              ? basket
              : icon === 'franchise'
              ? pasta
              : book
          }
        ></RightImg>
      </ContentBox>
    </Container>
  );
};

export default IntroduceService;
