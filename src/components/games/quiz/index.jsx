import React from "react";
import Players from "./Players";
import Questions from "./Questions";
import Counters from "./Counters";

function index() {
  return (
    <div className="container py-20 m-auto ">
      <div className="flex justify-between">
        <Players />
        <Questions />
        <Counters />
      </div>
    </div>
  );
}

export default index;
