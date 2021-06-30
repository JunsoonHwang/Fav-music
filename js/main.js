const searchEl = document.querySelector('.search');
// 클래스가 search인 요소를 css 선택자로 찾아서 searchEl이라는 변수에 할당
// document = html 자체라고 봐도 무방
const searchInputEl = searchEl.querySelector('input')
// document 대신 searchEl 사용가능, searchEl안에 있는

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 해당 요소에 이벤트 추가(아이콘 포함 인풋창 어디를 눌러도 포커스 가능)

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  // searchEl 요소의 클래스에 focused 라는 클래스 내용을 추가하겠다.
  searchInputEl.setAttribute('placeholder', '통합검색');
  // 해당 요소에 html 요소를 지정하는 메소드, 포커스 시 통합검색 나타남
})
searchInputEl.addEventListener('blur', function () { 
  // blur = 포커스가 해제되면
  searchEl.classList.remove('focused')
  // add >> remove 변경
  searchInputEl.setAttribute('placeholder', '');
})
const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function() {
  //window = 브라우저 창을 의미, 스크롤 시 익명의 함수 실행
  console.log(window.scrollY);
  // 스크롤Y를 통해 지금 화면이 몇 픽셀 지점에 있는지 확인 가능
  if (window.scrollY > 500) { 
    // 배지 숨기기 
    // 화면이 스크롤 될때마다 윈도우에 스크롤Y라는 스크롤값 값이 갱신됌
    // gsap.to(요소, 지속시간(s), 옵션({}))
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300)); // lodash 라는 자바스크립트 라이브러리 메소드
// 300밀리세컨드 = 0.3초
// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  // fade-in 이라는 요소들의 갯수만큼 forEach 내부의 함수가 반복이 됌
  // index 0부터 시작하는 제로베이스드 넘버링
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    // gsap에서 제공하는 지연시키는 기능
    opacity: 1
  });
})