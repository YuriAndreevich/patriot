import React, { useState } from "react";
import img from "../../assets/svg/menu.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../i18next";
function index() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [activeLang, setActiveLang] = useState(2);

  return (
    <>
      {open ? (
        <div>
          <div
            className="blur-sm z-0 h-screen w-screen fixed  bg-black/[.5] z-10"
            onClick={() => setOpen(!open)}
          ></div>
          <div className="fixed z-50 h-screen transition-all  bg-neutral-900">
            <div class="flex flex-col items-center w-40 h-full overflow-hidden text-gray-400 bg-n-900 rounded">
              <Link to="/" class="flex items-center w-full px-3 mt-3" href="#">
                <span class="ml-2 text-sm font-bold">Патриот</span>
              </Link>
              <div class="w-full px-2">
                <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700 gap-4">
                  <Link
                    to="/news"
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    href="#"
                  >
                    <span class="ml-2 text-sm font-medium">Новости</span>
                  </Link>
                  <Link
                    to="/genocide"
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    href="#"
                  >
                    <span class="ml-2 text-sm font-medium">
                      Незаживающие раны памяти
                    </span>
                  </Link>
                  <Link
                    to="/map"
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    href="#"
                  >
                    <span class="ml-2 text-sm font-medium">
                      Поэтическая карта
                    </span>
                  </Link>
                  <Link
                    to="/weekend"
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    href="#"
                  >
                    <span class="ml-2 text-sm font-medium">
                      Маршруты выходного дня
                    </span>
                  </Link>
                  <Link
                    to="/photomuseum"
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    href="#"
                  >
                    <span class="ml-2 text-sm font-medium">
                      Фотолента музея
                    </span>
                  </Link>
                  <Link
                    to="/games"
                    class="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                    href="#"
                  >
                    <span class="ml-2 text-sm font-medium">Игры</span>
                  </Link>
                </div>
                <div class="flex flex-col items-center w-full mt-2 border-t border-gray-700"></div>
              </div>
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

              <Link
                to="/login"
                class="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
                href="#"
              >
                <svg
                  class="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-2 text-sm font-medium">Личный кабинет</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <img
          src={img}
          alt="menu"
          onClick={() => setOpen(!open)}
          className=" fixed h-16 w-16 top-20 z-50"
        />
      )}
    </>
  );
}

export default index;
