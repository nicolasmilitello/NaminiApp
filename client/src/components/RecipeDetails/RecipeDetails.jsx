import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetail,
  getCategories,
  getIngredientsRecipe,
  getIngredients,
  getUnits,
} from "../../actions";
import { useEffect } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import { BiEditAlt, BiDish } from "react-icons/bi";
import ImgNotFound from "../../img/ImgNotFound.png";
import "../Globales.css";
import "../RecipeDetails/RecipeDetails.css";

export default function RecipeDetails(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    dispatch(getIngredientsRecipe(props.match.params.id));
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getUnits());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail); //detalles de una receta (no incluye los ingredientes)

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
      <div className="detailsContent">
        <div className="detailsRecipe">
          {recipeDetails?.length ? (
            <div className="infoRecipe">
              <div className="imgConteiner">
                <img
                  className="imgRecipeDetails"
                  src={recipeDetails[0].img}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = ImgNotFound;
                  }}
                  alt="not found"
                />
              </div>
              <div className="returnAndDeleteRecipeEditPage">
                <Link to={`/edit/${recipeDetails[0].id}`}>
                  <button className="editRecipeButton">
                    <BiEditAlt />
                  </button>
                </Link>
                <Link to={"/home"}>
                  <button className="returnButton">
                    <GiReturnArrow />
                  </button>
                </Link>
              </div>
              <div className="nameRecipeDetails">
                <h1>{recipeDetails[0].name}</h1>
              </div>
              <div className="nameEditCategoryServingIngDetails">
                <div className="nameEditCategoryServingDetails">
                  <div className="categoryServingDetails">
                    <div className="iconCategoryRecipeDetails">
                      <BiDish />
                    </div>
                    <div className="titleCategoryDetails">{`${cats()}`}</div>
                    <div>
                      <ImSpoonKnife />
                    </div>
                    <div className="titleSectionsDetails">
                      {recipeDetails[0].servings} porciones
                    </div>
                  </div>
                </div>
                <div className="ingredientsDetails">
                  <span className="titleSectionsDetails">Ingredientes:</span>
                  {ingredients?.map((i, index) => (
                    <div key={index}>
                      <span className="ingredientItems">{`${
                        obtenerId(i.IngredientId) &&
                        obtenerId(i.IngredientId)?.name
                      }: `}</span>
                      <span className="ingredientItems">{`${i.quantity} `}</span>
                      <span className="ingredientItems">{`${obtenerIdUnidad(
                        i.IngredientId
                      )}`}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="stepsDetails">
                <span className="titleSectionsDetails">Pasos:</span>

                <div className="allStepsItems">
                  {recipeDetails[0].steps.map((st, index) => (
                    <div className="stepItem" key={index}>
                      <span className="numberStep">{`${index + 1}. `}</span>
                      <span>{`${st}`}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="lds-hourglass"></div>
          )}
        </div>
      </div>
    </div>
  );
}
