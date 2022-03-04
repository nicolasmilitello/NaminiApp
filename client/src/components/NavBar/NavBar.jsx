import React from "react";

//? STYLES:
import { Container, Menu, MenuOption, LinkStyle } from "./NavBarSC";

//? IMAGES:
import Logo from "../../logo.png";
import Nombre from "../../img/nombre dos líneas.png";

export default function NavBar() {
  return (
    <nav>
      <Container>
        <img src={Logo} alt="not found" />

        <Menu>
          <MenuOption>
            <LinkStyle to="/home">Home</LinkStyle>
          </MenuOption>

          <MenuOption>
            <LinkStyle to="/recipe">Crear receta</LinkStyle>
          </MenuOption>

          <MenuOption>
            <LinkStyle to="/category">Crear categoría</LinkStyle>
          </MenuOption>

          <MenuOption>
            <LinkStyle to="/ingredient">Crear ingrediente</LinkStyle>
          </MenuOption>
        </Menu>

        <img src={Nombre} alt="not found" />
      </Container>
    </nav>
  );
}
