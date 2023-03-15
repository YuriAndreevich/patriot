import React, { useState } from "react";

const initialCounters = [
  {
    id: 123,
    value: 10,
  },
  {
    id: 25,
    value: 46,
  },
  {
    id: 36,
    value: 46,
  },
];

function counter() {
  const [counters, setCounters] = useState(initialCounters);
  const [text, setText] = useState("");

  const handleText = () => {
    setText(e.target.value);
  };
  const minus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id == id ? { ...el, value: el.value - 1 } : el
    );
    setCounters(updatedCounts);
  };
  const plus = (id) => {
    const updatedCounts = counters.map((el) =>
      el.id == id ? { ...el, value: el.value + 1 } : el
    );
    setCounters(updatedCounts);
  };
  const addCounter = () => {
    const newCouner = {
      id: Math.random(),
      value: 0,
    };
    setCounters([...counters, newCouner]);
  };
  const removeCounter = (id) => {
    const newListCouners = counters.filter((value) => {
      return value.id !== id;
    });
    setCounters(newListCouners);
  };
  return (
    <div>
      {counters.map((el) => (
        <li key={el.id}>
          <button onClick={() => plus(el.id)}>+</button>
          {el.value}
          <button onClick={() => minus(el.id)}>-</button>
          <button onClick={() => removeCounter(el.id)}>X </button>
        </li>
      ))}
      <input value={text} onChange={handleText} />
      <button onClick={addCounter}>Добавить игрока</button>
    </div>
  );
}

export default counter;
