// Type Conversion 형 변환

// prompt로 입력 받은 값은 무조건 문자형이다.

// 자동 형변환
// "9080" / 2 = 4540, 문자형에 숫자가 적혀있어도 나누기는 문자형을 자동으로 숫자형으로 변환되어 계산된다.

// 명시적 형 변환
// String() -> 문자형으로 변환
console.log(
    String(3), // "3"
    String(true), // true
    String(false), // false
    String(null), //null
    String(undefined) // undefined
)

// Number() -> 숫자형으로 변환
console.log(
    Number("1234abcd"), // -> NaN : 숫자가 아닌 문자가 되어있다면 NaN이 됨
    Number(true), // 1
    Number(false), // 0
    Number(null), // 0
    Number(undefined) // NaN
)

// Boolean() -> 불린형으로 변환
console.log(
    Boolean(0), // false
    Boolean(""), // false
    Boolean(null), // false
    Boolean(undefined), // false
    Boolean(NaN) // false
) // 이외에는 모두  true 값이 나온다.

