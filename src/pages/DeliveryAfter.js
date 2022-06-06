import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 800px;
  border: 1px solid #ccc;
`;
const Address = styled.div`
  width: 95%;
  height: 50px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 50px;
  margin-bottom: 5px;
`;
const Search = styled.input`
  width: 95%;
  height: 50px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
`;
const Btn = styled.button`
  width: 95%;
  height: 50px;
  background-color: rgba(2, 21, 48, 0.9);
  color: #fff;
  border-radius: 5px;
`;
const DeliveryAfter = () => {
  const { state } = useLocation();
  console.log(state);

  const postAddress = async () => {
    try {
      const res = await axios.post(
        'https://tmsapidev.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest',
        { addrBasic: state.fullAddress },
        {
          headers: {
            'Content-Type': 'application/json',
            charset: 'utf-8',
          },
        },
      );
      if (res.data) {
        console.log(res.data);
        alert('배송 가능 지역입니다');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Address>{state.data.zonecode}</Address>
      <Address>{state.fullAddress}</Address>
      <Search placeholder='나머지 주소를 입력해주세요'></Search>
      <Btn
        onClick={() => {
          postAddress();
        }}
      >
        주소 입력
      </Btn>
      <div>
        배송 불가 장소 안내
        <br />
        [하단 리스트 참고]
        관공서/군사지역/학교/병원/시장/백화점/산업단지/도서산간지역 <br />
        <br />
        일부 장소가 배송 가능으로 검색될 수 있으나 배송불가지역이므로 참고
        바랍니다. <br /> <br />
        [공공시설] <br /> 관공서: 국회, 우체국, 수자원공사 등 군사지역: 군부대,
        군인아파트, 위병소 등 교정시설: 교도소, 구치소 등 [차량출입제한] <br />
        학교: 초등학교, 중학교, 고등학교 지하철, 공원, 유원지 그 외 차량 통제
        지역 <br /> <br />
        [기타] <br /> 대학교, 백화점, 병원(임시 지정), 시장, 마트, 공터,
        가건물(가로판매대, 비닐하우스 등), 공사장, 산업단지, 물류단지, 고속도로
        휴게소, 공공시설 무인택배함, 도서산간지역 등
      </div>
    </Container>
  );
};

export default DeliveryAfter;
