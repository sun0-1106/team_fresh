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
const Home = () => {
  return (
    <Container>
      <Header />
      {/* <Carousel />
      <p>
        안전하고 신속하게 고객에 먹거리를 제공하고 있습니다.
        <br />
        국내 유일 Door to Door Cold Chain Service, 팀프레시를 만나보세요.
      </p>
      <ImageRotate />
      <IntroduceService />
      <Competency />
      <div>박스 3개</div>
      <Footer /> */}
    </Container>
  );
};

export default Home;
