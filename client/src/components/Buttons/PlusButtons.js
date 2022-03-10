export const sharedProps = `
  margin-left: 2px;
  height: 17px;
  border-radius: 13px;
  font-size: 15px;
  padding: 0px 0px;
  text-decoration: none;
`;

export const disabledPlusButton = `
  ${sharedProps}
  cursor: default;
  color: #666666;

  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
`;

export const plusButton = `
  ${sharedProps}
  cursor: pointer;
  color: #ffffff;
  
  box-shadow: inset 0px 1px 0px 0px #3dc21b;
  background: linear-gradient(to bottom, #23b84a 5%, #4d9925 100%);
  background-color: #23b84a;
  border: 1px solid #18ab29;

  &:hover {
    background: linear-gradient(to bottom, #4d9925 5%, #23b84a 100%);
    background-color: #4d9925;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
