import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredients,
  getIngredientsRecipe,
  getUnits,
  putRecipe,
} from "../actions/index";
import CardIng from "./CardIng";
import IngredientAddEdit from "./IngredientAddEdit";
import "./Estilos globales.css";

function validate(ingState) {
  let errors = {};
  if (!ingState.ingredients.length) {
    errors.ingredients =
      "Es un requerimiento obligatorio ingresar al menos un ingredientes de la receta";
  }
  return errors;
}

export default function IngredientsEdit(props) {
  const [errors, setErrors] = useState({});
  // console.log(errors);
  const idRecipe = props.match.params.id; //para pasarle el id de la receta a editar como propiedad al componente para agregar ingredientes nuevos
  const [ingState, setIngState] = useState({
    ingredients: [],
  }); //estado en el que se van a ir almacenando los ingredientes que confirme y los que agregue nuevo

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsRecipe(props.match.params.id));
    dispatch(getIngredients());
    dispatch(getUnits());
  }, []);

  const ingredients = useSelector((state) => state.ing_rec); //listado de ingredientes de una receta en particular

  function handleDeleteIngredient(e, ing) {
    e.preventDefault();
    setIngState({
      ingredients: ingState.ingredients.filter(
        (el) => el.IngredientId !== ing.IngredientId
      ),
    });
  }

  const ingredientList = useSelector((state) => state.ingredients); //listado de todos los ingredientes existentes en la db

  const unitList = useSelector((state) => state.units); //listado de todas las unidades existentes en la db

  function obtenerIdUnidad(ingId) {
    const unitId = ingredientList.filter((el) => el.id === ingId)[0].UnitId;
    const unit = unitList.filter((el) => el.id === unitId)[0].name;
    return unit;
  }

  function obtenerId(ingId) {
    const select = ingredientList.filter((el) => el.id === ingId);
    return select[0];
  }

  ///////////////////////////////////////////////////////////////////////////////
  //                FALTA         HACER               LA                      FUNCION     //
  //          QUE             HAGA            DISPATCH                      A               //
  //        UNA             RUTA              PUT                           NUEVA           //
  //        QUE             DEBO              CREAR                   TODAVIA           //
  //////////////////////////////////////////////////////////////////////////////
  async function guardarCambios(e) {
    e.preventDefault();
    const response = await putRecipe(props.match.params.id, ingState);
    // if (response.status === 200) {
    //   setCode(true);
    // }
  }

  return (
    <div>
      <h1>Editar ingredientes</h1>
      {errors.ingredients && <p className="error">{errors.ingredients}</p>}
      {ingState.ingredients.map((ing) => {
        return (
          <div key={ing.IngredientId}>
            <span className="items">{`✔ ${
              obtenerId(ing.IngredientId)?.name
            }: `}</span>
            <span className="items">{`${ing.quantity} `}</span>
            <span className="items">{obtenerIdUnidad(ing.IngredientId)}</span>
            <button
              className="deleteButton"
              onClick={(e) => handleDeleteIngredient(e, ing)}
            >
              x
            </button>
          </div>
        );
      })}
      <div>
        {ingredients &&
          ingredients.map((el) => {
            return (
              <CardIng
                quantity={el.quantity}
                IngredientId={el.IngredientId}
                RecipeId={el.RecipeId}
                ingState={ingState}
                setIngState={setIngState}
                ingredientList={ingredientList} //el arreglo todos los ingredientes de la base de datos
                unitList={unitList}
                validate={validate}
                errors={errors}
                setErrors={setErrors}
                key={el.id}
              />
            );
          })}
      </div>
      <div>
        <IngredientAddEdit
          idRecipe={idRecipe}
          ingState={ingState}
          setIngState={setIngState}
          ingredientList={ingredientList} //el arreglo todos los ingredientes de la base de datos
          unitList={unitList}
          validate={validate}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
      {ingState.ingredients?.length ? (
        <div>
          <button onClick={(e) => guardarCambios(e)}>Guardar cambios</button>
        </div>
      ) : (
        ""
      )}
      <Link to={`/edit/${props.match.params.id}`}>
        <button>Volver</button>
      </Link>
    </div>
  );
}
