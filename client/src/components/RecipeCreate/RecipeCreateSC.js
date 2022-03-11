import styled from "styled-components";
import { disabledPlusButton, plusButton } from "../Buttons/PlusButtons";
import { deleteConfirmedItemButton } from "../Buttons/DeleteConfirmedItemButton";
import {
  disabledSaveChangesButton,
  saveChangesButton,
} from "../Buttons/SaveChangesButton";
import { glassStyle } from "../GlassStyle/GlassStyle";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  ${glassStyle}

  flex-direction: column;
  width: 55%;
  box-sizing: content-box;
  margin-top: 20px;
  margin-bottom: 0px;
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
  ${disabledPlusButton}
`;

export const AddButton = styled.button`
  ${plusButton}
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
    ${deleteConfirmedItemButton}
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
    ${deleteConfirmedItemButton}
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
