import { deleteEditReturnSharedProps, activePseudoClass } from "./SharedProps";

export const editRecipeButton = `
  ${deleteEditReturnSharedProps}

  box-shadow: inset 0px 1px 0px 0px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border: 1px solid #29668f;

  &:hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }

  &:active {
    ${activePseudoClass}
  }
`;
