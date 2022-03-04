import React from "react";
import { Link } from "react-router-dom";
import LogoImgText from "../../logoImg&Text.png";
import "../Globales.css";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="contentLandingPage">
      <img className="slide-top" src={LogoImgText} alt="not found" />
    </div>
  );
}
