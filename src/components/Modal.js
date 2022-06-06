import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  width: 350px;
  height: 400px;
  border: 1px solid #ccc;
  z-index: 5;
`;
const Btn = styled.button`
  width: 50px;
  height: 30px;
  background: yellowgreen;
  border: 0;
  border-radius: 5px;
`;
const Modal = ({ handleOpen }) => {
  return (
    <Container>
      <h2>배송 가능</h2>
      <p>배송 가능 지역입니다</p>
      <div>다음날 아침 7시 이전에 도착합니다.</div>
      <br />
      <p>
        (관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역 배송 불가)
      </p>
      <Btn
        onClick={() => {
          handleOpen();
        }}
      >
        확인
      </Btn>
    </Container>
  );
};

export default Modal;
