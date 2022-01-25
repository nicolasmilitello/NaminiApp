import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetail,
  getCategories,
  deleteRecipe,
  getIngredientsRecipe,
  getIngredients,
  getUnits,
} from "../actions/index";
import { useEffect, useState } from "react";
import "./RecipeEdit.css";
import "./Estilos globales.css";
import NavBar from "./NavBar";

export default function RecipeEdit(props) {
  const dispatch = useDispatch();

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
  // console.log(ingredients);

  // const estado = useSelector((state) => state.estado);
  // console.log(estado);
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
  // console.log(unitList);

  function obtenerIdUnidad(ingId) {
    // console.log(ingId);
    const unitId = ingredientList?.filter((el) => el.id === ingId)[0]?.UnitId;
    // console.log(unitId);
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
  }

  return (
    <div>
      <div className="det">
        {/* <div>
        <NavBar />
      </div> */}
        <div className="details">
          {recipeDetails?.length ? (
            <div>
              <h1>Editar receta</h1>
              <div></div>
              <img
                className="imagenEdit"
                src={recipeDetails[0].img}
                alt="img not found"
              />
              <div>
                <Link to={`/img/${props.match.params.id}`}>
                  <button>Editar imagen</button>
                </Link>
              </div>

              <h5>{recipeDetails[0].name}</h5>
              <Link to={`/name/${props.match.params.id}`}>
                <button>Editar nombre</button>
              </Link>

              <h5>Categoría: {obtenerNombreCategoria()}</h5>
              <Link to={`/category/${props.match.params.id}`}>
                <button>Editar categoría</button>
              </Link>

              <h5>Porciones: {recipeDetails[0].servings}</h5>
              <Link to={`/servings/${props.match.params.id}`}>
                <button>Editar porciones</button>
              </Link>

              <h5>Pasos:</h5>
              <div>
                {recipeDetails[0].steps.map((st, index) => (
                  <div>
                    <h6 key={index + 1}>{`${index + 1}. ${st
                      ?.charAt(0)
                      .toUpperCase()}${st.slice(1)}`}</h6>
                  </div>
                ))}
                <div>
                  <Link to={`/steps/${props.match.params.id}`}>
                    <button>Editar pasos</button>
                  </Link>
                </div>
              </div>
              <div>
                <h5>Ingredientes:</h5>
                <div>
                  {ingredients?.map((i, index) => (
                    <div key={index}>
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
                <Link to={`/ingredients/${props.match.params.id}`}>
                  <button>Editar ingredientes</button>
                </Link>
              </div>
              {est ? (
                <div>
                  <div className="success">Receta eliminada exitosamente</div>
                  <Link to={"/home"}>
                    <button>Volver</button>
                  </Link>
                </div>
              ) : (
                <div>
                  <button onClick={(e) => deleteRec(props.match.params.id)}>
                    Eliminar receta
                  </button>
                  <Link to={`/home/${props.match.params.id}`}>
                    <button>Volver</button>
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div className="lds-hourglass"></div>
            // <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
