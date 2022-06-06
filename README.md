## 실행 방법

npm install<br/>
npm run start

## 파일 구조

📦src<br/>
┣ 📂components<br/>
┃ ┣ 📜Carousel.js<br/>
┃ ┣ 📜Competency.js<br/>
┃ ┣ 📜Footer.js<br/>
┃ ┣ 📜Header.js<br/>
┃ ┣ 📜ImageRotate.js<br/>
┃ ┣ 📜IntroduceService.js<br/>
┃ ┣ 📜ThreeBox.js<br/>
┃ ┗ 📜Tip.js<br/>
┣ 📂images<br/>
┣ 📂pages<br/>
┃ ┣ 📜Blank.js<br/>
┃ ┣ 📜Delivery.js<br/>
┃ ┣ 📜Home.js<br/>
┃ ┗ 📜Intro.js<br/>
┣ 📜.env<br/>
┣ 📜App.css<br/>
┣ 📜App.js<br/>
┣ 📜App.test.js<br/>
┣ 📜index.css<br/>
┣ 📜index.js<br/>
┣ 📜logo.svg<br/>
┣ 📜reportWebVitals.js<br/>
┗ 📜setupTests.js<br/>

## 과제 1

팀프레시 사이트 클론 코딩

## 과제 2

api를 활용한 새벽배송 가능 여부 구현

## 어려웠던 점

과제 1의 header를 만들 때 styled-components에서 중첩된 셀렉터 내에서 hover가 생각처럼 안돼서 당황했었다.<br/>
과제 2에서 다음 postcode api의 사용이 어려웠다. <br/>
다음 api에서 주소 검색후 나타난 주소를 누르면 새로운 페이지로 넘어가서 받아온 주소 정보를 props로 넘겨줌<br/> ->teamfresh api에 주소 정보를 bod에 입력해 post한 후 배송 가능 여부를 화면에 보여줌<br/>
모든 과정을 할 수 있는데 다음 api의 주소 데이터가 무엇인지 활용하기가 어렵다.<br/>
과제 2에서 헤매서 Delivery 페이지가 2개다. api요청은 성공했지만 주소 활용에 실패했다
