import React from "react";
import SwiperZoom from "../SwiperZoom";
import { data, data2, data3 } from "./data";

function index() {
  return (
    <div className="container py-20 m-auto">
      <SwiperZoom data={data} />
      <SwiperZoom data={data2} />
      <SwiperZoom data={data3} />
    </div>
  );
}

export default index;
