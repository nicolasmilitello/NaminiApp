import React from "react";
import { Link } from "react-router-dom";
import { getCategories, deleteRecipe } from "../actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Card.css";

export default function Card({ id, name, servings, category, img }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  let categoryRecipe = categories?.filter((cat) => category === cat.id);
  let cat = categoryRecipe ? categoryRecipe[0]?.name : "";

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div>
      <div className="card">
        <img className="imagenCard" src={img} alt="not found" />
        <div>
          <h3>{name}</h3>
          <h5>Categoría: {cat}</h5>
          <h6>{servings} porciones</h6>
          <Link to={`/edit/${id}`}>
            <button>Editar receta</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
