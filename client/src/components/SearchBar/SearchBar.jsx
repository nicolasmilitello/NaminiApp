import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes, getRecipes } from "../../actions";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import "./SearchBar.css";
import "../Globales.css";

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
    const foundRecipes = await dispatch(getNameRecipes(name));
  }

  return (
    <div className="inputAndButton">
      <input
        className="inputSearchBar"
        type="text"
        value={name}
        placeholder="  Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="grayButtonRefresh"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        <AiOutlineSearch />
      </button>
      <button
        className="grayButtonRefresh"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <BiRefresh />
      </button>
    </div>
  );
}
