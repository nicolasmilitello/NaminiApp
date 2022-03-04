import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;

  & img {
    margin: auto;
    text-align: center;
    max-width: 75px;
    max-height: 75px;
  }
`;

export const Menu = styled.div`
  display: table-cell;
`;

export const MenuOption = styled.span`
  display: inline;
  text-align: center;
  line-height: 65px;
  overflow: hidden;
  color: black;
  padding: 14px 16px;
  text-decoration: none;
`;

export const LinkStyle = styled(Link)`
  font-family: var(--primaryFont);
  text-decoration: none;

  &:hover {
    cursor: url(https://cdn.custom-cursor.com/db/9526/32/food-lavender-macarons-cursor.png),
      pointer !important;
    transition-property: font-size;
    transition-duration: 1s;
    font-size: 18px;
  }

  &:active {
    cursor: url(https://cdn.custom-cursor.com/db/9525/32/food-lavender-macarons-pointer.png),
      pointer !important;
  }
`;
