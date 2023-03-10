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
    </nav>
  );
}

export default navbar;
