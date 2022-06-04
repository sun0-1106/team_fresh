import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/logo_w.png';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Pic = styled.img`
  width: 409px;
  height: 82px;
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
  //과제 1, 과제 2
  return (
    <Container>
      <Pic src={Logo}></Pic>
      <Text onClick={goToOne}>과제 1</Text>
      <Text onClick={goToTwo}>과제 2</Text>
    </Container>
  );
};

export default Intro;
