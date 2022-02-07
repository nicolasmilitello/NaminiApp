import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../actions";
import "./SearchBar.css";
import "../Globales.css";

export default function SearchBar(setSearch) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const foundRecipes = await dispatch(getNameRecipes(name));
  }

  return (
    <div className="inputAndButton">
      <input
        className="inputSearchBar"
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className="grayButtonSearch"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </div>
  );
}
