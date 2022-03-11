import styled from "styled-components";
import { disabledPlusButton, plusButton } from "../Buttons/PlusButtons";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 70%;
  height: 33px;
`;

export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;

  & select {
    display: flex;
    align-self: flex-end;
    height: 18px;
  }

  & input {
    display: flex;
    align-self: flex-end;
    width: 100px;
    height: 18px;
    margin-left: 10px;
    padding: 0;
  }
`;

export const Unit = styled.span`
  width: 100px;
  font-size: 13px;
  margin-left: 5px;
`;

export const AddIngrButton = styled.button`
  ${plusButton}
`;

export const DisabledAddButton = styled.button`
  ${disabledPlusButton}
`;

export const IngrError = styled.p`
  height: 10px;
  font-size: 11px;
  color: red;
  margin: 2px 0 3.5px 0;
`;
