const todoList = document.getElementById("todo-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

todoList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" && event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});

addTaskButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const newTask = document.createElement("li");
        newTask.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
        todoList.appendChild(newTask);
        newTaskInput.value = "";
    } else {
        alert("Будь ласка, введіть текст завдання!");
    }
});