import { Heading } from "@chakra-ui/react";
import { hex3 } from "@react-spring/shared";
import React from "react";
import SwiperZoom from "../SwiperZoom";
import { data, data2, data3 } from "./data";
import img from "../../assets/img/fon1.jpg";

function index() {
  return (
    <div
      className=" z-0 h-screen w-screen  "
      style={{ backgroundImage: `url('${img}')` }}
    >
      <div className="z-10 p-4 flex flex-row gap-3 pt-24 items-center overflow-x-auto ">
        <SwiperZoom
          data={data}
          style={{ height: "842px", maxWidth: "595px" }}
        />
        <SwiperZoom
          data={data2}
          style={{ height: "842px", maxWidth: "595px" }}
        />
        <SwiperZoom
          data={data3}
          style={{ height: "842px", maxWidth: "595px" }}
        />
      </div>
    </div>
  );
}

export default index;
