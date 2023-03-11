import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import fon from "../../assets/video/mainvideo.mp4";
import AnimatedNumber from "../AnimatedNumber";
import sp from "../../assets/svg/wsoundp.svg";
import sm from "../../assets/svg/wsoundm.svg";
import vp from "../../assets/svg/wvideop.svg";
import vm from "../../assets/svg/wvideom.svg";

import "./shyne.scss";

function index() {
  const [play, setPlay] = useState(true);
  const [sound, setSound] = useState(false);
  const vidRef = useRef(null);
  const handleStartAudio = () => {
    setSound(!sound);
    if (sound) {
      vidRef.current.muted = false;
    } else {
      vidRef.current.muted = true;
    }
  };
  const handleStartVideo = () => {
    setPlay(!play);
    if (play) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  };

  return (
    <div className="relative">
      <video
        ref={vidRef}
        autoPlay={play}
        loop
        className="w-screen h-screen object-cover"
      >
        <source src={fon} type="video/mp4" />
      </video>

      <div className="absolute">
        {sound ? (
          <img
            className=" relative h-32 w-32 z-50"
            src={sp}
            alt=""
            onClick={handleStartAudio}
          />
        ) : (
          <img
            className=" relative h-32 w-32 z-50"
            src={sm}
            alt=""
            onClick={handleStartAudio}
          />
        )}
        {sound ? (
          <img
            className=" relative h-28 w-28 z-50 ml-2"
            src={vp}
            alt=""
            onClick={handleStartVideo}
          />
        ) : (
          <img
            className=" relative h-32 w-32 z-50"
            src={vm}
            alt=""
            onClick={handleStartVideo}
          />
        )}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t from-black to-0 w-screen top-3/4">
        <div className="shyne text-6xl sm:text-9xl text-center mt-20">
          <Link to="/page1" className="hover:text-green-600 font-extrabold ">
            «П
          </Link>
          <Link to="/page2" className="hover:text-green-600 font-extrabold">
            А
          </Link>
          <Link to="/page3" className="hover:text-green-600 font-extrabold">
            Т
          </Link>
          <Link to="/page4" className="hover:text-green-600 font-extrabold">
            Р
          </Link>
          <Link to="/page5" className="hover:text-green-600 font-extrabold">
            И
          </Link>
          <Link to="/page6" className="hover:text-green-600 font-extrabold">
            О
          </Link>
          <Link to="/page7" className="hover:text-green-600 font-extrabold">
            Т:
          </Link>
        </div>
        <div className="  text-5xl mt-10 text-center mb-10">
          <Link to="/newGeneration">мы - новое поколение!»</Link>
        </div>
        <div className="flex justify-center gap-10 p-10">
          <AnimatedNumber text="Участники мероприятий" number={4695} />
          <AnimatedNumber text="Наши достижения" number={74} />
          <AnimatedNumber
            text="Краеведческо-патриотические экспедиции"
            number={15}
          />
          <AnimatedNumber
            text="Благоустроенные братские могилы и памятники"
            number={6}
          />
          <AnimatedNumber text="Молодежные проекты" number={15} />
        </div>
      </div>
    </div>
  );
}

export default index;
