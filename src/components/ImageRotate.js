import styled from 'styled-components';
import harbor from '../images/harbor.gif';
import BoxNMoon from '../images/icon01.png';
import House from '../images/icon02.png';
import Car from '../images/icon03.png';
import Truck from '../images/icon04.png';
import Food from '../images/icon05.png';
import Location from '../images/icon06.png';
import Health from '../images/icon07.png';
import People from '../images/icon08.png';
import arrowIcon from '../images/arrowicon.png';

const Container = styled.div`
  width: 100%;
  height: 1030px;
`;
const Curtain = styled.div`
  position: absolute;
  width: 100%;
  height: 1070px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 25;
`;
const Icon = styled.img`
  width: 80px;
  height: 80px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
    brightness(103%) contrast(101%);
`;
const TextBox = styled.div`
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  height: 90px;
  text-align: center;
`;
const Text = styled.div`
  color: #fff;
  z-index: 26;
  font-weight: 300;
  font-size: 20px;
`;
const Text2 = styled.div`
  color: #fff;
  z-index: 26;
  font-weight: 700;
  font-size: 55px;
  line-height: 45px;
  margin-top: 10px;
`;
const Arrow = styled.img`
  width: 80px;
  height: 10px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
    brightness(103%) contrast(101%);
`;
const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1020px;
`;
const TopBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1020px;
  height: 111px;
`;
const ItemBox = styled.div`
  width: 100px;
  height: 111px;
`;
const MidBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1020px;
  height: 80px;
  padding: 80px 0;
  text-align: center;
  color: #fff;
  z-index: 26;
  font-weight: 600;
  font-size: 40px;
  line-height: 80px;
`;
const ArrowUp = styled(Arrow)`
  transform: rotate(270deg);
`;
const ArrowDown = styled(Arrow)`
  transform: rotate(90deg);
`;
const BottomBox = styled(TopBox)``;
const Image = styled.img`
  width: 100%;
  height: 1070px;
`;
const Box2 = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1210px;
  height: 105px;
  z-index: 20;
`;
const ImageRotate = () => {
  return (
    <Container>
      <Curtain>
        <TextBox>
          <Text>?????? ?????? ????????? ??????????????? ?????????</Text>
          <Text2>??????????????? ????????????</Text2>
        </TextBox>
        {/*?????? ????????? 4??? */}
        <Box>
          <TopBox>
            <ItemBox>
              <Icon src={BoxNMoon} />
              <Text>????????????</Text>
            </ItemBox>
            <Arrow src={arrowIcon}></Arrow>
            <ItemBox>
              <Icon src={House} />
              <Text>??????</Text>
            </ItemBox>
            <Arrow src={arrowIcon}></Arrow>
            <ItemBox>
              <Icon src={Car} />
              <Text>??????</Text>
            </ItemBox>
            <Arrow src={arrowIcon}></Arrow>
            <ItemBox>
              <Icon src={Truck} />
              <Text>????????????</Text>
            </ItemBox>
          </TopBox>
          {/*????????? */}
          <MidBox>
            <ArrowUp src={arrowIcon}></ArrowUp>
            ???????????? ????????? ?????????
            <ArrowDown src={arrowIcon}></ArrowDown>
          </MidBox>
          {/*?????? ????????? 4???*/}
          <BottomBox>
            <ItemBox>
              <Icon src={People} />
              <Text>??????</Text>
            </ItemBox>
            <Arrow src={arrowIcon}></Arrow>
            <ItemBox>
              <Icon src={Health} />
              <Text>??????</Text>
            </ItemBox>
            <Arrow src={arrowIcon}></Arrow>
            <ItemBox>
              <Icon src={Location} />
              <Text>???????????????</Text>
            </ItemBox>
            <Arrow src={arrowIcon}></Arrow>
            <ItemBox>
              <Icon src={Food} />
              <Text>????????? ??????</Text>
            </ItemBox>
          </BottomBox>
        </Box>
        {/*?????? ?????? */}
        <Box2>
          <ArrowUp src={arrowIcon}></ArrowUp>
          <Text>????????? ????????? ?????? ????????? ??????</Text>
        </Box2>
      </Curtain>
      <Image src={harbor} alt='?????????gif' muted autoPlay loop playsInline />
    </Container>
  );
};

export default ImageRotate;
