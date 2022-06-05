import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid green;
`;
const Image = styled.img`
  width: 100%;
`;
const ImageRotate = () => {
  return (
    <Container>
      <Image alt='이미지gif' />
    </Container>
  );
};

export default ImageRotate;
