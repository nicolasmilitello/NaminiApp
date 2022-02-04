import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameRecipes } from "../../actions";
import "./SearchBar.css";
import "../Globales.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
    // setName(""); //para limpiar el input pero no me funciona
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameRecipes(name)); //name es el estado que lo setee con lo que ingresó el usuario en handleInputChange().
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
        className="grayButton"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </div>
  );
}
