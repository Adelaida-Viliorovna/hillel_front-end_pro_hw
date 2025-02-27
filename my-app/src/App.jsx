// my-app\src\App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import Swapi from "./components/Swapi";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/swapi" element={<Swapi />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

