import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

export default function App({ data }) {
  return (
    <div className="h-96">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        spaceBetween={30}
        autoplay
        loop={true}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {data.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-zoom-container ">
              <img style={{ objectFit: "cover" }} src={src.src} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
