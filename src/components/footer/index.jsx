import Button from "../Button";
import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className=" flex justify-between p-3  m-auto bg-neutral-800 w-screen">
      <div className="flex flex-col">
        <Link to="">Патриот</Link>
        <Link to="">Новости</Link>
        <Link to="">Незаживающие раны памяти</Link>
        <Link to="">Поэтическая карта</Link>
        <Link to="">Маршруты выходного дня</Link>
        <Link to="/photomuseum">Фотомузей «Беларуская хатка»</Link>
        <Link to="/games">Игры</Link>
      </div>
      <div className="flex flex-col">
        Обратная связь
        <input />
        <Button>Отправить</Button>
      </div>

      <a
        href="https://github.com/YuriAndreevich"
        target="_blank"
        rel="noreferrer"
        className="flex"
      >
        <img
          className="h-12 content-center "
          src="https://preview.colorlib.com/theme/stellar/images/clients/icon-github.svg"
          alt="GitHub"
        />
      </a>
    </div>
  );
}

export default index;
