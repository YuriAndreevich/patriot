import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

function index() {
  return (
    <div className="  w-screen  bg-neutral-900">
      <div className="w-2/3 flex justify-between p-3 m-auto items-center">
        <div className=" flex flex-col ">
          <Link to="/" className="hover:text-green-600 hover:transition-all">
            Главная
          </Link>
          <Link
            to="/news"
            className="hover:text-green-600 hover:transition-all"
          >
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
          <Link
            to="/weekend"
            className="hover:text-green-600 hover:transition-all"
          >
            Маршруты выходного дня
          </Link>
          <Link
            to="/photomuseum"
            className="hover:text-green-600 hover:transition-all"
          >
            Фотолента музея «Беларуская хатка»
          </Link>
          <Link
            to="/games"
            className="hover:text-green-600 hover:transition-all"
          >
            Игры
          </Link>
        </div>
        <div className="flex flex-col gap-y-2">
          Обратная связь
          <span>Почта </span>
          <input />
          Сообщение
          <input />
          <Button>Отправить</Button>
        </div>

        <a
          href="https://github.com/YuriAndreevich"
          target="_blank"
          rel="noreferrer"
          className="лflex"
        >
          <img
            className="h-12 content-center "
            src="https://preview.colorlib.com/theme/stellar/images/clients/icon-github.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}

export default index;
