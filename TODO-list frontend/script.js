
const ul = document.getElementById("list-container");
const input = document.getElementById("input");
const dueDateInput = document.getElementById("duedate");

// Load tasks on page load
window.onload = fetchTasks;

function fetchTasks() {
  fetch("http://localhost:8080/api/tasks")
    .then(response => response.json())
    .then(tasks => {
      ul.innerHTML = "";
      tasks.forEach(task => renderTask(task));
    })
    .catch(error => console.error("Error fetching tasks:", error));
}

function additem() {
  const task = input.value.trim();
  const dueDate = dueDateInput.value;

  if (task === "") {
    alert("Please enter a task...");
    return;
  }

  const taskObj = {
    name: task,
    dueDate: dueDate
  };

  fetch("http://localhost:8080/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(taskObj)
  })
    .then(response => response.json())
    .then(savedTask => {
      renderTask(savedTask);
      input.value = "";
      dueDateInput.value = "";
    })
    .catch(error => console.error("Error adding task:", error));
}

function renderTask(task) {
  const listitem = document.createElement("li");
  const displayText = `${task.name}${task.dueDate ? " (Due: " + task.dueDate + ")" : ""}`;
  listitem.innerHTML = `
    <span>${displayText}</span>
    <button class="delete-btn" onclick="deleteitem(${task.id}, this)">Delete</button>
  `;
  ul.appendChild(listitem);
}

function deleteitem(id, buttonElement) {
  fetch(`http://localhost:8080/api/tasks/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      buttonElement.parentElement.remove();
    })
    .catch(error => console.error("Error deleting task:", error));
}

