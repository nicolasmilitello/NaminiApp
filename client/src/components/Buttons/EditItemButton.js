export const editItemButton = `
  display: flex;
  align-self: center;
  margin-left: 5px;
  border-radius: 15px;
  cursor: pointer;
  color: #ffffff;
  font-size: 12px;
  padding: 1px 4px;
  text-decoration: none;
  
  box-shadow: inset 0px 1px 0px 0px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border: 1px solid #29668f;
  text-shadow: 0px 1px 0px #2b665e;

  &:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }

  &:active {
    position: relative;
    top: 1px;
  }
  `;
