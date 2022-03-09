import styled from "styled-components";

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

export const ErrorContainer = styled.span`
  height: 14px;
  width: 100%;
  margin: 2px;
  font-size: 11px;
  color: red;
`;
