export const disabledProps = `
  cursor: default;
  color: #666666;

  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  `;

export const savePlusSharedProps = `
  color: #ffffff;

  cursor: pointer;

  background: linear-gradient(to bottom, #23b84a 5%, #4d9925 100%);
  background-color: #23b84a;
  border: 1px solid #18ab29;

  box-shadow: inset 0px 1px 0px 0px #3dc21b;
`;

export const deleteEditReturnSharedProps = `
  display: flex;
  align-self: center;

  margin: 5px;

  font-size: 15px;

  border-radius: 13px;
  cursor: pointer;
  color: #ffffff;
  padding: 3px 8px;
`;

export const deletePlusSharedProps = `
  margin-left: 2px;

  height: 17px;

  font-size: 15px;

  border-radius: 13px;
  padding: 0px 0px;
`;

export const deleteSharedProps = `
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border: 1px solid #942911;

  &:hover {
    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    background-color: #bc3315;
  }
  `;

export const saveShowItemsSharedProps = `
  margin: 5px;

  font-family: var(--secondaryFont);
  font-size: 12px;
  font-weight: bold;
  text-decoration: none;
  
  border-radius: 13px;
  padding: 1px 4px;
`;

export const searchReloadShowItemsSharedProps = `
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border: 1px solid #566963;
  cursor: pointer;
  color: #ffffff;

    &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
`;

export const hoverSavePlusButtons = `
    background: linear-gradient(to bottom, #4d9925 5%, #23b84a 100%);
    background-color: #4d9925;
`;

export const activePseudoClass = `
    position: relative;
    top: 1px;
  `;
