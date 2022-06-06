import React from 'react';
import styled from 'styled-components';
//이미지
import company from '../images/main_linkimg01.jpg';
import people from '../images/main_linkimg02.jpg';
import car from '../images/main_linkimg03.jpg';
//아이콘
import arrowIcon from '../images/arrowicon.png';
import line from '../images/line.png';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  //border: 1px solid green;
`;
const BoxWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1087px;
  height: 500px;
  overflow: hidden;
`;
const Box = styled.div`
  width: 348.78px;
  height: 500px;
  border-radius: 15px;
  margin-right: 20px;
  overflow: hidden;
  .photo {
    position: relative;
    top: -40px;
    width: 348.78px;
    height: 500px;
    object-fit: cover;
    filter: brightness(50%);
    transition: all ease 0.5s;
    &:hover {
      filter: brightness(100%);
      transform: scale(1.1);
    }
  }
  .roundArrow {
    opacity: 0;
  }
  .lineImg {
    opacity: 0;
  }
  &:hover {
    //Box를 hover하면
    .lineImg {
      opacity: 100%;
      position: absolute;
      top: 180px;
      z-index: 3;
      width: 15px;
      height: 70px;
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
        brightness(103%) contrast(101%);
    }
    .roundArrow {
      opacity: 100%;
      position: relative;
      bottom: 200px;
      left: 150px;
      width: 40px;
      height: 40px;
      border: 1px solid #000;
      border-radius: 50%;
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(131deg)
        brightness(103%) contrast(101%);
      background-image: url(${arrowIcon});
      background-size: 30px;
      background-repeat: no-repeat;
      background-position: 40% 14px;
      z-index: 10;
    }
  }
`;
const Text = styled.div`
  position: relative;
  top: 15%;
  left: 20%;
  width: 207.266px;
  height: 40px;
  color: #fff;
  z-index: 1;
  font-weight: 500;
  font-size: 40px;
`;
const ThreeBox = () => {
  return (
    <Container>
      <BoxWrapper>
        <Box>
          <Text>News</Text>
          <img className='photo' src={company} />
          <img className='lineImg' src={line} />
          <div className='roundArrow'></div>
        </Box>
        <Box>
          <Text>Recruit</Text>
          <img className='photo' src={people} />
          <img className='lineImg' src={line} />
          <div className='roundArrow'></div>
        </Box>
        <Box>
          <Text>Timf Story</Text>
          <img className='photo' src={car} />
          <img className='lineImg' src={line} />
          <div className='roundArrow'></div>
        </Box>
      </BoxWrapper>
    </Container>
  );
};

export default ThreeBox;
