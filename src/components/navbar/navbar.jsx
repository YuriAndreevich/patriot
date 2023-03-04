import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="m-10">
      <Link to="/">Главная</Link>
      <Link to="/genocide">Незаживающие раны памяти</Link>
      <Link to="/games">Игры</Link>
    </nav>
  );
}

export default navbar;
