import React from "react";

function index({ children }) {
  return (
    <button className=" rounded-lg p-1 bg-green-600 hover:bg-green-500 transition-all">
      {children}
    </button>
  );
}

export default index;
