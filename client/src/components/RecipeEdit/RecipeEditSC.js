import styled from "styled-components";

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

export const DeleteButton = styled.button`
  margin: 5px;
  display: flex;
  align-self: center;
  box-shadow: inset 0px 0px 2px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border-radius: 13px;
  border: 1px solid #942911;
  cursor: pointer;
  color: #ffffff;
  font-family: "ABeeZee";
  font-size: 15px;
  padding: 3px 8px;
  text-decoration: none;
  text-shadow: 0px 0px 0px #854629;

  &:hover {
    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    background-color: #bc3315;
  }
  &:active {
    position: relative;
    top: 1px;
  }
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
  font-family: "ABeeZee";
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

export const EditButton = styled.button`
  display: flex;
  align-self: center;
  box-shadow: inset 0px 1px 0px 0px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border: 1px solid #29668f;
  border-radius: 15px;
  cursor: pointer;
  color: #ffffff;
  font-family: "ABeeZee";
  font-size: 12px;
  padding: 1px 4px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2b665e;
  margin-left: 5px;

  &:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const NameRecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 21px;

  & h1 {
    font-family: var(--primaryFont);
    margin: 0;
  }
`;

export const ImageEditContainer = styled.div`
  display: flex;
  justify-content: center;

  & img {
    display: flex;
    align-self: center;
    max-width: 300px;
    max-height: 250px;
    border-radius: 20px;
    margin: 10px;
    border: 7px solid #e7e7e7;
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
    border: 2px rgba(255, 255, 255, 0.4) solid;
    border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
    border-right: 2px rgba(40, 40, 40, 0.35) solid;
  }

  & button {
    position: relative;
    top: 20px;
    left: -50px;
    box-shadow: inset 0px 1px 0px 0px #276873;
    background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
    background-color: #599bb3;
    border: 1px solid #29668f;
    border-radius: 15px;
    cursor: pointer;
    color: #ffffff;
    font-size: 12px;
    padding: 1px 4px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2b665e;
    margin-left: 5px;

    &:hover {
      background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
      background-color: #408c99;
    }

    &:active {
      position: relative;
      top: 21px;
    }
  }
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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  & p {
    font-family: var(--primaryFont);
    font-weight: bold;
    font-size: 15px;
    color: black;
    margin: 0;
  }
`;

export const ServingCategoryContainer = styled.div`
  margin-left: 75px;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 75px;

  & p {
    font-family: var(--primaryFont);
    font-weight: bold;
    font-size: 15px;
    color: black;
    margin: 0;
  }
`;

export const Item = styled.div`
  & span {
    font-size: 14px;
    font-family: var(--secondaryFont);
    color: black;
    margin-left: 15px;
  }
`;

export const StepsContainer = styled.div`
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & p {
    font-family: var(--primaryFont);
    font-weight: bold;
    font-size: 15px;
    color: black;
    margin: 0;
  }
`;

export const Step = styled.div`
  font-size: 14px;
  font-family: var(--secondaryFont);
  color: black;
  text-align: justify;
  margin: 2px 15px 5px 15px;
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
