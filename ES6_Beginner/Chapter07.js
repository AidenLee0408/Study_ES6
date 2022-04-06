// 논리 연산자 (AND, OR, NOT)

// 논리 연산자 || (OR)
// 여러개 중 하나라도 true면 true / 즉, 모든 값이 false 일때만 false를 반환, 첫 번째 true를 발견하는 즉시 평가를 멈춤

// OR / 이름이 TOM 이거나, 성인이면 통과
const nameR = "Mike";
const ageR = "30";

if(nameR === 'Tom' || ageR > 19) {
    console.log('통과');
}


// -----------------------------------------------

// 논리 연산자 && (AND)
// 모든 값이 ture면 true / 즉, 하나라도 false면 false를 반환하고 첫번째 false를 발견하는 즉시 평가를 멈춤

const nameA = "Mike";
const ageA = "30";

if(nameA === 'Tom' && ageA > 19) {
    console.log('통과');
}   else {
    console.log('돌아가.');
}


// ------------------------------------------------
// 논리 연산자 ! (NOT)
// true 면 false, false면 true

const ageN = prompt("나이가...?");
const isAdultN = ageN > 19;

if(!isAdultN){
    console.log('돌아가..');
}

console.log('-----------------------');

// ---------------------------------------------------
// 우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = 'F';
const nameJ = 'Jane';
const isAdult = true;

//if(gender === 'M' && nameJ === 'Mike' || isAdult) and가 or보다 우선순위가 높아서 먼저 평가하고 or 에서 성인이기 때문에 무조건 통과가 나온다.
if(gender === 'M' && (nameJ === 'Mike' || isAdult)){ //다음과 같이 괄호를 이용하여 우선순위를 정해줄 수 있다.
    console.log('통과');
} else {
    console.log('돌아가......');
}


