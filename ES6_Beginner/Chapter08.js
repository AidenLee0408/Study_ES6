// 반복문 loop (for, while, do while) : 동일한 작업을 여러번 반복

/*
    for (let i = 0; i < 10; i++) {
        //반복할 코드
    }
*/

// 1부터 10까지 로그
for(let i = 0; i <= 10; i++) {
    console.log(i+1)
}

// -------------------------------------------
// while
/*
    let i = 0;
    while (i<10) {
        //코드
        i++;
    }
*/ 

let i = 0;

while(i<10) {
    console.log(i);
    i++;
}

// ----------------------------------------------
// do.. while
/*
let i = 0;

do {
    //코드
    i++;
} while (i<10)
*/

// break : 멈추고 빠져나옴
while(true) {
    let answer = confirm("계속 할까요?");
    if(!answer){
        break;
    }
}

// continue : 멈추고 다음 반복으로 진행
// 짝수만

for(let i = 0; i < 10; i++){
    if(i%2){
        continue;
    }
    console.log(i)
}








