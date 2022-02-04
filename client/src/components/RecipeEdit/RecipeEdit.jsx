import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetail,
  getCategories,
  deleteRecipe,
  getIngredientsRecipe,
  getIngredients,
  getUnits,
} from "../../actions/index";
import { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import "../RecipeDetails/RecipeDetails.css";
import "../RecipeEdit/RecipeEdit.css";
import "../Globales.css";

export default function RecipeEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    dispatch(getCategories());
    dispatch(getIngredientsRecipe(props.match.params.id));
    dispatch(getIngredients());
    dispatch(getUnits());
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail); //para traerme los detalles de una receta (no incluye los ingredientes)

  const categories = useSelector((state) => state.categories); //para traerme el listado de categorías existentes

  const ingredients = useSelector((state) => state.ing_rec); //listado de ingredientes de una receta en particular

  const [est, setEst] = useState(false);

  function obtenerNombreCategoria() {
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

  function deleteRec(id) {
    dispatch(deleteRecipe(id));
    setEst(true);
    history.push("/home");
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
                  alt="img not found"
                />
              </div>
              <div className="returnAndDeleteRecipeEditPage">
                <button
                  className="deleteRecipeButton"
                  onClick={(e) => deleteRec(props.match.params.id)}
                >
                  <MdDeleteOutline />
                </button>
                <Link to={`/home/${props.match.params.id}`}>
                  <button className="returnButton">
                    <GiReturnArrow />
                  </button>
                </Link>
              </div>
              <div className="nameEditPage">
                <h1 className="nameRecipeEdit">{recipeDetails[0].name}</h1>
                <Link to={`/name/${props.match.params.id}`}>
                  <button className="grayEditButton">
                    <BiEditAlt />
                  </button>
                </Link>
              </div>

              <div className="titleAndButtonEdit">
                <img
                  className="imageEdit"
                  src={recipeDetails[0].img}
                  alt="img not found"
                />
                <Link
                  className="imgButtonEdit"
                  to={`/img/${props.match.params.id}`}
                >
                  <button className="grayEditButton ">
                    <BiEditAlt />
                  </button>
                </Link>
              </div>

              <div className="nameEditCategoryServingIngDetails">
                <div className="nameEditCategoryServingEdit">
                  <div className="categoryServingDetails">
                    <div className="titleAndButtonEdit">
                      <div className="titleSectionsDetails">
                        {obtenerNombreCategoria()}
                      </div>
                      <Link to={`/category/${props.match.params.id}`}>
                        <button className="grayEditButton">
                          <BiEditAlt />
                        </button>
                      </Link>
                    </div>

                    <div className="titleAndButtonEdit">
                      <div className="titleSectionsDetails">
                        {recipeDetails[0].servings} porciones
                      </div>
                      <Link to={`/servings/${props.match.params.id}`}>
                        <button className="grayEditButton">
                          <BiEditAlt />
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="ingredientsEdit">
                    <div className="ingredientsDetails">
                      <div className="titleAndButtonEdit">
                        <div className="titleSectionsDetails">
                          Ingredientes:
                        </div>
                        <Link to={`/ingredients/${props.match.params.id}`}>
                          <button className="grayEditButton">
                            <BiEditAlt />
                          </button>
                        </Link>
                      </div>
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
                </div>
              </div>

              <div className="stepsDetails">
                <div className="titleAndButtonEdit">
                  <div className="titleSectionsDetails">Pasos:</div>
                  <Link to={`/steps/${props.match.params.id}`}>
                    <button className="grayEditButton">
                      <BiEditAlt />
                    </button>
                  </Link>
                </div>
                <div className="allStepsItems">
                  {recipeDetails[0].steps.map((st, index) => (
                    <div className="stepItem">
                      <span className="numberStep">{`${index + 1}. `}</span>
                      <span>{`${st}`}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* {est ? (
                <div>
                  <div className="success">Receta eliminada exitosamente</div>
                </div>
              ) : (
                <div>
                  <Link to={`/home/${props.match.params.id}`}>
                    <button className="grayButton">
                      <GiReturnArrow />
                    </button>
                  </Link>
                </div>
              )} */}
            </div>
          ) : (
            <div className="lds-hourglass"></div>
          )}
        </div>
      </div>
    </div>
  );
}
