import { useState } from "react";
import Button from "../../Button";

const Quiz = () => {
  const [num, setNum] = useState(0);
  const [players, addPlayers] = useState([]);
  const [value, setValue] = useState("");

  const addPlayerInput = (e) => {
    setValue(e.target.value);
  };
  const addPlayerList = () => {
    if (value !== "") {
      addPlayers([...players, value]);
      setValue("");
    }
  };
  const deletePlater = (playerId) => {
    const newListPlayer = players.filter((value) => {
      return value !== playerId;
    });
    addPlayers(newListPlayer);
  };

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 5));
  };

  return (
    <div className="container py-20 m-auto">
      <input className="text-black" onChange={addPlayerInput} value={value} />
      <Button onClick={addPlayerList}>Добавить</Button>

      {players?.length > 0 ? (
        <div>
          {players.map((player, i) => (
            <div key={i}>
              {player}
              <button
                onClick={() => {
                  deletePlater(player);
                }}
              >
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>Игроки отсутсвтют</div>
      )}
      <h2>number is: {num}</h2>
      <button onClick={handleClick}>Generate random number</button>
    </div>
  );
};

export default Quiz;

// import React from "react";
// import ReactDOM from "react-dom";

// const Counter = ({ value, onIncrement, onDecrement, hideIncrement }) => {
//   return (
//     <div>
//       <span>{value}</span>
//       {value > 0 && (
//         <button
//           onClick={() => {
//             onDecrement();
//           }}
//         >
//           -
//         </button>
//       )}
//       {hideIncrement === false && value < 10 && (
//         <button
//           onClick={() => {
//             onIncrement();
//           }}
//         >
//           +
//         </button>
//       )}
//     </div>
//   );
// };

// const Counters = () => {
//   const [counters, setCounters] = React.useState([4, 0, 0, 5]);

//   const sum = counters.reduce((acc, item) => acc + item, 0);

//   return (
//     <div>
//       <p>Sum: {sum}</p>
//       <button
//         onClick={() => {
//           setCounters([...counters, 0]);
//         }}
//       >
//         Add counter
//       </button>
//       <br />
//       <div>
//         {counters.map((value, index) => (
//           <Counter
//             value={value}
//             hideIncrement={sum >= 20}
//             onIncrement={() => {
//               const countersCopy = [...counters];
//               countersCopy[index] += 1;
//               setCounters(countersCopy);
//             }}
//             onDecrement={() => {
//               const countersCopy = [...counters];
//               countersCopy[index] -= 1;
//               setCounters(countersCopy);
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Counters />, rootElement);
