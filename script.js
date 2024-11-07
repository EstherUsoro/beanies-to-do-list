function addTodo() {
    const input = document.getElementById("todoInput");
    const todoText = input.value.trim();
    if (todoText === "") return;

    const todoList = document.getElementById("todoItems");

    const listItem = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = todoText;

    const status = document.createElement("span");
    status.classList.add("status", "in-progress");
    status.textContent = "In Progress";

    status.onclick = () => {
        if (status.classList.contains("in-progress")) {
            status.classList.remove("in-progress");
            status.classList.add("completed");
            status.textContent = "Completed";
        } else {
            status.classList.remove("completed");
            status.classList.add("in-progress");
            status.textContent = "In Progress";
        }
    };

    listItem.appendChild(taskText);
    listItem.appendChild(status);
    todoList.appendChild(listItem);

    input.value = "";
}
