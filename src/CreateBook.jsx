import React, { useEffect, useRef, useState } from "react";
import lo from "./image/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider";
import Card from "./Card";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import Live from "./Live";
import Premire from "./Premire";
import Happen from "./Happen";
import Stream from "./Stream";
import Outdoor from "./Outdoor";
import Laughter from "./Laughter";
import Popular from "./Popular";
import Trending from "./Trending";
import Footer from "./Footer";
import City from "./City";
const CreateBook = () => {
  const [newCity, setNewCity] = useState(false);
  const clickEvent = () => {
    setNewCity(true);
  };
console.log(newCity);

  return (
    <div className="book-show">
      <div className="nav">
        <div className="left-side">
          <div>
            <img className="Logo" src={lo} alt="bookmyshow logo" />
          </div>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="Search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="search for Movies,Events,plays,sports and Activities"
            />
          </div>
          <div className="Right-side">
            {newCity ? (
              <City setNewCity={setNewCity} newCity={newCity} />
            ) : null}
            <p className="right-list">
              Delhi-NCR
              <span className="down-arrow">
                <FontAwesomeIcon icon={faCaretDown} onClick={clickEvent} />
              </span>
            </p>
            <button className="btn">Sign in</button>
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "white", fontSize: "25px" }}
            />
          </div>
        </div>
      </div>
      <div className="Second-nav">
        <div className="Second-left">
          <ul>
            <li>Movie</li>
            <li>
              Stream <sup className="new-style">NEW</sup>
            </li>
            <li>Events</li>
            <li>Plays</li>
            <li>Sports</li>
            <li>Activities</li>
            <li>Buzz</li>
          </ul>
        </div>
        <div className="Second-right">
          <ul>
            <li>ListYourShow</li>
            <li>Corporates</li>
            <li>Offers</li>
            <li>Gift Cards</li>
          </ul>
        </div>
      </div>
      <Slider />
      <div className="heading">
        <h2>Recommened Movies</h2>
      </div>
      <div className="card">
        <Card />
      </div>
      <div className="tag-line">
      <a href="https://in.bookmyshow.com/explore/c/stream"><img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt=""
        /></a>
      </div>
      <div className="head-two">
        <h2 className="heading-now">The Best Of Live Events</h2>
      </div>
      <div className="live-event">
        <Live />
      </div>
      <div className="premire">
        <Premire />
      </div>
      <div className="heading-happen">
        <h2>Events Happening Near you</h2>
      </div>
      <div className="happen-block">
        <Happen />
      </div>
      <div className="head-stream">
        <h2> Online Streaming Events</h2>
      </div>
      <div className="online-stream">
        <Stream />
      </div>
      <div className="head-outdoor">
        <h2>
          Outdoor Events <span className="new">New</span>
        </h2>
      </div>
      <div className="outdoor-event">
        <Outdoor />
      </div>
      <div className="head-laughter">
        <h2>Laughter Therapy</h2>
      </div>
      <div className="laughter">
        <Laughter />
      </div>
      <div className="head-popular">
        <h2>Popular Events</h2>
      </div>
      <div className="popular">
        <Popular />
      </div>
      <div className="head-trending">
        <h2>Trending Searches Right Now</h2>
      </div>
      <div className="trending">
        <Trending />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default CreateBook;
