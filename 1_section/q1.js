// 문제 1. a와 b의 값 변경

let a = 1
let b = 2 
console.log(a,b) // 1,2

let temp = a;
a = b;
b = temp;

console.log(a,b) //  2,1

// 문제 2
// A === B : 값과 자료형 같은지
// A !== B : 값과 자료형 다른지
console.log(20 + 30)
console.log("20" + "30")
console.log("Hello" + " " + 2021)
console.log(1 + 2 * 3)
console.log((1 + 3) ** 2)
console.log(1 / 0)  // Infinity
console.log(6 % 2)
console.log(7.5 % 2)
console.log(5 === 5)    // true
console.log(5 == 5) // true
console.log(5 == "5")   // true
console.log(5 === "5")  // false
console.log(5 != 5.0)   // false
console.log(5 !== 5.0)  // false
console.log("true" === true)    // false
console.log(5 <= 5.0)   // true
console.log(5 >= 5) // true
console.log(true || true)   // true
console.log(true || false)  // true
console.log(true && true)   // true
console.log(true && false)  // false
console.log(!true)  // false
console.log(!false) // true