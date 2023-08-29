// 1. 객체 초기화
let name = "dk";
let age = 25;

// let person = {name: name, age: age};
let person = {name, age};

console.log(person);

// 2. Destructuring
let p2 = {
    name2 : "dogeon",
    age2 : 23
}
// let name2 = person.name;
// let age2 = person.age;
let {name2, age2} = p2;

console.log(name2, age2);

// 3. Template Literal
let a = "abc";
let b = 12;

// console.log("안녕하세요. " + a + " def " + b);
console.log(`안녕하세요. ${a} def ${b}`);

// 4. Rest destructuring
let array = [1, 2, 3];

// let t1 = array[0];
// let t2 = array[1];
// let t3 = array[2];
let [t1, t2, t3] = array;
console.log(t1, t2, t3);

// 4 - 1
let [temp, ...rest] = array;
console.log(temp);
console.log(rest);

// 4 - 2
let p3 = {
    n : "x",
    m : "y",
    bool : true
}

let {n, ...restInfo} = p3;
console.log(n, restInfo);

// 4 - 3. Spread
let x = [1, 2];
let y = [3, 4];
let z = [5, 6];

// let result = a.concat(b, c)
let result = [...x, ...y, ...z];
console.log(result);

// 5. function
function foo () {
    console.log("hello")
}
let foo2 = ()=>{
    console.log("hello")
}

// 5 - 1
function r () {
    return "haha";
}
let r2 = ()=>"haha"  // this. 사용 불가

