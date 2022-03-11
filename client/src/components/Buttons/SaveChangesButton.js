import {
  disabledProps,
  savePlusSharedProps,
  saveShowItemsSharedProps,
  hoverSavePlusButtons,
  activePseudoClass,
} from "./SharedProps";

export const disabledSaveChangesButton = `
  ${saveShowItemsSharedProps}
  ${disabledProps}
`;

export const saveChangesButton = `
  ${saveShowItemsSharedProps}
  ${savePlusSharedProps}

  &:hover {
    ${hoverSavePlusButtons}
  }

  &:active {
    ${activePseudoClass}
  }
`;
