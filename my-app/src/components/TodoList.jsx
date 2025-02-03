import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  const removeTodo = (index) => {
    dispatch({ type: "REMOVE_TODO", payload: index });
  };

  const clearTodos = () => {
    dispatch({ type: "CLEAR_TODOS" });
  };

  return (
    <div>
      <h1>TODO</h1>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Додати</button>

      <h2>TODOS</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            <button onClick={() => removeTodo(index)}>Видалити</button>
          </li>
        ))}
      </ul>
      <p>Всього: {todos.length}</p>
      <button onClick={clearTodos}>Очистити</button>
    </div>
  );
};

export default TodoList;
