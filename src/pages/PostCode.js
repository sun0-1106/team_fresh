import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const PostCode = () => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
  const handlePostCode = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '-100px',
    width: '600px',
    height: '970px',
    padding: '7px',
  };

  return (
    <div>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
    </div>
  );
};

export default PostCode;
