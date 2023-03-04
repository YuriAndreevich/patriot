import React from "react";
import { Link } from "react-router-dom";
import fon from "../../assets/video/mainvideo.mp4";

function index() {
  return (
    <>
      <video autoPlay muted loop className="w-screen h-screen object-cover">
        <source src={fon} type="video/mp4" />
      </video>
      <div className="text-6xl sm:text-9xl text-center mt-20">
        <Link to="/page1">«П</Link>
        <Link to="/page2">А</Link>
        <Link to="/page3">Т</Link>
        <Link to="/page4">Р</Link>
        <Link to="/page5">И</Link>
        <Link to="/page6">О</Link>
        <Link to="/page7">Т:</Link>
      </div>
      <div className="  text-5xl mt-20 text-center ">
        <Link to="/newGeneration">мы - новое поколение!»</Link>
      </div>
    </>
  );
}

export default index;
