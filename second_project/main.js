// delete 버튼 클릭 -> 할 일 삭제
// check 버튼 클릭 -> 할 일 종료 & 취소선 추가
// All, Not Done, Done 클릭 -> under-line 이동
// Done 탭에는 끝난 아이템만, Not Done 탭은 진행 중인 아이템만
// All 탭은 전체 아이템

let taskInput = document.getElementById('task-input');
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

// 유저가 값 입력
// + 버튼 클릭 -> 할 일 추가
function addTask() {
    let taskContent = taskInput.value;
    taskList.push(taskContent);
    render();
}
// 할 일 추가 후 렌더링
function render() {
    let resultHTML = ''

    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}