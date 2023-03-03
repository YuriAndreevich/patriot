import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
function index() {
  return (
    <nav className="navMenu">
      <Link>Главная</Link>
      <Link>Живые раны памяти</Link>
      <Link>Интерактивная карта</Link>
      <Link>Отдых</Link>
      <div className="dot"></div>
    </nav>
  );
}

export default index;
