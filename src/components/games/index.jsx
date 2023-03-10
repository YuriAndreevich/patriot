import React from "react";
import MemoryGame from "./MemoryGame";
import Card from "./Card";

function index() {
  return (
    <div className="container py-20 m-auto">
      <Card text="Найди пару" />
      <Card text="Викторина" />
      {/* <MemoryGame /> */}
    </div>
  );
}

export default index;
