import styled from 'styled-components';
import Logo from '../images/logo_w.png';

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #191919;
`;
const Img = styled.img`
  width: 409px;
  height: 82px;
`;
const Text = styled.div`
  color: #fff;
`;
const IconBox = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid yellow;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const Footer = () => {
  return (
    <Container>
      <Img src={Logo} />
      <Text>
        (주)팀프레시 사업자번호 561-88-01138 대표 이성일 서울특별시 송파구
        위례성대로 12길 15-1 전화 02-423-0525 팩스 02-3432-0525
        <br />
        메일 info@timf.co.kr 영업 및 제휴 문의 sales@timf.co.kr
        <br />
        Copyrightⓒ TeamFresh Co.,Ltd. All Rights Reserved.
      </Text>
      <IconBox>
        <Icon alt='sns 아이콘'></Icon>
        <Icon alt='sns 아이콘'></Icon>
        <Icon alt='sns 아이콘'></Icon>
      </IconBox>
    </Container>
  );
};

export default Footer;
