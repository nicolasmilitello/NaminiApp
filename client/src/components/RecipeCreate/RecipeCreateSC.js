import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 750px;
  box-sizing: content-box;
  margin-top: 20px;
  margin-bottom: 0px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
  padding-bottom: 10px;

  & h1 {
    font-family: var(--primaryFont);
    width: 75%;
    margin-top: 20px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const NameInput = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 33px;

  & input {
    width: 90%;
    color: rgb(73, 72, 72);
    font-family: var(--secondaryFont);
    background-color: #eee;
    border-radius: 10px;
    border: none;
  }

  & span {
    font-family: var(--secondaryFont);
    font-size: 10px;
    color: red;
    margin: 0px;
  }
`;
