// 배열 (Array) : 순서가 있는 리스트

// 배열의 특징 : 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
let arr=[
    '민수',
    3,
    false,
    {
        name : 'Mike',
        age : 30,
    },
    function(){
        console.log('TEST');
    }
];

// length : 배열의 길이, length는 그 배열이 가지고 있는 요소의 개수를 반환
arr.length

// push(): 배열 끝에 요소를 추가해줄 때 사용한다.
let days = ['월','화','수'];
days.push('목')
console.log(days) //['월','화','수','목']

// shift, unshift 배열 앞에 제거/추가
// 추가 : unshift, 참고로 push와 unshift는 한번에 여러 요소를 추가할 수 있다.
days.unshift('일');
console.log(days) //['일', '월', '화', '수'];

// 제거 : shift
days.shift();
console.log(days) //['월','화','수'];

// 반복문 (for) : length를 통하여 길이를 알 수 있음으로 반복문을 사용할 수 있다.
// let days = ['월','화','수'];

for(let index = 0; index < days.length; index++){
    console.log(days[index])
}

// 반복문 (for ..of) : for문보다 간단하지만 index값을 얻을 수 없다.
// let days = ['월','화','수'];

for(let day of days) {
    console.log(day)
}

// array
let Days = ["mon","tue","wed"];

Days[1] = "화요일";
console.log(Days); // 두번째 요소만 화요일로 바뀜, index를 사용해서 수정이 가능
console.log(Days.length); // 3 출력, 배열의 길이 

Days.push('thu');
console.log(Days); // 배열 뒤에 목요일 추가

Days.unshift("sun");
console.log(Days); // 배열 앞에 일요일 추가

for(let index = 0; index < Days.length; index++) {
    console.log(Days[index]); // for문을 사용하여 요소들을 출력
}

for(let Day of Days) {
    console.log(Day); // for ..of를 사용하여 요소들을 출력
}

