import {
  searchReloadShowItemsSharedProps,
  activePseudoClass,
} from "./SharedProps";

export const SearchBarButton = `
  display: flex;
  align-self: center;
  margin-left: 5px;

  font-size: 16px;

  padding: 1px 4px;
  border-radius: 15px;
  
  ${searchReloadShowItemsSharedProps}
  

  &:active {
    ${activePseudoClass}
  }
`;
