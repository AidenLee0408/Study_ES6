// 논리 연산자 (AND, OR, NOT)

// 논리 연산자 || (OR)
// 여러개 중 하나라도 true면 true / 즉, 모든 값이 false 일때만 false를 반환

// OR / 이름이 TOM 이거나, 성인이면 통과
const nameR = "Tom";
const ageR = "30";

if(name === 'Tom' || age > 19) {
    console.log('통과')
}


// -----------------------------------------------

//논리 연산자 && (AND)
// 모든 값이 ture면 true / 즉, 하나라도 false면 false를 반환

const nameN = "Mike";
const ageN = "30";

if(name === 'Tom' && age > 19) {
    console.log('통과')
}   else {
    console.log('돌아가.')
}


// ------------------------------------------------
// 논리 연산자 ! (NOT)
// true 면 false, false면 true





// ---------------------------------------------------
// 우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과

const gender = 'F';
const name = 'Jane';
const isAdult = true;

if(gender === 'M' && name === 'Mike' || isAdult){
    console.log('통과')
    )
}


