import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Globales.css";
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
    <div className="card">
      <div className="cardContent">
        <img
          className="imagenCard"
          src={img}
          // onerror="this.src='URL_de_imagen_alternativa.jpg';"
          alt="not found"
        />
        <div className="infoCard">
          <h3 className="nameRecipeCard">{name}</h3>
          <h5 className="categoryRecipeCard">{cat}</h5>
          <h6 className="servingsRecipeCard">{servings} porciones</h6>
          <Link to={`/edit/${id}`}>
            <button className="grayButton">Editar receta</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
