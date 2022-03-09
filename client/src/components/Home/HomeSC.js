import styled from "styled-components";
import { ScaleDownCenter } from "../Animations/ScaleDownCenter";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FiltersTitleAndSearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin-top: 20px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;

  & h1 {
    width: 75%;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5.5px;
  width: 75%;
`;

export const CategoryFilter = styled.select`
  height: 18px;
  width: 64%;
`;

export const AToZFilter = styled.select`
  height: 18px;
  width: 31%;
  margin-left: 8px;
`;

export const SearchBarContainer = styled.div`
  width: 75%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  align-items: center;
`;

export const NoResultsContainer = styled.div`
  font-family: var(--secondaryFont);
  margin: 15%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
`;

export const AnimationContainer = styled.div`
  font-size: 150px;
  height: 100px;

  ${ScaleDownCenter}
`;

export const LoadingAnimation = styled.div`
  display: inline-block;
  position: relative;

  &:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 20px solid #691281;
    border-color: #ffc0db transparent #daf5b1 transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;
