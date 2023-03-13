import React from "react";
import MemoryGame from "./MemoryGame";
import Card from "../Card";
import { Link } from "react-router-dom";
import memory from '../../assets/games/1.png'

function index() {
  return (
    <div className="container h-5/6 py-20 m-auto flex flex-row gap-3 justify-center">
      <Link to="/games/quiz">
        <Card text="Викторина" src={memory} />
      </Link>
      <Link to="/games/memorygame">
        <Card text="Найди пару" src={memory} />
      </Link>
      {/* <MemoryGame /> */}
    </div>
  );
}

export default index;
