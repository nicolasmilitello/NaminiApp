import React from "react";
import { useState } from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import "../RecipeCreate/RecipeCreate.css";
import "../NameEdit/NameEdit.css";
import "../StepsEdit/StepsEdit.css";
import "../IngredientsEdit/IngredientsEdit.css";

export default function Card({
  quantity,
  IngredientId,
  RecipeId,
  ingState,
  setIngState,
  ingredientList,
  unitList,
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
      setShow(true);
    }
  }

  return (
    <div className="cardIngContent">
      {show ? (
        ""
      ) : (
        <div className="confirmStepContent">
          <form
            className="formIngConfirmedEditPage"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="ingredientItemsEditPage">
              <div className="titlesEditAndLabels">
                {`${
                  obtenerId(IngredientId) && obtenerId(IngredientId)[0].name
                }: `}
              </div>
              <input
                className="inputQuantityIngredientsEditPage"
                type="number"
                min="0.1"
                step="0.1"
                defaultValue={quantity}
                onChange={(e) => handleChange(e)}
              ></input>
              <div className="unitEditPage">
                {" "}
                {`${obtenerIdUnidad(IngredientId)}`}{" "}
              </div>
            </div>
            <button className="greenButtonConfirmEditPage" type="submit">
              <MdOutlineCheckCircleOutline />
            </button>
          </form>
          {repeated ? (
            <div className="failure">
              El ingrediente seleccionado ya se encuentra añadido en la receta.
            </div>
          ) : (
            <br />
          )}
        </div>
      )}
    </div>
  );
}
