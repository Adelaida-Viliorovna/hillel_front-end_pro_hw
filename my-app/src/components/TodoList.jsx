// my-app\src\components\TodoList.jsx

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch({ type: "FETCH_TODOS" });
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text.trim().length >= 5) {
      dispatch({ type: "ADD_TODO_REQUEST", payload: text });
      setText("");
    } else {
      alert("Завдання повинно містити щонайменше 5 символів.");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO_REQUEST", payload: id });
  };

  const handleClearTodos = () => {
    dispatch({ type: "CLEAR_TODOS_REQUEST" });
  };

  const handleToggleComplete = (id, completed) => {
    dispatch({ type: "TOGGLE_COMPLETE_TODO", payload: { id, completed: !completed } });
  };
  
  return (
    <div>
      <h1>TODO</h1>
      <input name="input-new-todo" value={text} onChange={(e) => setText(e.target.value)} />
      <button name="add-new-todo" onClick={handleAddTodo}>Додати</button>

      <h2>TODOS</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo._id, todo.completed)}
            />
            <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </p>
            <button name="dlt-todo" onClick={() => handleRemoveTodo(todo._id)}>Видалити</button>
          </li>
        ))}
      </ul>
      <p>Всього: {todos.length}</p>
      <button name="dlt-all-todos" onClick={handleClearTodos}>Очистити</button>
    </div>
  );
};

export default TodoList;