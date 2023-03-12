import React from "react";
import img from "../../assets/weekend/1.jpg";
import img2 from "../../assets/img/map.png";

function index() {
  return (
    <div className="relative max-w-sm rounded-2xl overflow-hidden shadow-lg">
      <div className=" h-100 w-100 absolute bg-gradient-to-t from-black to-0 z-19"></div>
      <img className="w-64 " src={img2} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      </div>
    </div>
  );
}

export default index;
