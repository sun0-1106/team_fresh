import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 270px;
  padding: 29px 39px;
  background-color: #fff;
  border: 2px solid #e0e0e0;
  color: black;
  text-align: left;
  font-size: 14px;
`;
const Bold = styled.span`
  font-weight: 600;
  font-size: 20px;
`;
const Ex = styled.div`
  color: #008bd3;
  margin-bottom: 10px;
  font-size: 13px;
`;
const Tip = () => {
  return (
    <Box>
      <Bold>tip</Bold>
      <br />
      아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가 검색됩니다.
      <br />
      <br />
      도로명 + 건물번호
      <br />
      <Ex>예) 판교역로 235, 제주 첨단로 242</Ex>
      <br />
      지역명(동/리) + 번지
      <br />
      <Ex>
        예) 삼평동 681, 제주 영평동 2181 <br />
      </Ex>
      지역명(동/리) + 건물명(아파트명)
      <Ex>예) 분당 주공, 연수동 주공3차</Ex>
      사서함명 + 번호
      <Ex>예) 분당우체국사서함 1~100</Ex>
    </Box>
  );
};

export default Tip;
