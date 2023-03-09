import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="absolute z-10 flex flex-wrap sm:flex-column item-center justify-center gap-10 px-2 py-4 bg-neutral-800">
      <Link to="/" className="hover:text-green-600 hover:transition-all">
        Главная
      </Link>
      <Link to="/news" className="hover:text-green-600 hover:transition-all">
        Новости
      </Link>
      <Link
        to="/genocide"
        className="hover:text-green-600 hover:transition-all"
      >
        Незаживающие раны памяти
      </Link>
      <Link to="/map" className="hover:text-green-600 hover:transition-all">
        Поэтическая карта
      </Link>
      <Link to="/map" className="hover:text-green-600 hover:transition-all">
        Маршруты выходного дня
      </Link>
      <Link to="/map" className="hover:text-green-600 hover:transition-all">
        Фотомузей «Беларуская хатка»
      </Link>
      <Link to="/games" className="hover:text-green-600 hover:transition-all">
        Игры
      </Link>
    </nav>
  );
}

export default navbar;
