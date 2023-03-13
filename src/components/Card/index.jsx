import React from "react";


function index({ text, src }) {
  return (
    <div className="relative max-w-xs rounded-2xl overflow-hidden shadow-lg max-h-96 bg-neutral-900">
      <img
        className=" hover:blur-sm transition-all"
        src={src}
        alt="Sunset in the mountains "
      />
      <div className=" absolute font-bold text-xl  text-center text-green-600 p-4">
        {text}
      </div>
    </div>
  );
}

export default index;
