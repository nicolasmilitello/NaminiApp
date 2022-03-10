import { someProps } from "./EditRecipeButton";

export const deleteRecipeButton = `
  ${someProps}

  box-shadow: inset 0px 1px 0px 0px #cf866c;
  background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
  background-color: #d0451b;
  border: 1px solid #942911;

  &:hover {
    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    background-color: #bc3315;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;
