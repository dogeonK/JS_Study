let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];

// map 문제
// 모든 이름을 대문자로 바꾸어서 출력하시오.
let upperCaseName = names.map((item) => {
    return item.toUpperCase()
})

console.log(upperCaseName);

// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
let firstName = names.map((item) => {
    return item.split(" ")[0]
})

console.log(firstName);

// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])
let initial = names.map((item) => {
    let splitList = item.split(" ");
    let initialName = ""
    splitList.forEach((name) => {
        initialName += name[0]
    })

    return initialName
})

console.log(initial)

// filter 문제
// 이름에 a를 포함한 사람들을 출력하시오.
let aNames = names.filter((item) => {
    return item.includes("a")
})

console.log(aNames)

// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)
let continuesLetter = names.filter((item) => {
    let name = item.split("")
    return name.some((letter, index) => {
        return letter == name[index + 1]
    })
})

console.log(continuesLetter)

// some 문제
// 전체 이름의 길이가 20자 이상인 사람이 있는가?
let nameLength = names.some((item) => {
    return item.length >= 20;
})

console.log(nameLength)

// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)
let pNames = names.some((item) => {
    let fName = item.split(" ");
    fName.pop();
    return fName.some((letter) => {
        return letter.toUpperCase().includes("P")
    })
})

console.log(pNames)

// every 문제
// 모두의 전체 이름의 길이가 20자 이상인가?
let everyLength = names.every((item) => {
    return item.length >= 20;
})

console.log(everyLength)

// 모두의 이름에 a 가 포함되어 있는가?
let everyA = names.every((item) => {
    return item.includes("a")
})

console.log(everyA)

// find 문제
// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
let findLength = names.find((item) => {
    return item.length >= 20
})

console.log(findLength)

// 미들네임이 포함되어있는 사람을 찾으시오.(예-Steven Paul Jobs)
let findMiddle = names.find((item) => {
    let splitName = item.split(" ")
    return splitName.length >= 3
})

console.log(findMiddle)

// findIndex 문제
// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
let findIdxLen = names.findIndex((item) => {
    return item.length >= 20
})

console.log(findIdxLen)

// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.
let middleIdx = names.findIndex((item) => {
    return item.split(" ").length >= 3
})

console.log(middleIdx)