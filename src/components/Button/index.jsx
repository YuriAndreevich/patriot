import React from "react";

function index({ children }) {
  return (
    <button className="rounded bg-green-600 hover:bg-green-500  p-2">
      {children}
    </button>
  );
}

export default index;
