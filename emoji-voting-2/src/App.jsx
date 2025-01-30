import React, { useState, useEffect } from "react";
import "./App.css";
const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodoList([...todoList, newTodo]);
    setNewTodo('');
  };

  return (
    <>
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Введіть завдання"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  )
}
const EmojiVoting = () => {
  const [emojis, setEmojis] = useState(() => {
    const savedVotes = JSON.parse(localStorage.getItem("votes"));
    console.log("Ініціалізація стану emojis:", savedVotes || {
      "😊": 0,
      "😂": 0,
      "😍": 0,
      "😢": 0,
      "😎": 0,
    });
    return savedVotes || {
      "😊": 0,
      "😂": 0,
      "😍": 0,
      "😢": 0,
      "😎": 0,
    };
  });

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    console.log("Зміни у стані emojis. Збереження у localStorage:", emojis);
    localStorage.setItem("votes", JSON.stringify(emojis));
  }, [emojis]);

  const handleVote = (emoji) => {
    console.log(`Голос за смайлик ${emoji}`);
    setEmojis((prevEmojis) => {
      const updatedEmojis = {
        ...prevEmojis,
        [emoji]: prevEmojis[emoji] + 1,
      };
      console.log("Оновлений стан emojis:", updatedEmojis);
      return updatedEmojis;
    });
  };

  const handleShowResults = () => {
    console.log("Показуємо результати...");
    const maxEmoji = Object.keys(emojis).reduce((a, b) =>
      emojis[a] > emojis[b] ? a : b
    );
    console.log("Переможець:", maxEmoji);
    setWinner(maxEmoji);
  };

  const handleClearResults = () => {
    console.log("Очищення результатів...");
    const resetEmojis = {
      "😊": 0,
      "😂": 0,
      "😍": 0,
      "😢": 0,
      "😎": 0,
    };
    console.log("Скидання стану emojis:", resetEmojis);
    setEmojis(resetEmojis);
    setWinner(null);
    localStorage.removeItem("votes");
  };

  return (
    <div>
      <h2>Голосування за смайлик</h2>
      <div className="emoji-container">
        {Object.keys(emojis).map((emoji) => (
          <div className="emoji-card" key={emoji}>
            <button onClick={() => handleVote(emoji)}>{emoji}</button>
            <p>{emojis[emoji]}</p>
          </div>
        ))}
      </div>
      <div className="btn">
        <button onClick={handleShowResults}>Показати результати</button>
        <button onClick={handleClearResults}>Очистити результати</button>
      </div>
      {winner && <h3>Переможець: {winner}</h3>}
    </div>
  );
};


const App = () => {
  return (
    <>
      <TodoList />
      <EmojiVoting />
    </>
  )
}
export default App;
