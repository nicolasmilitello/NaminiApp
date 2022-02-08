import React from "react";
import { getCategories } from "../../actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiDish } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";
import ImgNotFound from "../../img/ImgNotFound.png";
import "../Globales.css";
import "./Card.css";

export default function Card({ id, name, servings, category, img }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  let categoryRecipe = categories?.filter((cat) => category === cat.id);
  let cat = categoryRecipe ? categoryRecipe[0]?.name : "";

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="card">
      <div className="cardContent">
        <img
          src={img}
          className="imagenCard"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = ImgNotFound;
          }}
          alt="not found"
        />
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
