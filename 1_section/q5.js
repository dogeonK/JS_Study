// "안녕 내 이름은 제시카야"라는 문장을 프린트하는 함수 'greet’를 만드시오

function greet() {
    console.log("안녕 내 이름은 제시카야")
}
greet()

// 이름을 매개변수로 전달받아 다양한 이름을 프린트 할 수 있게 함수를 수정하시오 예) “안녕 내 이름은 에밀리야”, “안녕 내 이름은 할리야”

function greetName(name) {
    console.log("안녕 내 이름은 " + name + "(이)야.")
}
greetName("에밀리")

// 매개변수로 전달받은 이름을 반환하게 함수를 수정하시오

function rtnName(name) {
    return name
}
let result = rtnName("에밀리")
console.log(result)

// index.js에서 meetAt 함수를 만들어주세요.
/*
인자를 세개 받습니다.
첫번째 인자는 년도에 해당하는 숫자입니다.
두번째 인자는 월에 해당하는 숫자입니다.
세번째 인자는 일에 해당하는 숫자입니다.
년도 인자만 받았을 경우 → "1234년" 과 같은 형식의 문자열을 리턴 해주세요.
년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과 같은 형식의 문자열을 리턴 해주세요.
년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과 같은 형식의 문자열을 리턴 해주세요.
*/

function meetAt(year, month, day) {
    if (month == null) {
        console.log(year + "년")
    }
    else if (day == null) {
        console.log(year + "년" + month + "월")
    }
    else {
        console.log(year + "/" + month + "/" + day)
    }
}

meetAt(2022)
meetAt(2022, 3)
meetAt(2022, 10, 10)

// findSmallestElement 함수를 구현해 주세요.
/*
findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 배열입니다.

arr 의 값들 중 가장 작은 값을 리턴 해주세요.

만일 arr 가 비어있으면 0을 리턴 해주세요.

예를 들어, 다음과 같은 배열이 인자(input)으로 들어왔다면 1이 리턴 되어야 합니다.
이용되는 배열
[100,200,3,0,2,1]
*/

function findSmallestElement(array) {
    if (array.length <= 0) return 0

    let result = array[0]
    for (let i = 1; i < array.length; i++) {
        if (result > array[i]) {
            result = array[i]
        }
    }
    console.log(result)
}
let array = [100,200,3,0,2,1]
findSmallestElement(array)

// 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수를 만드시오
/*
출력예 )

12300인 경우 
50000 X 0
10000 X 1
5000  X 0
1000 X 2
500 X 0
100 X 3
*/

let m_array = [50000, 10000, 5000, 1000, 500, 100]

function changeMoney(price) {
    for (let i = 0; i < m_array.length; i++) {
        console.log(m_array[i] + " X " + Math.floor(price / m_array[i]))
        price %= m_array[i]
    }
}

changeMoney(12300)