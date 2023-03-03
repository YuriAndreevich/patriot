import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./AnimatedNumber.scss";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className="AnimatedNumber">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}

function index({ number, text }) {
  return (
    <div>
      <Number n={number} />
      {text}
    </div>
  );
}

export default index;
