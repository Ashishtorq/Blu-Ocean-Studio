import React, { Fragment } from "react";
import "./Home.css";
// import Link from "react-router-dom"
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Fragment>
      <div id="left"></div>
      <div id="right"></div>
      <div class="cursor"></div>
      <video
        autoplay
        loop
        muted
        src="https://boipl.com/wp-content/uploads/2021/10/size2_new.mp4"
      ></video>
      <div id="main-container">
        <div id="nav-bar">
          <div id="nav-logo">
        
              <img
                src="./logo.png"
                alt="Blue Ocean Logo"
              />
            
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
