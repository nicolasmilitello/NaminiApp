import styled from "styled-components";
import { editRecipeButton } from "../Buttons/EditRecipeButton";
import { returnButton } from "../Buttons/ReturnButton";

const P = `
    font-family: var(--primaryFont);
    font-size: 15px;
    font-weight: bold;
    margin: 0;
    `;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
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
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: content-box;
  width: 100%;
  backgroun-color: red;

  & h1 {
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 150px;
  min-height: 150px;
  margin-top: 2px;
  object-fit: cover;
  filter: blur(2px);
  border-radius: 50% 50% 100% 100% / 10% 10% 100% 100%;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 15px;
  width: 97%;
  border: 3px black;
`;

export const EditButton = styled.button`
  ${editRecipeButton}
`;

export const ReturnButton = styled.button`
  ${returnButton}
`;

export const IngrCateServContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Icon = styled.span`
  font-size: 20px;
  height: 21px;
`;

export const ServingCategoryContainer = styled.div`
  margin-left: 75px;
`;

export const DetailTitle = styled.p`
  font-family: var(--primaryFont);
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 12px 0;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 75px;

  & p {
    ${P}
  }
`;

export const Item = styled.div`
  & span {
    margin-left: 15px;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;

  & p {
    ${P}
  }
`;

export const Step = styled.div`
  text-align: justify;
  margin: 5px 15px 5px 15px;
`;

export const StepNumber = styled.span`
  font-weight: bold;
`;

export const LoadingAnimation = styled.div`
  display: inline-block;
  position: relative;

  &::after {
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
