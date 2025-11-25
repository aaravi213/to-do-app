let taskList = [];

// Add Task
function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    taskList.push({ name: text, completed: false });
    input.value = "";
    showTasks();
}

// Show all tasks
function showTasks() {
    const taskBox = document.getElementById("taskBox");
    taskBox.innerHTML = "";

    taskList.forEach((task, index) => {
        const item = document.createElement("div");
        item.className = "taskItem";

        const taskText = document.createElement("p");
        taskText.textContent = task.name;

        if (task.completed) {
            taskText.classList.add("completed");
        }

        taskText.onclick = () => toggleComplete(index);

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "editBtn";
        editBtn.onclick = () => editTask(index);

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delBtn";
        delBtn.onclick = () => deleteTask(index);

        item.appendChild(taskText);
        item.appendChild(editBtn);
        item.appendChild(delBtn);

        taskBox.appendChild(item);
    });
}

// Mark completed
function toggleComplete(i) {
    taskList[i].completed = !taskList[i].completed;
    showTasks();
}

// Edit task
function editTask(i) {
    const newName = prompt("Edit your task:", taskList[i].name);

    if (newName && newName.trim() !== "") {
        taskList[i].name = newName.trim();
        showTasks();
    }
}

// Delete task
function deleteTask(i) {
    taskList.splice(i, 1);
    showTasks();
}
