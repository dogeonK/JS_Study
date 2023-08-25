// 5번의 기회 다쓰면 게임 끝남 -> 버튼 disable

// 유저가 범위 밖(1~100) 숫자 입력하면 알려준다. 기회는 안깎음
// 유저가 이미 입력한 숫자 입력하면 알려준다. 기회는 안깎음

let randomNumber = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chance = 5
let chanceArea = document.getElementById("chance-area")
let gameOver = false

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)

// 랜덤 번호 생성
function pickRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1
}

// 맞추면 -> 맞췄습니다!
// 랜덤 번호 < 유저 번호 -> Down!
// 랜덤 번호 > 유저 번호 -> Up!
function play() {
    let userValue = userInput.value

    chance--;
    chanceArea.textContent = `남은 기회 : ${chance}`
    if (randomNumber == userValue) {
        resultArea.textContent = "정답!"
    }
    else if (randomNumber > userValue) {
        resultArea.textContent = "Up!"
    }
    else if (randomNumber < userValue) {
        resultArea.textContent = "Down!"
    }

    if (chance < 1) {
        gameOver = true
    }
    if (gameOver) {
        playButton.disabled = true
    }
}

// 리셋 버튼 누르면 게임 리셋
function reset() {
    // input 창 비우기
    userInput.value = ""
    // 새로운 랜덤 번호 생성
    pickRandomNumber()

    playButton.disabled = false

    chance = 5
    chanceArea.textContent = `남은 기회 : ${chance}`
    resultArea.textContent = "결과 값이 여기 나옵니다!"
}