import React, { Fragment } from "react";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div id="left"></div>
      <div id="right"></div>
      <div class="cursor"></div>
      <video
        autoPlay
        loop
        muted
        src="https://boipl.com/wp-content/uploads/2021/10/size2_new.mp4"
      ></video>
      <div id="main-container">
        <div id="nav-bar">
          <div id="nav-logo">
            <img src="./logo.png" alt="Blue Ocean Logo" />
          </div>
          <div id="nav-content">
            <Link to={"./Home.jsx"}>Home</Link>
            <Link to={"./About.jsx"}>About</Link>
            <Link to={"./About.jsx"}>OUR INNOVATIONS</Link>
            <Link to={"./About.jsx"}>OUR IP</Link>
            <Link to={"./About.jsx"}>STORIES</Link>
            <Link to={"./About.jsx"}>CAREERS</Link>
            <Link to={"./About.jsx"}>MEDIA</Link>
            <i class="ri-more-line" id="dot-icon"></i>
          </div>
        </div>
        <div id="vertical-text">
          <div id="first-text">
            <p>
              Explore <span style={{ fontSize: "40px" }}>ACHIEVEMENTS</span>
            </p>
          </div>
          <div id="second-text">
            <p>HOW TO FIND US</p>
            <span style={{ fontSize: "40px" }}>CONTACT US</span>
          </div>
        </div>
        <div id="footer">
          <div id="social">
            <Link
              to={
                "https://www.facebook.com/Blu-Ocean-Studios-Pvt-Ltd-2173442176025979"
              }
            >
              <i class="ri-facebook-box-fill" id="social-emoji"></i>
            </Link>
            <Link
              to={"https://www.youtube.com/channel/UCWXQZmoJUXeTRpaWxQHsaZQ"}
            >
              <i class="ri-youtube-fill" id="social-emoji"></i>
            </Link>
            <Link to={"https://www.instagram.com/thekare_/"}>
              <i class="ri-instagram-fill" id="social-emoji"></i>
            </Link>
            <Link
              to={
                "https://www.linkedin.com/company/blu-ocean-innovations-pvt-ltd/"
              }
            >
              <i class="ri-linkedin-box-fill" id="social-emoji"></i>
            </Link>
          </div>
          <div id="copy-right">
            <h6>COPYRIGHT &copy;. ALL RIGHT RESERVED</h6>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
