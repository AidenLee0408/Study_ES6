// 비교 연산자, 조건문

// 비교연산자
console.log(10 > 5); // true
console.log(10 == 5); // false, 동등 연산자
console.log(10 != 5); // true

// 동등 연산자
const a = 1;
const b = "1";

console.log(a == b); // true
console.log(a === b); // false, =을 3번 쓰면 타입까지 비교하는 일치 연산자

// 조건문 if, else, else if
// 추가 요구사항 :19살이면 수능 잘 보세요 라는 문구를 보여주기
// age === 19

const age = 19;

if(age > 19) {
    console.log('환영 합니다.');
} else if(age === 19) {
    console.log("수능 잘 보세요.");
} else{
    console.log('안녕히 가세요.');
}

console.log("-------------------");
