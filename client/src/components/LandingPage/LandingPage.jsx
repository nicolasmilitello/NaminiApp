import React from "react";
import LogoImgText from "../../logoImg&Text.png";

//? STYLES:
import { Container } from "./LandingPageSC";
import "../Globales.css";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <Container>
      <img src={LogoImgText} alt="not found" />
    </Container>
  );
}
