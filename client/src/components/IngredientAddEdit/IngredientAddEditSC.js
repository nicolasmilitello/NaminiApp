import styled from "styled-components";

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

export const IngrError = styled.p`
  height: 10px;
  font-size: 11px;
  color: red;
  margin: 2px 0 3.5px 0;
`;
