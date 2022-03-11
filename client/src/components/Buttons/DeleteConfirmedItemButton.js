import {
  deletePlusSharedProps,
  deleteSharedProps,
  activePseudoClass,
} from "./SharedProps";

export const deleteConfirmedItemButton = `
  ${deletePlusSharedProps}

  margin-left: 5px;

  color: #ffffff;

  cursor: pointer;

  box-shadow: inset 0px 1px 0px 0px #cf866c;

  ${deleteSharedProps}

    &:active {
      ${activePseudoClass}
    }
`;
