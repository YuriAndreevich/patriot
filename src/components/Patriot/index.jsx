import React from "react";
import { Link } from "react-router-dom";
import "./Patriot.scss";

function index() {
  return (
    <div className="patriot">
      <div className="shine">
        <Link to="/page1">«П</Link>
        <Link to="/page2">А</Link>
        <Link to="/page3">Т</Link>
        <Link to="/page4">Р</Link>
        <Link to="/page5">И</Link>
        <Link to="/page6">О</Link>
        <Link to="/page7">Т:</Link>
      </div>
      <Link to="/newGeneration">мы - новое поколение!»</Link>
    </div>
  );
}

export default index;
