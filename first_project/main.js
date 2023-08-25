
// 번호 입력 -> go 버튼 누름



// 리셋 버튼 누르면 게임 리셋
// 5번의 기회 다쓰면 게임 끝남 -> 버튼 disable

// 유저가 범위 밖(1~100) 숫자 입력하면 알려준다. 기회는 안깎음
// 유저가 이미 입력한 숫자 입력하면 알려준다. 기회는 안깎음

let randomNumber = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click", play)

// 랜덤 번호 생성
function pickRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1
}

// 맞추면 -> 맞췄습니다!
// 랜덤 번호 < 유저 번호 -> Down!
// 랜덤 번호 > 유저 번호 -> Up!
function play() {
    let userValue = userInput.value
    if (randomNumber == userValue) {
        resultArea.textContent = "정답!"
    }
    else if (randomNumber > userValue) {
        resultArea.textContent = "Up!"
    }
    else if (randomNumber < userValue) {
        resultArea.textContent = "Down!"
    }
}