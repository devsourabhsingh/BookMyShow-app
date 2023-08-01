import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Pagination, Keyboard,} from "swiper";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useSwiper } from "swiper/react";

const Happen = () => {
  const images = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361779-lplpfzhnhj-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362605-kadljkueps-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00361841-uxbltzusrx-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358490-dweakdrhxl-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355994-jvkwpwzbty-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA4IEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360912-ccccxfehaa-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOSBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362123-dhhdclfahl-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOSBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362809-xjcdwkskzb-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360835-jbavacfcuf-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzMCBKdW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360368-xvkupbaphh-portrait.jpg",
  ];
  const [currentIndex, setCurrentNewIndex] = useState(0);
  const [displayImage, setDisplayImages] = useState(images.slice(0, 5)); //inital selection of first five image
  const handleNextClick = () => {
    const nextIndex = currentIndex + 5;
    const nextImages = images.slice(nextIndex, nextIndex + 5);
    setCurrentNewIndex(nextIndex);
    setDisplayImages(nextImages);
   };
const  swiper=useSwiper();

  return (
    <>
      <div className="head-happen">
      <FontAwesomeIcon icon={faCircleChevronLeft} className="fontAwesome-left" />
        <Swiper
        modules={[Pagination, Keyboard, ]}
        spaceBetween={30}
        slidesPerView={5}
        slidesPerGroup={5}
        keyboard={{
          enabled: true,
        }}
        pagination={{ clickable: true }}
        >
          {displayImage.map((image, index) => (
            <SwiperSlide key={index}>
<img src={image} alt={`slide ${index+1}`} style={{ width: "100%", height: "25rem", borderRadius: "10px" }}/>
            </SwiperSlide>
            ))}
        </Swiper>
        <button onClick={()=>swiper.slideNext()}> next</button>
        {/* <FontAwesomeIcon
          icon={faCircleChevronRight}
          onClick={()=>swiper?.slideNext()}
          className="fontAwesome-Icon"
        /> */}
      </div>
    </>
  );
};

export default Happen;
