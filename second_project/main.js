let taskInput = document.getElementById('task-input');
let addButton = document.getElementById("add-button");
let taskList = [];
let tabs = document.querySelectorAll('.task-tabs div');
let mode = 'all';
let filterList = [];
let underLine = document.getElementById('under-line')

addButton.addEventListener("click", addTask);

for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function(event){filter(event)})
}

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
    let list = [];

    if (mode == 'all') {
        list = taskList;
    }
    else if (mode == 'ongoing' || mode == 'done') {
        list = filterList;
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete) {
            resultHTML += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button class="fa-solid fa-rotate-left" onclick="toggleComplete('${list[i].id}')"></button>
                <button class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteTask('${list[i].id}')"></button>
            </div>
        </div>`;
        }
        else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button class="fa-solid fa-check" style="color: #11ff00;" onclick="toggleComplete('${list[i].id}')"></button>
                <button class="fa-solid fa-trash" style="color: #ff0000;" onclick="deleteTask('${list[i].id}')"></button>
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

// All, Not Done, Done 클릭 -> under-line 이동
// Done 탭에는 끝난 아이템만, Not Done 탭은 진행 중인 아이템만
// All 탭은 전체 아이템
function filter(event) {
    mode = event.target.id;
    filterList = [];

    underLine.style.left = event.currentTarget.offsetLeft + "px";
    underLine.style.width = event.currentTarget.offsetWidth + "px";

    if (mode == 'all') {
        render();
    }
    else if (mode == 'ongoing') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete == false) {
                filterList.push(taskList[i])
            }
        }
    }
    else if (mode == 'done') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete == true) {
                filterList.push(taskList[i])
            }
        }
    }

    render();
}