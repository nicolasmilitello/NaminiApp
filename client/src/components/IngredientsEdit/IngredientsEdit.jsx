import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getIngredients,
  getIngredientsRecipe,
  getUnits,
  putRecipe,
} from "../../actions";
import CardIng from "../CardIng/CardIng";
import IngredientAddEdit from "../IngredientAddEdit/IngredientAddEdit";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import "../Globales.css";
import "../NameEdit/NameEdit.css";
import "../IngredientsEdit/IngredientsEdit.css";

export default function IngredientsEdit(props) {
  const idRecipe = props.match.params.id; //para pasarle el id de la receta a editar como propiedad al componente para agregar ingredientes nuevos
  const [ingState, setIngState] = useState({
    ingredients: [],
  }); //estado en el que se van a ir almacenando los ingredientes que confirme y los que agregue nuevo
  const [show, setShow] = useState(false);

  const history = useHistory();
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

  async function guardarCambios(e) {
    e.preventDefault();
    setShow(true);
    const response = await putRecipe(props.match.params.id, ingState);
    history.push(`/edit/${props.match.params.id}`);
  }

  return (
    <div className="pageItemEdit">
      <div className="containerIngredientsPageEdit">
        <Link className="returnPage" to={`/edit/${props.match.params.id}`}>
          <button className="returnButton">
            <GiReturnArrow />
          </button>
        </Link>
        <h1 className="titleItemEdit">Editar ingredientes</h1>
        <div className="titleStepEditPage">
          {ingState.ingredients.length === 0 ? (
            <div className="redTitle">No hay ingredientes confirmados.</div>
          ) : ingState.ingredients.length === 1 ? (
            `Un ingrediente confirmado: `
          ) : (
            `${ingState.ingredients?.length} ingredientes confirmados: `
          )}
        </div>
        <div className="allIngredientsIngredientEditPage">
          {ingState.ingredients.map((ing) => {
            return (
              <div>
                <div className="addedIngredient" key={ing.IngredientId}>
                  <span className="ingredientItem">{`✔ ${
                    obtenerId(ing.IngredientId)?.name
                  }: ${ing.quantity} ${obtenerIdUnidad(
                    ing.IngredientId
                  )} `}</span>

                  <button
                    className="redButtonStepEditPage"
                    onClick={(e) => handleDeleteIngredient(e, ing)}
                  >
                    <MdOutlineCancel />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="titleIngEditPage">
          Confirme y/o edite ingredientes ya existentes y agregue nuevos:
        </div>
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
          />
        </div>
        {show ? (
          <div className="lds-hourglassEditCreate"></div>
        ) : ingState.ingredients?.length ? (
          <div className="goBack">
            <button className="greenButton" onClick={(e) => guardarCambios(e)}>
              Guardar cambios
            </button>
          </div>
        ) : (
          <div className="goBack">
            <button disabled={true} className="disabledButtonStepEditPage">
              Guardar cambios
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
