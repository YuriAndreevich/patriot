import { Heading } from "@chakra-ui/react";
import { hex3 } from "@react-spring/shared";
import React from "react";
import SwiperZoom from "../SwiperZoom";
import { data, data2, data3 } from "./data";
import img from "../../assets/weekend/fon.jpg";

function index() {
  return (
    <div>
      <div className="container py-20 m-auto z-10 flex flex-row gap-10">
        <SwiperZoom data={data} style={{ height: "842px", width: "595px" }} />
        <SwiperZoom data={data2} style={{ height: "842px", width: "595px" }} />
        <SwiperZoom data={data3} style={{ height: "842px", width: "595px" }} />
      </div>
      <div
        className="blur-sm z-0 h-screen w-screen  "
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
    </div>
  );
}

export default index;
