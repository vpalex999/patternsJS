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
            <Route path={AppRoute.ABOUT} element={<About />} />
          </Route>
          <Route
            path="*"
            element={
              <>
                <h1>
                  404.
                  <br />
                  <small>Page not found</small>
                </h1>
                <Link to={AppRoute.MAIN}>Go to main page</Link>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
