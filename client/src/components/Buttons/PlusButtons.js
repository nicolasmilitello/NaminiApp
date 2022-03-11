import {
  disabledProps,
  savePlusSharedProps,
  deletePlusSharedProps,
  hoverSavePlusButtons,
  activePseudoClass,
} from "./SharedProps";

export const disabledPlusButton = `
  ${deletePlusSharedProps}
  ${disabledProps}
`;

export const plusButton = `
  ${deletePlusSharedProps}
  ${savePlusSharedProps}

  &:hover {
    ${hoverSavePlusButtons}
  }

  &:active {
    ${activePseudoClass}
  }
`;
