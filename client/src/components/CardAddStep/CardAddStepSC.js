import styled from "styled-components";
import { disabledPlusButton, plusButton } from "../Buttons/PlusButtons";

export const Container = styled.div`
  margin-top: 20px;
`;

export const AddStepForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TexteareaAndButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 10%;
`;

export const AddStepButton = styled.button`
  ${plusButton}
`;

export const DisabledAddButton = styled.button`
  ${disabledPlusButton}
`;

export const ErrorStepLength = styled.p`
  height: 11px;
  color: red;
  margin: 2px 0 3.5px 0;
`;
