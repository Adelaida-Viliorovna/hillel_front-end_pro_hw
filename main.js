document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    let todos = localStorage.getItem('todos') 
    ? JSON.parse(localStorage.getItem('todos')) 
    : [];

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'todo-item--checked' : ''}`;
            li.innerHTML = `
                <input type="checkbox" ${todo.completed ? 'checked' : ''} data-index="${index}">
                <span class="todo-item__description">${todo.text}</span>
                <button class="todo-item__delete" data-index="${index}">Delete</button>
            `;
            todoList.appendChild(li);
        });
    }

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = { text: todoInput.value.trim(), completed: false };
        if (newTodo.text) {
            todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
            todoForm.reset();
        }
    });

    todoList.addEventListener('click', (event) => {
        const index = event.target.dataset.index;
        
        if (event.target.tagName === 'INPUT') {
            todos[index].completed = event.target.checked;
        } else if (event.target.classList.contains('todo-item__delete')) {
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            event.target.parentElement.remove();
        }

        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    });

    renderTodos();
});
