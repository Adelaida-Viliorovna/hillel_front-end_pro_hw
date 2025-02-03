import { useState, useEffect } from "react";
import "../App.css";

function Home() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div>
      <h2>Список TODO</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Нова задача" />
      <button onClick={addTodo}>Додати</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => removeTodo(index)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
