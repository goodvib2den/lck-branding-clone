# 2021 LCK Branding web | Clone

2021년 국내 League of Legends 리그인 League of Legends Champions Korea(이하 lck) 프렌차이즈 도입과 함께 공개된 브랜딩 웹사이트를 클론해봅니다.

Resource : [LCK Brand page](https://brand.lck.co.kr/)

---

_latest (21/12/14)_

## 🏗 제작 과정

1. 각 `<section>` 태그 별 레이아웃

   각 section 태그 별 레이아웃은 반응형으로 2단계로 나눠 제작하였음  
   section 별 상하 paddding 및 내부 콘텐츠 좌우 안전 padding.

<br>

2. BG-color

   bg-scroll.js를 참고

   _\*화면 리사이즈 시 상단 반응형 elements로 인해 위치 값을 재설정 해줘야함_

<br>

3. Video play visual

   비디오로 플레이되는 섹션 `autoplay`로 구현하고 비율 반응형에 맞춰 제작

<br>
<br>

## 🤦‍♂️ 회고

1. **화면 스크롤과 리사이즈**

   _2021/12/14 화_<br>
   BG color를 바꾸며 느낀 점이 첫 로드시에만 구하기 때문에 화면이 줄어들거나 html 문서의 높이가 짧아지면 다시 구해줘야 한다.

   여기서 문제는 classList로 add를 하게 되면 모든 스크롤과 모든 리사이즈에 반응하기 때문에 한번 classList가 적용되기 시작하면 이후 모든 스크롤과 리사이즈에 계속 추가 계속 삭제되는 단점이 존재한다.

   가장 큰고민은 이게 **버그인지 아닌지**를 모르겠다...<br>
   기능에 큰 버그는 아니지만 비효율적인 것 같다...어떻게 보면 버그라고 할 수 있는건가?
