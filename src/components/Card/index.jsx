import React from "react";
import img from "../../assets/weekend/1.jpg";
import img2 from "../../assets/img/map.png";

function index({ text }) {
  return (
    <div className="relative max-w-xs rounded-2xl overflow-hidden shadow-lg max-h-96 bg-neutral-900">
      <img
        className=" hover:blur-sm transition-all"
        src={img2}
        alt="Sunset in the mountains "
      />
      <div className=" absolute font-bold text-xl  text-center text-green-600 p-4">
        {text}
      </div>
    </div>
  );
}

export default index;
