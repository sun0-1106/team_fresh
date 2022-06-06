import React, { useState } from 'react';
import styled from 'styled-components';
import PostCode from './PostCode';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 620px;
  height: 800px;
`;
const Delivery2 = () => {
  return (
    <Container>
      <PostCode />
    </Container>
  );
};

export default Delivery2;
