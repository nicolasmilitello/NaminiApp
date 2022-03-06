import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreatorCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 700px;
  box-sizing: content-box;
  margin-top: 20px;
  margin-bottom: 0px;
  padding-bottom: 20px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;

  & h1 {
    font-family: var(--primaryFont);
    width: 100%;
    margin-top: 20px;
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
    font-family: var(--secondaryFont);
    font-size: 14px;
    height: 14px;
  }

  & input {
    // width: 475px;
    width: 89%;
    background-color: #eee;
    border-radius: 10px;
    border: none;
  }
`;

export const ErrorContainer = styled.div`
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    height: 10px;
    font-size: 10px;
    font-family: var(--secondaryFont);
    color: red;
    margin: 0;
  }
`;

export const UnitInput = styled.div`
  & label {
    font-family: var(--secondaryFont);
    font-size: 14px;
    height: 14px;
  }

  & select {
    // width: 475px;
    width: 79%;
    background-color: #eee;
    border-radius: 10px;
    border: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IngredientsButton = styled.div`
  display: flex;
  align-self: center;
  margin: 5px;
  box-shadow: inset 0px 0px 0px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border-radius: 15px;
  border: 1px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: var(--secondaryFont);
  font-size: 12px;
  padding: 1px 4px;
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

export const Failure = styled.span`
  font-family: var(--secondaryFont);
  font-size: 12px;
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