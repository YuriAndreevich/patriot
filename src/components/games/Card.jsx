import React from "react";

function Card({ text, game }) {
  return (
    <div className="rounded-xl bg-green-600 drop-shadow-2xl  text-black w-40 h-60 flex items-center justify-center">
      {text}
    </div>
  );
}

export default Card;
