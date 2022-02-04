import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "../components/navBar.jsx";

configure({ adapter: new Adapter() });

describe("<NavBar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("El NavBar renderiza cuatro <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(4);
  });

  it('Un primer link debe llamarse "Home" y redireccionar a "/home".', () => {
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/home");

    expect(wrapper.find(Link).at(0).text()).toEqual("Home");
  });
  it('Un segundo link debe llamarse "Crear receta" y redireccionar a "/recipe".', () => {
    expect(wrapper.find(Link).at(1).prop("to")).toEqual("/recipe");

    expect(wrapper.find(Link).at(1).text()).toEqual("Crear receta");
  });
  it('Un tercer link debe llamarse "Crear categoría" y redireccionar a "/category".', () => {
    expect(wrapper.find(Link).at(2).prop("to")).toEqual("/category");

    expect(wrapper.find(Link).at(2).text()).toEqual("Crear categoría");
  });
  it('Un cuarto link debe llamarse "Crear ingrediente" y redireccionar a "/ingredient".', () => {
    expect(wrapper.find(Link).at(3).prop("to")).toEqual("/ingredient");

    expect(wrapper.find(Link).at(3).text()).toEqual("Crear ingrediente");
  });
});
