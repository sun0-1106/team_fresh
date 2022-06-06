import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ImageRotate from '../components/ImageRotate';
import IntroduceService from '../components/IntroduceService';
import Competency from '../components/Competency';
import Footer from '../components/Footer';

const Container = styled.div`
  width: 100%;
`;
const WhiteBox = styled.div`
  width: 100%;
  padding: 200px 0;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
`;
const Home = () => {
  return (
    <Container>
      <Header />
      <Carousel />
      <WhiteBox>
        안전하고 신속하게 고객에 먹거리를 제공하고 있습니다.
        <br />
        국내 유일 Door to Door Cold Chain Service, 팀프레시를 만나보세요.
      </WhiteBox>
      <ImageRotate />
      <IntroduceService />
      <Competency />
      <div>박스 3개</div>
      <Footer />
      <Footer />
      <Footer />
    </Container>
  );
};

export default Home;
