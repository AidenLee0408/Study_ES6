// 문자형 - string
const name = "Aiden";
const age = 21;

const name1 = "Aiden"
const name2 = 'Aiden'
const name3 = `Aiden`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;

const message4 = `나는 {30+1}살 입니다.`;
console.log(message4)

// 숫자형 - Number
const ageN = 30;
const PI = 3.14;

console.log(1 + 2); //더하기
console.log(10 - 3); //빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 4); // % 나머지

const x = 1/0; // 1을 0으로 나누기
console.log(x) // Infinity(무한대)를 얻을 수 있다.

const nameN = "Aiden";
const y = nameN/2;

console.log(y) // -> 문자열을 숫자로 나누면 NaN이 나온다, NaN = Not a number

// 참과 거짓 - Boolean

const a = true; // 참
const b = false; // 거짓

const nameB = "Aiden";
const ageB = 21;

console.log(nameB == 'Aiden')
console.log(ageB > 40)

// null과 Undefined

let ageu;
console.log(ageu) // 변수를 선언만 하고 할당하지 않으면 Undefined가 나옵니다.

let user = null; // user가 비어있다는것을 명시

// typeof 연산자

const namet = "Aiden";

console.log(typeof 3); // number
console.log(typeof namet); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); // object
console.log(typeof undefined); //undefined

// Tip
const nameT = "Mike";
const messageT = `My name is ${nameT}`;

const messageT2 = "My name is ${nameT}"; 
console.log(messageT2) // -> 일반 따옴표로 작성하면 변수명이 그대로 노출되니 주의

const nameT2 = "Aiden";

const aT = "나는 ";
const bT = " 입니다."; 

console.log(aT + nameT2 + bT); // -> "나는 Aiden 입니다."

const ageT = 21; // number
console.log(aT + ageT + "살" + bT)


