import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18next";

function navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [activeLang, setActiveLang] = useState(2);

  return (
    <nav className="fixed z-10 w-screen flex flex-wrap sm:flex-column items-center justify-center gap-10 px-2 py-5 bg-neutral-800">
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
      <Link
        to="/photomuseum"
        className="hover:text-green-600 hover:transition-all"
      >
        Фотомузей «Беларуская хатка»
      </Link>
      <Link to="/games" className="hover:text-green-600 hover:transition-all">
        Игры
      </Link>

      <div className="navbar-menu-help-lang">
        <span
          className={activeLang === 1 && "text-green-600"}
          onClick={() => {
            changeLanguage("bel");
            setActiveLang(1);
          }}
        >
          Рус
        </span>
        /
        <span
          className={activeLang === 2 && " text-green-600"}
          onClick={() => {
            changeLanguage("ru");
            setActiveLang(2);
          }}
        >
          Бел
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
      </svg>
    </nav>
  );
}

export default navbar;
