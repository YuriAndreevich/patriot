import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import video from "../../assets/video/mainvideo.mp4";

const Page = ({ offset, gradient, onClick, children }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer
      className={`${styles.text} ${styles.number}`}
      offset={offset}
      speed={0.3}
    >
      <span>{children}</span>
    </ParallaxLayer>
  </>
);

export default function App() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="overflow" style={{ background: "#dfdfdf" }}>
      <Parallax
        className={styles.container}
        ref={parallax}
        pages={3}
        horizontal
      >
        <Page offset={0} gradient="pink" onClick={() => scroll(1)}>
          <video src={video} />
        </Page>
        <Page offset={1} gradient="teal" onClick={() => scroll(2)}>
          2
        </Page>
        <Page
          offset={2}
          gradient="tomato"
          onClick={() => navigate("/patriot")}
        ></Page>
      </Parallax>
    </div>
  );
}
