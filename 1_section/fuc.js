function makeBurger(type, size, num) {
    console.log("빵")
    console.log("상추")
    if (type != null) {
        console.log(type + "패티")
    }
    else {
        console.log("고기패티")
    }
    console.log("빵")

    console.log("사이즈 :" + size, num + "개")

    return "준비 완료"
}

function serveCoke() {
    console.log("얼음")
    console.log("콜라")
}


let result = makeBurger("새우", "s", 2)
console.log(result)