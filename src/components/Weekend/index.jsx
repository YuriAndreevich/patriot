import React from "react";
import SwiperZoom from "../SwiperZoom";
import data from "./data";

function index() {
  return (
    <div className="container py-20 m-auto">
      <SwiperZoom data={data} />
    </div>
  );
}

export default index;
