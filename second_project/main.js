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
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
    }

    taskList.push(task);
    render();
}
// 할 일 추가 후 렌더링
function render() {
    let resultHTML = ''

    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete) {
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
            </div>
        </div>`;
        }
        else {
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">Check</button>
                <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
            </div>
        </div>`;
        }

    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

// check 버튼 클릭 (isComplete = true) -> 할 일 종료 & 취소선 추가
function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
}

// task id 랜덤 생성
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// delete 버튼 클릭 -> 할 일 삭제
function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1);
            break;
        }
    }
    render();
}