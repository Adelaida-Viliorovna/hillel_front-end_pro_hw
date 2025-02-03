import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ErrorBoundary>
      <div className="app">
        <header>
          <nav>
            <Link to="/">Головна</Link>
            <Link to="/contacts">Контакти</Link>
            <Link to="/about">Про мене</Link>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? "Темна" : "Світла"} тема
            </button>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App
