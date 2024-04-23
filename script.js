const inputLauks =  document.querySelector(".taskInput");
const addButton = document.querySelector(".addButton");
const clearButton = document.querySelector(".clearButton");
const taskContainer = document.querySelector(".taskContainer");

let taskArray = [];

addButton.addEventListener("click", () => {
    taskArray.push(inputLauks.value)

    inputLauks.value = ""

    showTasks()
})

clearButton.addEventListener("click", () => {
    taskArray.length = 0;

    showTasks()
})

const showTasks = () => {
    const uzdevumuSaraksts = taskArray.map((uzdevums, index) => {
        return `<div class="individualTask"><button class="removeButton" onclick="removeTask(${index})">Remove</button><b>${index + 1}.</b> ${uzdevums}</div>`
    })

    taskContainer.innerHTML = uzdevumuSaraksts.join("")
}

const removeTask = (index) => {
    taskArray = taskArray.filter((_, taskIndex) => taskIndex !== index);

    showTasks()
}

window.removeTask = removeTask;
