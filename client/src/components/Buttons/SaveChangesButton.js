const sharedProps = `
  display: flex;
  align-self: center;

  margin: 5px;

  font-family: var(--secondaryFont);
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  
  border-radius: 13px;
  padding: 1px 4px;
`;

export const disabledSaveChangesButton = `
  ${sharedProps}

  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  cursor: default;
  color: #666666;
  text-shadow: 0px 1px 0px #ffffff;
`;

export const saveChangesButton = `
${sharedProps}

  cursor: pointer;
  color: #ffffff;
  box-shadow: inset 0px 0px 2px 0px #3dc21b;
  background: linear-gradient(to bottom, #23b84a 5%, #4d9925 100%);
  background-color: #23b84a;
  border: 1px solid #18ab29;
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
