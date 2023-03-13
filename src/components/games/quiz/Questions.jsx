import React, { useState } from "react";
import Button from "../../Button";

function Questions() {
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(randomNumberInRange(0, data.length - 1));
  };
  const data = [
    { id: 1, question: "вопрос 1" },
    { id: 2, question: "вопрос 2" },
    { id: 3, question: "вопрос 3" },
    { id: 4, question: "вопрос 4" },
    { id: 5, question: "вопрос 5" },
  ];
  return (
    <div className="">
      <div>{data[num].question}</div>
      <Button onClick={handleClick}>Выбрать вопрос</Button>
    </div>
  );
}

export default Questions;
