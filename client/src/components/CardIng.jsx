import React from "react";
import { Link } from "react-router-dom";
import { getCategories, deleteRecipe } from "../actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Card({
  quantity,
  IngredientId,
  RecipeId,
  ingState,
  setIngState,
  ingredientList,
  unitList,
  validate,
  errors,
  setErrors,
}) {
  const [ing, setIng] = useState({
    quantity: quantity,
    IngredientId: IngredientId,
    RecipeId: RecipeId,
  });
  const [show, setShow] = useState(false);

  function obtenerIdUnidad(ingId) {
    const unitId = ingredientList?.filter((el) => el.id === ingId)[0].UnitId;
    const unit = unitList?.filter((el) => el.id === unitId)[0]?.name;
    return unit;
  }

  function obtenerId(ingId) {
    // console.log(typeof ingId);
    const select = ingredientList?.filter((el) => el.id === ingId);
    return select;
  }

  function handleChange(e) {
    e.preventDefault();
    setIng({
      quantity: Number(e.target.value),
      IngredientId: IngredientId,
      RecipeId: RecipeId,
    });
  }

  const [repeated, setRepeated] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      ingState.ingredients.filter((i) => i.IngredientId === ing.IngredientId)
        .length
    ) {
      setRepeated(true);
    } else {
      setIngState({
        ingredients: [...ingState.ingredients, ing],
      });
      // setErrors(
      //   validate({
      //     ingredients: [...ingState.ingredients, ing],
      //   })
      // );
      setShow(true);
    }
  }

  return (
    <div>
      {show ? (
        ""
      ) : (
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="number"
              min="0.01"
              step="0.01"
              defaultValue={quantity}
              onChange={(e) => handleChange(e)}
            ></input>
            <div>{obtenerIdUnidad(IngredientId)}</div>
            <div>
              {obtenerId(IngredientId) && obtenerId(IngredientId)[0].name}
            </div>
            <button type="submit">Confirmar ingrediente</button>
            {repeated && (
              <div className="failure">
                El ingrediente seleccionado ya se encuentra añadido en la
                receta.
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
