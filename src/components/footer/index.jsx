import React from "react";

function index() {
  return (
    <div className=" flex justify-between p-3 w-8/12 m-auto">
      <div className="">
        <p>Патриот</p>
        <p>Новости</p>
        <p>Незаживающие раны памяти</p>
        <p>Поэтическая карта</p>
        <p>Маршруты выходного дня</p>
        <p>Фотомузей «Беларуская хатка»</p>
        <p>Игры</p>
      </div>
      <div className="flex flex-col">
        Обратная связь
        <input />
        <button>Отправить</button>
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
