import styled from "styled-components";
import { disabledPlusButton, plusButton } from "../Buttons/PlusButtons";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 350px;
  max-width: 350px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  width: 100%;
`;

export const IngredientConfirmForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: flex-end;
`;

export const IngredientItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const IngredientName = styled.span`
  display: flex;
  align-items: flex-end;
`;

export const IngredientInput = styled.input`
  width: 50px;
  background: inherit;
  margin-left: 10px;
`;

export const Unit = styled.span`
  margin-right: 5px;
`;

export const ConfirmIng = styled.button`
  ${plusButton}
`;

export const DisabledButton = styled.button`
  ${disabledPlusButton}
`;

export const ErrorContainer = styled.span`
  height: 14px;
  width: 100%;
  margin: 2px;
  font-size: 11px;
  color: red;
`;
