import React from "react";

//? STYLES:
import { Container } from "./LandingPageSC";

//? IMAGES:
import LogoImgText from "../../logoImg&Text.png";

export default function LandingPage() {
  return (
    <Container>
      <img src={LogoImgText} alt="not found" />
    </Container>
  );
}
