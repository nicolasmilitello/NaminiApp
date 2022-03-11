import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  disabledSaveChangesButton,
  saveChangesButton,
} from "../Buttons/SaveChangesButton";
import { returnButton } from "../Buttons/ReturnButton";
import { deleteConfirmedItemButton } from "../Buttons/DeleteConfirmedItemButton";
import { glassStyle } from "../GlassStyle/GlassStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  ${glassStyle}

  flex-direction: column;
  width: 50%;
  box-sizing: content-box;
  margin-bottom: 0px;
  padding-bottom: 15px;

  & h1 {
    width: 100%;
  }
`;

export const ReturnButtonContainer = styled(Link)`
  position: absolute;
  margin-left: 85%;
`;

export const ReturnButton = styled.button`
  ${returnButton}
`;

export const ConfirmedStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const FontAndSize = `
  font-family: var(--primaryFont);
  font-size: 14px;
  margin: 0;
  align-self: center;
`;

export const ConfirmedTitle = styled.span`
  ${FontAndSize}
  font-weight: bold;
`;

export const NoConfirmedIngr = styled.span`
  ${FontAndSize}
  color: red;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
`;

export const Item = styled.div`
  text-align: justify;
  width: 100%;
  margin-bottom: 7px;
`;

export const Step = styled.span`
  font-size: 12px;
  ${(props) => (props.bold ? `font-weight: bold;` : null)}
`;

export const RemoveStepButton = styled.button`
  ${deleteConfirmedItemButton}
`;

export const ConfirmTitle = styled.p`
  ${FontAndSize}
  font-weight: bold;
  margin: 10px 0 5px 0;
`;

export const LoadingAnimation = styled.div`
  display: inline-block;
  position: relative;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    box-sizing: border-box;
    border: 10px solid #691281;
    border-color: #ffc0db transparent #daf5b1 transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SaveButton = styled.button`
  ${saveChangesButton}
`;

export const DisabledButton = styled.button`
  ${disabledSaveChangesButton}
`;
