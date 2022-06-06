import styled from 'styled-components';
import Logo from '../images/logo_w.png';
import facebook from '../images/facebook.png';
import youtube from '../images/youtube.png';
import brunch from '../images/brunch_logo.png';

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 305px;
  background-color: #191919;
`;
const Box = styled.div`
  width: 1150px;
  height: 205.047px;
`;
const Img = styled.img`
  width: 100px;
  height: 20px;
  float: left;
`;
const Text = styled.div`
  position: relative;
  top: 50px;
  right: 160px;
  color: #ccc;
`;
const Text2 = styled(Text)`
  right: 377px;
  margin-bottom: 10px;
`;
const Text3 = styled(Text2)`
  right: 385px;
`;
const IconBox = styled.div`
  position: relative;
  top: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 50px;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
`;
const Icon2 = styled(Icon)`
  background-color: #fff;
  border-radius: 80%;
  object-fit: cover;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
    brightness(103%) contrast(101%);
`;
const Footer = () => {
  return (
    <Container>
      <Box>
        <Img src={Logo} />
        <Text>
          (주)팀프레시 사업자번호&nbsp;&nbsp; 561-88-01138&nbsp;&nbsp; 대표
          이성일&nbsp;&nbsp; 서울특별시 송파구 위례성대로 12길 15-1
          &nbsp;&nbsp;전화 02-423-0525 &nbsp;&nbsp;팩스 02-3432-0525
        </Text>
        <Text2>메일 info@timf.co.kr 영업 및 제휴 문의 sales@timf.co.kr</Text2>
        <Text3>Copyrightⓒ TeamFresh Co.,Ltd. All Rights Reserved.</Text3>
        <IconBox>
          <Icon alt='sns 아이콘' src={facebook}></Icon>
          <Icon2 alt='sns 아이콘' src={brunch}></Icon2>
          <Icon alt='sns 아이콘' src={youtube}></Icon>
        </IconBox>
      </Box>
    </Container>
  );
};

export default Footer;
