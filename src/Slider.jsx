import React from "react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import 'swiper/css/autoplay';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687102676944_sunburnweb.jpg"
          alt=""
          style={{ width: "100%", height:"15rem"}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1680083241797_rewardsweb.jpg"
          alt=""
          style={{ width: "100%",  height:"15rem"}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1682617779318_webbannernpa.jpg"
          alt=""
          style={{ width: "100%" , height:"15rem"}}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687440845173_asterixandobekixdesktop.jpg"
          alt=""
          style={{ width: "100%", height:"15rem" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://assets-in.bmscdn.com/promotions/cms/creatives/1687461856719_motog.jpg"
          alt=""
          style={{ width: "100%", height:"15rem" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
