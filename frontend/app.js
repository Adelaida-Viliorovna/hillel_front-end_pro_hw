document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  async function fetchTodos() {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error("Error fetching todos");
      }
      return response.json();
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  }

  async function addTodo(text) {
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!response.ok) {
        throw new Error("Error creating todo");
      }
      return response.json();
    } catch (err) {
      console.error("Error creating todo:", err);
    }
  }

  async function updateTodo(id, completed) {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
      });
      if (!response.ok) {
        throw new Error("Error updating todo");
      }
      return response.json();
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  }

  async function deleteTodo(id) {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Error deleting todo");
      }
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  }

  async function renderTodos() {
    const todos = await fetchTodos();
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.completed ? "todo-item--checked" : ""}`;
      li.innerHTML = `
                <input type="checkbox" ${
                  todo.completed ? "checked" : ""
                } data-id="${todo._id}">
                <span class="todo-item__description">${todo.text}</span>
                <button class="todo-item__delete" data-id="${
                  todo._id
                }">Delete</button>
            `;
      todoList.appendChild(li);
    });
  }

  todoForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo) {
      await addTodo(newTodo);
      todoInput.value = "";
      renderTodos();
    }
  });

  todoList.addEventListener("click", async (e) => {
    const todoId = e.target.dataset.id;

    if (e.target.tagName === "INPUT") {
      const todo = await fetch(`http://localhost:3000/todos/${todoId}`).then(
        (res) => res.json()
      );
      const completed = !todo.completed;
      await updateTodo(todoId, completed);
      renderTodos();
      console.log("Updating todo", todoId, completed);
    } else if (e.target.classList.contains("todo-item__delete")) {
      await deleteTodo(todoId);
      renderTodos();
    }
  });

  renderTodos();
});
