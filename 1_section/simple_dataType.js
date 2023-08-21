let temp = "123" + 1;
console.log(temp);

let num = 123 + 1;
console.log(num);

let bool = true;
console.log(bool);

// 증가연산
let a =1
a++ // a=a+1과같다 
console.log(a)  // 2

//감소연산
let b =2 
b-- // b=b-1과 같다
console.log(b)  // 1 

//단축된 연산자
let c =1
c+=3 // c=c+3을 줄여서 표현한 것이다
console.log(c)  //4

let d = 3
d-=2 // d=d-2를 줄여서 표현한 것이다 
console.log(d)  //1

// NOT 연산자 : 어떤값의 반대되는 값을 반환 true 면 false를, false면 true를 반환 
let f = true
console.log(!f) // false 

// 같다라는 표현은 ==  
let x = 2
let y =2 
console.log(x == y) // true

//다르다라는 표현은 != 
console.log(x != y) // false

// 배열
let fruit = ["apple", "orange", "banana", "mango"]
console.log(fruit)
console.log(fruit[0])

fruit[0] = "cherry"
console.log(fruit)

// pop
fruit.pop()
console.log(fruit)

// push
fruit.push("pineapple")
console.log(fruit)

// includes : 포함 여부
console.log(fruit.includes("apple"))
console.log(fruit.includes("banana"))

// indexOf : 인덱스 번호
console.log(fruit.indexOf("banana"))

// slice : (시작점, 끝점), 끝점 미포함, 기존 배열 건드리지 않음
console.log(fruit.slice(2))
console.log(fruit.slice(1, 3))
console.log(fruit)
// splice : (시작점, 개수), 기존 배열 반영
console.log(fruit.splice(2, 1))
console.log(fruit)