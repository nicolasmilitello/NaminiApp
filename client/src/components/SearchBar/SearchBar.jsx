import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

//? STYLES:
import { Container } from "./SearchBarSC";

//? ICONS:
import { BiRefresh } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

//? ACTIONS:
import { getNameRecipes, getRecipes } from "../../actions";

export default function SearchBar(setSearch) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setName("");
    await dispatch(getNameRecipes(name));
  }

  return (
    <Container>
      <input
        type="text"
        value={name}
        placeholder="  Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        <AiOutlineSearch />
      </button>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <BiRefresh />
      </button>
    </Container>
  );
}
