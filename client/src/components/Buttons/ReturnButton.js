import { deleteEditReturnSharedProps, activePseudoClass } from "./SharedProps";

export const returnButton = `
  ${deleteEditReturnSharedProps}
  
  box-shadow: inset 0px 1px 0px 0px #0a3d36;
  background: linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
  background-color: #768d87;
  border: 1px solid #566963;

  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }

  &:active {
    ${activePseudoClass}
  }
`;
