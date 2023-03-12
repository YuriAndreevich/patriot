import React from "react";
import MemoryGame from "./MemoryGame";
import Card from "../Card";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="container h-5/6 py-20 m-auto flex flex-row gap-3 justify-center">
      <Link to="/games/quiz">
        <Card text="Викторина" />
      </Link>
      <Link to="/games/memorygame">
        <Card text="Найди пару" />
      </Link>
      {/* <MemoryGame /> */}
    </div>
  );
}

export default index;
