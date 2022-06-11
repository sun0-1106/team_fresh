import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo_w.png';
import BackImg from '../images/main_pointimg04.jpg';

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  #bg {
    width: 100%;
    height: 100vh;
    opacity: 0.4;
  }
`;
const Box = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 380px;
`;
const Pic = styled.img`
  width: 300px;
  //object-fit: cover;
`;
const TextBox = styled.div`
  width: 200px;
  height: 180px;
`;
const Text = styled.p`
  font-weight: 600;
  color: #fff;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const Intro = () => {
  const navigate = useNavigate();
  const goToOne = () => {
    navigate('/home');
  };
  const goToTwo = () => {
    navigate('/delivery');
  };

  return (
    <Container>
      <img id='bg' src={BackImg}></img>
      <Box>
        <Pic src={Logo}></Pic>
        <TextBox>
          <Text onClick={goToOne}>과제 1</Text>
          <Text onClick={goToTwo}>과제 2</Text>
        </TextBox>
      </Box>
    </Container>
  );
};

export default Intro;
