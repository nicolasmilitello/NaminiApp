import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 13px;
  margin-top: 5px;
  margin-bottom: 20px;
  box-sizing: content-box;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background-color: rgba(242, 242, 205, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 2px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 2px rgba(40, 40, 40, 0.35) solid;
  border-right: 2px rgba(40, 40, 40, 0.35) solid;
  padding-bottom: 4px;
`;

export const NextPreviousButtonDisabled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 0px 0px #efdcfb;
  background-color: transparent;
  border-radius: 3px;
  border: 0px solid #c584f3;
  cursor: default;
  color: #8d8d8d;
  font-family: var(--secondaryFont);
  font-size: 14px;
  padding: 2px 4px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`;

export const NextPreviousButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 0px 0px #efdcfb;
  background-color: transparent;
  border-radius: 3px;
  border: 0px solid #c584f3;
  cursor: pointer;
  color: #661e66;
  font-family: var(--secondaryFont);
  font-size: 14px;
  padding: 2px 4px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  &:hover {
    background-color: #e2d3ee;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const SelectedPageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 0px 0px #efdcfb;
  background-color: #e7d0fa;
  border-radius: 3px;
  border: 1px solid #c584f3;
  cursor: default;
  color: #661e66;
  font-family: var(--secondaryFont);
  font-size: 11px;
  padding: 2px 4px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
`;

export const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 0px 0px 0px #efdcfb;
  background-color: transparent;
  border-radius: 3px;
  border: 0px solid #c584f3;
  cursor: pointer;
  color: #661e66;
  font-family: var(--secondaryFont);
  font-size: 11px;
  padding: 2px 4px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;

  &:hover {
    background-color: #e2d3ee;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
