import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./City.css";
const City = (props) => {
  const MyDivref = useRef(null);
  const { setNewCity, } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (MyDivref.current && !MyDivref.current.contains(event.target)) {
        // console.log("click ouside the div");
     setNewCity && setNewCity(false);
      }
    };
    document.addEventListener("click", handleClickOutside,true);

    return () => {
      document.removeEventListener("click", handleClickOutside,true);
    };
  }, [setNewCity]);
  return (
    <>
      <div className="city-select active slow" ref={MyDivref}>
        <div className="city-name">
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="find-icon" />
            <input
              type="text"
              placeholder="search for your city"
              className="input-text"
            />
            <div className="city-para">
              <p>Popular Cities</p>
            </div>
            <div className="city-sign">
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png"
                alt=""
              />
              <img
                src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png"
                alt=""
              />
              <div className="city-down-para">
                <p>view all Cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default City;
