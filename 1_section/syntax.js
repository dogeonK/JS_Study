// if
let age = 18

if(age > 20 && age < 30) {
    console.log("if")
}
else if (age >= 18) {
    console.log("else if")
}
else {
    console.log("else")
}

let a = 1
let b = "1"

console.log(a==b)
console.log(a===b)

// switch
let menu = 3

switch(menu) {
    case 1 : {
        console.log("물건 사기")
        break
    }
    case 2 : {
        console.log("잔고 확인")
        break
    }
    case 3 : {
        console.log("히스토리 확인")
        break
    }
    default : {
        console.log("홈으로 돌아가기")
        break
    }
}

// 삼항
let answer = menu <=3 ? console.log("true") : console.log("false")