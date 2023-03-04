import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className=" flex flex-wrap sm:flex-column item-center justify-center gap-20 px-2 py-3 bg-zinc-900 ">
      <Link to="/" className="hover:text-green-600 hover:transition-all">
        Главная
      </Link>
      <Link
        to="/genocide"
        className="hover:text-green-600 hover:transition-all"
      >
        Незаживающие раны памяти
      </Link>
      <Link to="/map" className="hover:text-green-600 hover:transition-all">
        Интерактивная карта
      </Link>
      <Link to="/games" className="hover:text-green-600 hover:transition-all">
        Игры
      </Link>
    </nav>
  );
}

export default navbar;
