import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 139px;
  border: 1px solid gray;
  background-color: #fff;
`;
const Txt = styled.div`
  text-align: left;
  color: red;
  margin-left: 10px;
  margin-bottom: 5px;
`;
const Txt2 = styled.div`
  color: #008bd3;
  width: 40px;
  font-size: 14px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 27px;
`;
const Box = styled.div`
  display: flex;
  width: 95%;
  height: 30px;
  margin-bottom: 10px;
  div {
    margin-left: 10px;
  }
`;
const AddressBox = ({ result }) => {
  return (
    <Container>
      <Txt>06035</Txt>
      <Box>
        <Txt2>도로명</Txt2>
        <div>서울 강남구 가로수길 5</div>
      </Box>
      <Box>
        <Txt2>지번</Txt2>
        <div>서울 강남구 신사동ㅇㅇㅇ</div>
      </Box>
    </Container>
  );
};

export default AddressBox;
