import React from "react";
import call from "./image/Profile.svg";
import book from "./image/Book.svg";
import news from "./image/News.svg";
import logo from "./image/logo2.png";
import twit from "./image/Twitter.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import tabe from './image/Youtube.svg'
import inst from './image/Instgram.svg'
import est from './image/Pinterest.svg'
import lied from './image/Linked.svg'
const Footer = () => {
  return (
    <>
      <div className="down-footer">
        <span className="set-new">
          <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="" />
          <h3 style={{ marginLeft: "5px" }}>List your Show</h3>
        </span>
        <p>
          Got a show, event, activity or a great experience? Partner with us &
          get listed on BookMyShow
        </p>
        <div className="right-button">
          <button className="btn1">Contact today</button>
        </div>
      </div>
      <div className="second-footer">
        <div className="caller">
          <img src={call} alt="" />
          <p>24/7CUSTOMERCARE</p>
        </div>
        <div className="resend">
          <img src={book} alt="" />
          <p>RESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="Subscribe">
          <img src={news} alt="" />
          <p>SUBSCRIBE TO THE NEWSLETTER</p>
        </div>
      </div>
      <div className=" footer-show">
        <hr className="line" />
        <div className="logo-image">
          <img src={logo} alt="" />
        </div>
        <hr className="line" />
      </div>
      <div className="media-contact">
      <FontAwesomeIcon icon={faFacebook} fontSize="30px" style={{alignItems:"center",justifyContent:"center",marginBottom:"5px",marginRight:"5px"}} />
        <div className="social-Contact">
          <img src={twit} alt="" />
          <img src={inst} alt="" />
        <img src={tabe} alt="" />
        <img src= {est} alt="" />
        <img src={lied} alt="" />
        </div>         
      </div>
      <div className="end-para">
      <div><p>Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.</p></div>
        <div><p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p></div>
        
      </div>
    </>
  );
};

export default Footer;
