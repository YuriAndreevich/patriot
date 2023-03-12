import React, { useState, useRef } from "react";

import fon from "../../../../assets/video/fon.mp4";

import SVG from "react-inlinesvg";
import waveSVG2 from "../../../../assets/genocide/img/waves2.svg";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

import sp from "../../../../assets/svg/wsoundp.svg";
import sm from "../../../../assets/svg/wsoundm.svg";
import vp from "../../../../assets/svg/wvideop.svg";
import vm from "../../../../assets/svg/wvideom.svg";

import fonMP3 from "../../../../assets/genocide/mp3/fon.mp3";

import "./main.scss";

function Main() {
  const [audio] = useState(new Audio(fonMP3));
  audio.loop = true;

  const mainAnim = {
    hidden: {
      y: -300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const { t } = useTranslation();

  const vidRef = useRef(null);

  const [play, setPlay] = useState(true);
  const [sound, setSound] = useState(false);
  const handleStartAudio = () => {
    audio.pause();
    setSound(true);
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
    <>
      <div className="page1" id="main">
        <video
          autoPlay
          muted
          loop
          ref={vidRef}
          className="page1-video"
          style={{ maxWidth: "none" }}
        >
          <source src={fon} type="video/mp4" />
        </video>
        <div className="absolute right-24 bottom-64">
          <div className="flex flex-row-reverse">
            {sound ? (
              <img
                className=" relative h-16 w-16 z-50"
                src={sp}
                alt=""
                onClick={handleStartAudio}
              />
            ) : (
              <img
                className=" relative h-16 w-16 z-50"
                src={sm}
                alt=""
                onClick={handleStartAudio}
              />
            )}
            {sound ? (
              <img
                className=" relative h-16 w-16 z-50 ml-2"
                src={vp}
                alt=""
                onClick={handleStartVideo}
              />
            ) : (
              <img
                className=" relative h-16 w-16 z-50"
                src={vm}
                alt=""
                onClick={handleStartVideo}
              />
            )}
          </div>
        </div>
        <motion.p
          style={{ transform: "translate(-50%, -115%)" }}
          className="main-p"
          initial="hidden"
          variants={mainAnim}
          whileInView="visible"
        >
          <strong>{t("Незаживающие раны памяти")}</strong>
        </motion.p>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
        <SVG className="page1-divider" src={waveSVG2} />
      </div>
    </>
  );
}

export default Main;
