// Operator - 연산자 (+, -, /, *, %)

// 나머지(%) 사용
// 홀수 : X % 2 = 1
// 짝수 : Y % 2 = 0


// 거듭제곱
const numO = 2**3;
console.log(numO); //8

// 우선순위
//   *, /   >   +, -

// 연산자 줄여쓰기
let num = 10;

num += 5; //num = num+5; 더하기
num -= 5; //num = num-5; 빼기
num *= 5; //num = num*5; 곱하기
num %= 5; //num = num%5; 나머지


// 증가 연산자, 감소 연산자
num++; // 감소 : num--;

console.log(num);

let result = ++num; // 감소 : let result = ++num;

console.log(result);