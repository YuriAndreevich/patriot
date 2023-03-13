import React from "react";
import Players from "./Players";
import Questions from "./Questions";

function index() {
  return (
    <div className="container py-20 m-auto ">
      <div className="flex justify-between">
        <Players />
        <Questions />
      </div>
    </div>
  );
}

export default index;
