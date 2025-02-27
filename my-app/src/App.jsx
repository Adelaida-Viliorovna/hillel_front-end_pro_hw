// my-app\src\App.jsx

import TodoList from "./components/TodoList";
import Swapi from "./components/Swapi";
import { AboutMe } from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <TodoList />
      <hr />
      <Swapi />
      <hr />
      <AboutMe />
    </div>
  );
};

export default App;
