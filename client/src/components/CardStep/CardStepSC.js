import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
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
  font-family: var(--secondaryFont);
  margin-top: 3px;
  font-size: 14px;
  font-weight: bold;
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 10%;
  font-family: var(--secondaryFont);
  background: inherit;
  border: none;
`;

export const ConfirmStep = styled.button`
  display: flex;
  align-items: center;
  height: 17px;
  font-size: 15px;
  padding: 0px 0px;
  margin-left: 1%;
  box-shadow: inset 0px 0px 2px 0px #3dc21b;
  background: linear-gradient(to bottom, #23b84a 5%, #4d9925 100%);
  background-color: #23b84a;
  border-radius: 13px;
  border: 1px solid #18ab29;
  cursor: pointer;
  color: #ffffff;
  font-family: var(--secondaryFont);
  font-weight: bold;

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
  height: 17px;
  font-size: 15px;
  padding: 0px 0px;
  margin-left: 1%;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 13px;
  border: 1px solid #dcdcdc;
  cursor: default;
  color: #666666;
  font-family: var(--secondaryFont);

  font-weight: bold;

  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`;

export const ErrorStepLength = styled.span`
  height: 14px;
  font-size: 10px;
  color: red;
`;
