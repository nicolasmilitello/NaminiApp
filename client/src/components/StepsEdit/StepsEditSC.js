import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 50%;
  box-sizing: content-box;
  margin-bottom: 0px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
  padding-bottom: 15px;

  & h1 {
    font-family: var(--primaryFont);
    width: 100%;
    margin-top: 20px;
  }
`;

export const ReturnButtonContainer = styled(Link)`
  position: absolute;
  margin-left: 85%;
`;

export const ReturnButton = styled.button`
  margin: 5px;
  display: flex;
  align-self: center;
  box-shadow: inset 0px 0px 0px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 15px;
  border: 1px solid #566963;
  cursor: pointer;
  color: #ffffff;

  font-size: 15px;
  padding: 3px 8px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2b665e;

  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const ConfirmedStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ConfirmedTitle = styled.p`
  font-family: var(--primaryFont);
  font-weight: bold;
  align-self: center;
  margin: 0;
`;

export const NoConfirmedIngr = styled.p`
  color: red;
  margin: 0;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
`;

export const Item = styled.div`
  font-family: var(--secondaryFont);
  text-align: justify;
  width: 100%;
  font-size: 12px;
  color: #000000;
  margin-bottom: 7px;
`;

export const RemoveStepButton = styled.button`
  display: flex;
  align-items: center;
  height: 17px;
  font-size: 15px;
  padding: 0px 0px;
  margin-left: 5px;
  box-shadow: inset 0px 0px 2px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border-radius: 13px;
  border: 1px solid #942911;
  cursor: pointer;
  color: #ffffff;
  font-family: var(--secondaryFont);
  text-decoration: none;
  text-shadow: 0px 0px 0px #854629;

  .redButtonStepEditPage:hover {
    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    background-color: #bc3315;
  }

  .redButtonStepEditPage:active {
    position: relative;
    top: 1px;
  }
`;

export const ConfirmTitle = styled.p`
  font-family: var(--primaryFont);
  font-weight: bold;
  align-self: center;
  margin: 10px 0 0 0;
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
  display: flex;
  align-self: center;
  margin: 5px;
  box-shadow: inset 0px 0px 2px 0px #3dc21b;
  background: linear-gradient(to bottom, #23b84a 5%, #4d9925 100%);
  background-color: #23b84a;
  border-radius: 13px;
  border: 1px solid #18ab29;
  cursor: pointer;
  color: #ffffff;
  font-family: var(--secondaryFont);
  font-size: 12px;
  font-weight: bold;
  padding: 1px 4px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #2f6627;

  &:hover {
    background: linear-gradient(to bottom, #4d9925 5%, #23b84a 100%);
    background-color: #4d9925;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const DisabledButton = styled.button`
  display: flex;
  align-items: center;
  margin: 5px;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 13px;
  border: 1px solid #dcdcdc;
  cursor: default;
  color: #666666;
  font-family: var(--secondaryFont);
  font-size: 12px;
  font-weight: bold;
  padding: 1px 4px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`;