// 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
let num = 0

if (num > 0) {
    console.log("positive")
}
else if (num == 0) {
    console.log("zero")
}
else {
    console.log("negative")
}

/* 나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오
90~100 : A
80~89 : B
70~79 : C
60~69 : D
less than 59 : F */

let score = 80

if (score >= 90 && score <= 100) {
    console.log("A")
}
else if (score >= 80 && score <= 89) {
    console.log("B")
}
else if (score >= 70 && score <= 79) {
    console.log("C")
}
else if (score >= 60 && score <= 69) {
    console.log("D")
}
else if (score >= 0 && score <= 59) {
    console.log("F")
}
else {
    console.log("score error")
}

// 한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
// let skills = ["HTML","CSS","Javascript","React"]
// Javascript와 React 둘다 할줄 안다면 “합격!” Javascript와 React 둘중 하나만 할줄 안다면 “예비”, 두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오

let skills = ["HTML", "CSS", "Javascript", "React"]

if (skills.includes("Javascript") && skills.includes("React")) {
    console.log("합격!")
}
else if (skills.includes("Javascript") || skills.includes("React")) {
    console.log("예비")
}
else {
    console.log("탈락")
}