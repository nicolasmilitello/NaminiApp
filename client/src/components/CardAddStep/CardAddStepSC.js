import styled from "styled-components";

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
  font-family: var(--secondaryFont);
  background-color: #eee;
  border: none;
`;

export const AddStepButton = styled.button`
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

  .greenButtonStepEditPage:hover {
    background: linear-gradient(to bottom, #4d9925 5%, #23b84a 100%);
    background-color: #4d9925;
  }

  .greenButtonStepEditPage:active {
    position: relative;
    top: 1px;
  }
`;

export const DisabledAddButton = styled.button`
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

export const ErrorStepLength = styled.p`
  height: 10px;
  font-size: 10px;
  color: red;
  margin: 2px 0 3.5px 0;
`;
