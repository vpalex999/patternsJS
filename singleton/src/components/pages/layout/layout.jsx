import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <h1>Singleton</h1>
        <nav>
          <Link to="/">Main</Link> &bull; <Link to="/about">About</Link>{" "}
        </nav>
      </header>
      <hr />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
