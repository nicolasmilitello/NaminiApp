import { sharedProps } from "./SaveChangesButton";

export const showItemsButton = `
  ${sharedProps}

  box-shadow: inset 0px 0px 0px 0px #91b8b3;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border: 1px solid #566963;
  cursor: pointer;
  color: #ffffff;
  text-shadow: 0px 1px 0px #2b665e;

  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
