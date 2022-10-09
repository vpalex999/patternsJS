import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import About from "../pages/about/about";

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <Router>
        <header>
          <h1>Singleton</h1>
          <nav>
            <Link to="/">Main</Link> &bull; <Link to="/about">About</Link>{" "}
          </nav>
        </header>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
