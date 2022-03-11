import styled from "styled-components";
import { glassStyle } from "../GlassStyle/GlassStyle";

export const Container = styled.div`
  ${glassStyle}

  width: 300px;
  height: 180px;
  margin: 10px;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #cccccc;
    background-color: white;
  }
`;

export const Image = styled.img`
  // max-width: 60%;
  // min-width: 60%;
  width: 60%;
  height: 100%;
  object-fit: cover;
  border-radius: 10% 78% 97% 10% / 10% 100% 100% 10%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 80%;

  & div {
    font-size: 20px;
    height: 21px;
  }

  // & h6 {
  //   font-family: var(--primaryFont);
  //   margin: 0;
  // }

  // & h3 {
  //   font-family: var(--primaryFont);
  //   font-size: 20px;
  //   margin: 0;
  // }
`;
