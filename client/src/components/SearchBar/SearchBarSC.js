import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & input {
    width: 75%;
    height: 18px;
    background-color: #eee;
    border-radius: 10px;
    border: none;
    font-size: 12px;
  }

  & button {
    display: flex;
    align-self: center;
    margin-left: 5px;
    box-shadow: inset 0px 0px 0px 0px #91b8b3;
    background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
    background-color: #768d87;
    border-radius: 15px;
    border: 1px solid #566963;
    cursor: pointer;
    color: #ffffff;
    font-family: "ABeeZee";
    font-size: 16px;
    padding: 1px 4px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #2b665e;

    &:hover {
      background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
      background-color: #6c7c7c;
    }

    &:active {
      position: relative;
      top: 1px;
    }
  }
`;

export const Input = styled.input``;
