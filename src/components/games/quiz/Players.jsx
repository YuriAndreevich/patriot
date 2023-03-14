import React, { useState } from "react";
import Button from "../../Button";
import { fireConfetti } from "@/components/TimeLine/confetti";
// const Quiz = () => {
//   const [num, setNum] = useState(0);

//   function randomNumberInRange(min, max) {
//     // 👇️ get number between min (inclusive) and max (inclusive)
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   const handleClick = () => {
//     setNum(randomNumberInRange(0, players.length - 1));
//   };

//   return (
//     <div className="">

//       <Button onClick={handleClick}>Выбрать игрока</Button>
//       {players[num]}
//     </div>
//   );
// };
// export default Quiz;

const Quiz = () => {
  const [players, addPlayers] = useState([]);
  const [value, setValue] = useState("");

  const sum = players.reduce((acc, item) => acc.counter + item.counter, 0);

  const addPlayerInput = (e) => {
    setValue(e.target.value);
  };
  const addPlayerList = () => {
    if (value !== "") {
      addPlayers([...players, { name: value, counter: 0 }]);
      setValue("");
    }
  };
  const deletePlayer = (playerId) => {
    const newListPlayer = players.filter((value) => {
      return value !== playerId;
    });
    addPlayers(newListPlayer);
  };

  return (
    <div>
      <p>Всего баллов: {sum}</p>

      <input className="text-black" onChange={addPlayerInput} value={value} />
      <Button onClick={addPlayerList}>Добавить</Button>
      {players?.length > 0 ? (
        <div>
          {players.map((player, i) => (
            <div key={i}>
              {player.name}
              {player.couner}
              <button
                onClick={() => {
                  deletePlayer(player);
                }}
              >
                X
              </button>
              <div>
                <span>{value}</span>
                {value > 0 && (
                  <button
                    onClick={() => {
                      onDecrement();
                    }}
                  >
                    -
                  </button>
                )}
                {value < 10 && (
                  <button
                    onClick={() => {
                      onIncrement();
                      // fireConfetti();
                    }}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>Игроки отсутсвуют</div>
      )}
      <br />
      <div>
        {players.map((value, index) => (
          <Counter
            value={value}
            hideIncrement={sum >= 20}
            onIncrement={() => {
              const countersCopy = [...counters];
              countersCopy[index] += 1;
              setCounters(countersCopy);
            }}
            onDecrement={() => {
              const countersCopy = [...counters];
              countersCopy[index] -= 1;
              setCounters(countersCopy);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
