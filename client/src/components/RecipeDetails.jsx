import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetail,
  getCategories,
  getIngredientsRecipe,
  getIngredients,
  getUnits,
} from "../actions/index";
import { useEffect } from "react";
import "./RecipeDetails.css";
import "./Estilos globales.css";
import NavBar from "./NavBar";

export default function RecipeDetails(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    dispatch(getIngredientsRecipe(props.match.params.id));
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getUnits());
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail); //para traerme los detalles de una receta (no incluye los ingredientes)

  const categories = useSelector((state) => state.categories); //para traerme el listado de categorías existentes

  const ingredients = useSelector((state) => state.ing_rec); //listado de ingredientes de una receta en particular

  function cats() {
    let categoryRecipe = categories
      ? categories.filter((cat) => recipeDetails[0].CategoryId === cat.id)
      : "";
    let nameCategory = categoryRecipe ? categoryRecipe[0]?.name : "";
    return nameCategory;
  }

  const ingredientList = useSelector((state) => state.ingredients); //listado de todos los ingredientes existentes en la db

  const unitList = useSelector((state) => state.units); //listado de todas las unidades existentes en la db

  function obtenerIdUnidad(ingId) {
    const unitId = ingredientList?.filter((el) => el.id === ingId)[0]?.UnitId;
    const unit = unitList?.filter((el) => el.id === unitId)[0]?.name;
    return unit;
  }

  function obtenerId(ingId) {
    const select = ingredientList?.filter((el) => el.id === ingId);
    return select && select[0];
  }

  return (
    <div>
      <div className="det">
        <div className="details">
          {recipeDetails?.length ? (
            <div>
              <div>
                <img
                  className="img"
                  src={recipeDetails[0].img}
                  alt="not found"
                />
              </div>
              <div>
                <h1>{recipeDetails[0].name}</h1>
              </div>
              <div>
                <Link to={`/edit/${recipeDetails[0].id}`}>
                  <button>Editar receta</button>
                </Link>
              </div>
              <span className="items">{`Categoría: ${cats()}`}</span>
              <h5>Porciones: {recipeDetails[0].servings}</h5>
              <h5>Pasos:</h5>
              {/* <div>
            {recipeDetails[0].steps.map((st, index) => (
              <div className="items">{`${Number(st[0])}. ${st[1]
                .charAt(0)
                .toUpperCase()}${st[1].slice(1)}`}</div>
            ))}
          </div> */}
              <div>
                {recipeDetails[0].steps.map((st, index) => (
                  <div className="items">{`${index + 1}. ${st}`}</div>
                ))}
              </div>

              <h5>Ingredientes:</h5>
              <div>
                {ingredients?.map((i, index) => (
                  <div>
                    <span className="items">{`${
                      obtenerId(i.IngredientId) &&
                      obtenerId(i.IngredientId)?.name
                    }: `}</span>
                    <span className="items">{`${i.quantity} `}</span>
                    <span className="items">{`${obtenerIdUnidad(
                      i.IngredientId
                    )}`}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div class="lds-hourglass"></div>
            // <p>Loading...</p>
          )}
          {/* <button onClick={(e) => verInfo(e)}>Volver</button> */}
        </div>
      </div>
    </div>
  );
}
