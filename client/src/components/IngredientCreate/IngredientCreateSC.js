import styled from "styled-components";
import { showItemsButton } from "../Buttons/ShowItemsButton";
import {
  disabledSaveChangesButton,
  saveChangesButton,
} from "../Buttons/SaveChangesButton";
import { glassStyle } from "../GlassStyle/GlassStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatorCard = styled.div`
  ${glassStyle}

  flex-direction: column;
  width: 700px;
  box-sizing: content-box;
  margin-top: 20px;
  margin-bottom: 0px;
  padding-bottom: 20px;

  & h1 {
    width: 100%;
  }
`;

export const IngredientForm = styled.form`
  // width: 650px;
  width: 100%;
`;

export const InputsContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  // width: 100%;
  // height: 80px;
  // display: flex;
  // justify-content: flex-start;
  // flex-direction: column;
  // align-items: flex-start;
`;

export const NameInput = styled.div`
  & label {
    height: 14px;
  }

  & input {
    // width: 475px;
    width: 89%;
  }
`;

export const ErrorContainer = styled.div`
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    height: 11px;
    color: red;
    margin: 0;
  }
`;

export const UnitInput = styled.div`
  & label {
    height: 14px;
  }

  & select {
    // width: 475px;
    width: 79%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IngredientsButton = styled.div`
  ${showItemsButton}
`;

export const SaveButton = styled.button`
  ${saveChangesButton}
`;

export const DisabledButton = styled.button`
  ${disabledSaveChangesButton}
`;

export const Failure = styled.span`
  font-size: 11px;
  color: red;
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
    margin: 8px;
    box-sizing: border-box;
    border: 20px solid #691281;
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

export const IngredientsContainer = styled.div`
  width: 500px;
  font-family: var(--secondaryFont);
  box-sizing: content-box;
  border: 3px solid #e7e7e7;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;

  & p {
    font-size: 12px;
    margin: 5px;
  }
`;
