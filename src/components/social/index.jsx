import React from "react";
import facebook from "./img/facebook-f-brands.svg";
import instagram from "./img/instagram-brands.svg";
import linkedin from "./img/linkedin-in-brands.svg";
import youtube from "./img/youtube-brands.svg";
import "./style.css";

function index() {
  return (
    <div className="social">
      <div className="facebook">
        <img src={facebook} alt="" />
      </div>
      <div className="instagram">
        <img src={instagram} alt="" />
      </div>
      <div className="linkedin">
        <img src={linkedin} alt="" />
      </div>
      <div className="youtube">
        <img src={youtube} alt="" />
      </div>
    </div>
  );
}

export default index;
