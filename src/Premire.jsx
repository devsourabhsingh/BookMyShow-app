import React from "react";
import pr from "./image/premire-transformed.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper";
const Premire = () => {
  return (
    <>
      <div className="latest">
        <img className="pre" src={pr} alt="" />
      </div>
      <div className="premire-second">
        <p>Premieres</p>
        <p>Brand new release every friday </p>
      </div>
      <div className="swiper-latest">
        <Swiper
          modules={[Pagination, Keyboard, Navigation]}
          spaceBetween={30}
          slidesPerView={5}
          slidesPerGroup={5}
          navigation
          keyboard={{
            enabled: true,
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00359055-qhruzspcbs-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"#FFFFFF"}}>Endeavour Series 8</p>
            <p style={{color:"#FFFFFF"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00361962-qwxxzqxqvx-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>Decision To Leave</p>
            <p style={{color:"white"}}>Korean</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358589-aesendsvak-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>Asterix & Obelix - The Middle Kingdom</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00355713-jgqnjqegbv-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p  style={{color:"white"}}>The Lost King</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00358673-yggsyblttj-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>I See You</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00356925-jplrtqhszb-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>The Inspection</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00352714-zrzrpauvzv-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>Love Again</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00361950-pusdfwkfsz-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>Piggy</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00361529-wagpqefjhy-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>Over Water</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@bms_premiere_v1.png,oit-false,ofo-bottom_left:q-80/et00359055-qhruzspcbs-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
            <p style={{color:"white"}}>Endeavour 8 Series</p>
            <p style={{color:"white"}}>English</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Premire;
