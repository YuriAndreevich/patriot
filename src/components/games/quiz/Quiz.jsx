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
