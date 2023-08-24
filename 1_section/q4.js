// 1부터 100까지 더하는 for문을 만들고 결과를 출력하시오.

let result = 0
for (let i = 1; i <= 100; i++) {
    result += i
}
console.log(result)

// 1부터 100까지 홀수만 출력하자.

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

// 1부터 50까지 369결과를 프린트하자.

for (let i = 1; i <= 50; i++) {
    if (i % 10 == 3 || i % 10 == 6 || i % 10 == 9) {
        console.log("짝")
    }
    else {
        console.log(i)
    }
}

// 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.
let num = 7
let prime = true

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        prime = false
    }
}
console.log(prime)