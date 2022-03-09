import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 300px;
  height: 180px;
  margin: 10px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #cccccc;
    background-color: white;
  }
`;

export const Image = styled.img`
  max-width: 60%;
  min-width: 60%;
  width: 60%;
  height: 100%;
  object-fit: cover;
  border-radius: 10% 78% 97% 10% / 10% 100% 100% 10%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 80%;

  & div {
    font-size: 20px;
    height: 21px;
  }

  & h6 {
    font-family: var(--primaryFont);
    margin: 0;
  }

  & h3 {
    font-family: var(--primaryFont);
    font-size: 20px;
    margin: 0;
  }
`;
