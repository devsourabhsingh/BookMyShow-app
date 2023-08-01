import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
const Card = () => {
  return (
    <>
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
          <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/adipurush/ET00137215">
            <img
              src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni4yLzEwICAyMzYuOUsgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00137215-smxelgjeue-portrait.jpg"
              alt=""
              style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
            />
          </a>

          <h3>Adipurush</h3>
          <p>Action/Adeventure/Mythological</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/zara-hatke-zara-bachke/ET00359644"> <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny41LzEwICA1Ni40SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00359644-nqullkspgw-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
         
          <h3>Zara Hatke Zara Bachke</h3>
          <p>Comedy/Drama/Romantic</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/elemental/ET00356210"><img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTUuOEsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00356210-syblrugbhn-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
          
          <h3>Elementel</h3>
          <p>Adventure/Animation/Comedy</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/the-flash/ET00047401"> <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC42LzEwICAyM0sgVm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00047401-flfqsnkwwg-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
         
          <h3>The Flash</h3>
          <p>Action/Adventure/Fantasy</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/1920-horrors-of-the-heart/ET00353537"><img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MzMuMksgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00353537-enfurgamdj-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
          
          <h3>1920: Horrors of the Heart</h3>
          <p>Horror/Romantic/Thriller</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/spiderman-across-the-spiderverse/ET00347275"><img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS40LzEwICA0Mi41SyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347275-eqjjcbfvmr-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
          
          <h3>Spider-Man: Across The Spider-Verse</h3>
          <p>Action/Adventure/Animation</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/transformers-rise-of-the-beasts/ET00346319"><img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAyMy4ySyBWb3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00346319-kynaazzqef-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
          
          <h3>Transformers: Rise of the Beasts</h3>
          <p>Action/Adventure/Sci-Fi</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/no-hard-feelings/ET00355405"> <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTAuNEsgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00355405-vpstbxgsdl-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
          <h3>No Hard Feelings</h3>
          <p>Comedy/Drama</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/godday-godday-chaa/ET00357000"><img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICAyLjhLIFZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00357000-nvpqrqbtpv-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
          
          <h3>Godday Godday Chaa</h3>
          <p>Comedy/Drama</p>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://in.bookmyshow.com/national-capital-region-ncr/movies/dhoomam-2023/ET00341472"> <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTUuM0sgTGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00341470-uwdxnpzxyh-portrait.jpg"
            alt=""
            style={{ width: "100%", height: "22rem", borderRadius: "10px" }}
          /></a>
         
          <h3>Dhoomam</h3>
          <p>Drama/Thriller</p>
        </SwiperSlide>
      </Swiper>
      {/* <FontAwesomeIcon  icon={faCircleChevronRight} style={{fontSize:"40px",backgroundColor:"white",color:"grey"}} /> */}
    </>
  );
};

export default Card;
