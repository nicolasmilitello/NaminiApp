import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiDish } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
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
        <img className="imagenCard" src={img} alt="not found" />
        <div className="infoCard">
          <div className="iconAndCategory">
            <div className="iconCategory">
              <BiDish />
            </div>
            <h6 className="categoryRecipeCard">{cat}</h6>
          </div>
          <h3 className="nameRecipeCard">{name}</h3>
          <div className="iconAndServings">
            <div>
              <ImSpoonKnife />
            </div>
            <h6 className="servingsRecipeCard">{servings} porciones</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
