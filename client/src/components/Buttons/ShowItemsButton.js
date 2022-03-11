import {
  saveShowItemsSharedProps,
  searchReloadShowItemsSharedProps,
  activePseudoClass,
} from "./SharedProps";

export const showItemsButton = `
  ${saveShowItemsSharedProps}

  ${searchReloadShowItemsSharedProps}

  &:active {
    ${activePseudoClass}
  }
`;
