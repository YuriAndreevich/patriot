import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="relative flex flex-wrap item-center justify-between px-2 py-3 bg-pink-500 mb-3">
      <Link to="/">Главная</Link>
      <Link to="/genocide">Незаживающие раны памяти</Link>
      <Link to="/games">Игры</Link>
    </nav>
  );
}

export default navbar;
