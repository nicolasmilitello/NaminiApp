import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 55%;
  box-sizing: content-box;
  margin-top: 20px;
  margin-bottom: 0px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
  padding-bottom: 10px;

  & h1 {
    width: 75%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 95%;
  margin-right: 2.5%;
  margin-left: 2.5%;
`;

export const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 0;
  width: 100%;
  height: 33px;
`;

export const LabelAndInput = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;

  & label {
    display: flex;
    justify-content: flex-start;
    width: 12%;
    float: left;
  }

  & input {
    width: 88%;
  }
`;

export const Error = styled.span`
  display: block;
  font-size: 11px;
  color: red;
  margin: 2px 0 0 0;
`;

export const CategoryAndServingsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 8px;
`;

export const CategorySelect = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 4%;
  width: 55%;
  height: 33px;
`;

export const LabelAndSelect = styled.div`
  width: 100%;

  & label {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    float: left;
    width: 25%;
  }

  & select {
    display: flex;
    align-items: flex-start;
    width: 75%;
  }
`;

export const ServingInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4%;
  width: 37%;
  height: 33px;
`;

export const LabelAndServingsInput = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  & label {
    display: flex;
    justify-content: flex-start;
    float: left;
    width: 36%;
  }

  & input {
    width: 61%;
  }
`;

export const IngredientInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 38px;
  margin-top: 8px;
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;

  & label {
    display: flex;
    justify-content: flex-start;
    width: 18%;
  }
`;

export const SelectInputContainer = styled.div`
  width: 70%;

  & select {
    width: 75%;
  }

  & input {
    width: 21%;
    margin-left: 2%;
  }
`;

export const Unit = styled.span`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 21.5%;
`;

export const AddButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButtonDisabled = styled.button`
  align-items: center;
  height: 17px;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 13px;
  border: 1px solid #dcdcdc;
  font-size: 15px;
  padding: 0px 0px;
  display: inline-block;
  cursor: default;
  color: #666666;
  font-family: Arial;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin-left: 2px;
`;

export const AddButton = styled.button`
  align-items: center;
  height: 17px;
  font-size: 15px;
  padding: 0px 0px;
  box-shadow: inset 0px 0px 2px 0px #3dc21b;
  background: linear-gradient(to bottom, #23b84a 5%, #4d9925 100%);
  background-color: #23b84a;
  border-radius: 13px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  text-decoration: none;
  text-shadow: 0px 0px 0px #2f6627;
  margin-left: 2px;

  &:hover {
    background: linear-gradient(to bottom, #4d9925 5%, #23b84a 100%);
    background-color: #4d9925;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const AddedIngredientsContainer = styled.div`
  width: 300px;
  margin-top: 2px;
  margin-right: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
  display: flex;
  justify-content: space-between;

  & span {
    display: flex;
    align-items: center;
    text-align: justify;
    font-size: 12px;
  }

  & button {
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
  }
`;

export const StepsInputsContainer = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 113px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & label {
    align-self: flex-start;
  }
`;

export const StepInputAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  & textarea {
    width: 96.2%;
    height: 70px;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 3.8%;
  }
`;

export const ConfirmedStepContainer = styled.div`
  width: 94%;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & button {
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
  }
`;

export const Item = styled.div`
  text-align: justify;
`;

export const Step = styled.span`
  font-size: 12px;
  ${(props) => (props.bold ? `font-weight: bold;` : null)}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13px;
  width: 100%;
  height: 33px;
`;

export const LabelAndImageInput = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & label {
    display: flex;
    justify-content: flex-start;
    float: left;
    width: 11%;
  }

  & input {
    width: 89%;
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
