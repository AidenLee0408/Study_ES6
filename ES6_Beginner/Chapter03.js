// 사용자와 상호작용하는 대화상자
// alert - 알려주는 역할
// prompt - 입력받는 역할
// confirm - 확인받는 역할

const name = prompt("이름을 입력하세요.");
alert("환영합니다." + name + "님");

const date = prompt("예약하신 날짜를 입력해주세요", "2022-03"); //다음과 같이 디폴트 값을 줄 수 있음

const isAdult = confirm("당신은 성인 입니까?"); // -> alert와 다른점은 확인과 함께 취소버튼도 있다는것

console.log(isAdult) // -> 확인을 누른다면 true를 반환, 취소를 누른다면 false를 반환

/* 이렇게 기본으로 제공되는 창들의 단점
    1. 스크립트 일시 정지
    2. 스타일링 x, 브라우저마다 다름
 */