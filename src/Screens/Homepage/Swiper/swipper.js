import React from "react";
import Banner from "../../../Assets/posterImage.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Mousewheel, Pagination } from "swiper/modules"; // Corrected this import

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import SASS styles
import "../Swiper/swipper.scss";

// Install Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

export default function Swipper() {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={Banner} alt="Banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="Banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Banner} alt="Banner" />
      </SwiperSlide>
    </Swiper>
  );
}
