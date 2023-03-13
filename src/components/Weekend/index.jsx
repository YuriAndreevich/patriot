import { Heading } from "@chakra-ui/react";
import React from "react";
import SwiperZoom from "../SwiperZoom";
import { data, data2, data3 } from "./data";

function index() {
  return (
    <div className="container py-20 m-auto">
      <SwiperZoom data={data} h="5/6" w="20" />
      <SwiperZoom data={data2} h="5/6" w="20" />
      <SwiperZoom data={data3} h="5/6" w="20" />
    </div>
  );
}

export default index;
