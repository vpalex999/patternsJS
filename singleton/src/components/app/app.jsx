import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import About from "../pages/about/about";
import { AppRoute } from "../../const";
import Layout from "../pages/layout/layout";

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
