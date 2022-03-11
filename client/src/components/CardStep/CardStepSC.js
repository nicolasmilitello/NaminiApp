import styled from "styled-components";
import { disabledPlusButton, plusButton } from "../Buttons/PlusButtons";

export const Container = styled.div`
  width: 100%;
`;

export const EditStepFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  width: 100%;
`;

export const TexteareaAndButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StepNumber = styled.span`
  margin-top: 2px;
  font-weight: bold;
  font-size: 12px;
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 10%;
  background: inherit;
`;

export const ConfirmStep = styled.button`
  ${plusButton}
`;

export const DisabledButton = styled.button`
  ${disabledPlusButton}
`;

export const ErrorStepLength = styled.span`
  height: 14px;
  font-size: 11px;
  color: red;
`;
