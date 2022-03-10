import {
  deleteEditReturnSharedProps,
  deleteSharedProps,
  activePseudoClass,
} from "./SharedProps";

export const deleteRecipeButton = `
  ${deleteEditReturnSharedProps}

  box-shadow: inset 0px 1px 0px 0px #5c0a07;

  ${deleteSharedProps}
  
  &:active {
    ${activePseudoClass}
  }
`;
