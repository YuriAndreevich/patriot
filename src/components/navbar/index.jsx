import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18next";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuth, logout } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import admin from "../../assets/svg/admin.svg";
function navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [activeLang, setActiveLang] = useState(2);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы");
  };

  return (
    <nav className="fixed z-10 w-screen flex flex-wrap sm:flex-column items-center justify-center gap-10 px-2 py-5 bg-neutral-900">
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
      <Link to="/weekend" className="hover:text-green-600 hover:transition-all">
        Маршруты выходного дня
      </Link>
      <Link
        to="/photomuseum"
        className="hover:text-green-600 hover:transition-all"
      >
        Фотолента музея «Беларуская хатка»
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
      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? (
          <>
            <Link to="/admin">
              <img src={admin} alt="" className="h-8 w-8 mr-4" />
            </Link>
            <button onClick={logoutHandler}>Выйти</button>{" "}
          </>
        ) : (
          <Link to={"/login"}> Войти </Link>
        )}
      </div>
    </nav>
  );
}

export default navbar;
