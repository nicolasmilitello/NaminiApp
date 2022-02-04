import React, { useState } from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import "../RecipeCreate/RecipeCreate.css";
import "../NameEdit/NameEdit.css";
import "../IngredientsEdit/IngredientsEdit.css";

export default function IngredientAddEdit({
  idRecipe,
  ingState,
  setIngState,
  ingredientList,
  unitList,
}) {
  const [input, setInput] = useState({
    quantity: "",
    IngredientId: "",
    RecipeId: Number(idRecipe),
  });

  function handleInputQuantity(e) {
    e.preventDefault();
    setInput({
      ...input,
      quantity: Number(e.target.value),
    });
  }

  const [unitName, setUnitName] = useState("");
  const [completed, setCompleted] = useState(false);

  function handleInputIngredient(e) {
    e.preventDefault();

    setCompleted(true);

    const unitId = ingredientList?.filter(
      (el) => el.id === Number(e.target.value)
    )[0].UnitId;

    const unit = unitList.filter((el) => el.id === unitId)[0].name;
    setUnitName(unit);

    setInput({
      ...input,
      IngredientId: Number(e.target.value),
    });
  }

  const [repeated, setRepeated] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setCompleted(false);
    if (
      ingState.ingredients.filter((i) => i.IngredientId === input.IngredientId)
        .length
    ) {
      setRepeated(true);
    } else {
      setRepeated(false);
      setIngState({
        ingredients: [...ingState.ingredients, input],
      });
    }
  }

  return (
    <div>
      <div>
        <form
          className="formAddIngredientEditPage"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="inputsAddIngredientEditPage">
            <select
              className="selectIngredientsEdit"
              onChange={(e) => handleInputIngredient(e)}
            >
              <option disabled selected>
                Seleccione un ingrediente
              </option>
              {ingredientList?.map((ing) => (
                <option value={ing.id} key={ing.id}>
                  {ing.name}
                </option>
              ))}
            </select>
            <div>
              <input
                className="inputQuantityEdit "
                type="number"
                min="0.1"
                step="0.1"
                placeholder="Cantidad"
                onChange={(e) => handleInputQuantity(e)}
              />
            </div>
            {completed && (
              <div className="unitAddIngredientEditPage">{`${unitName}`}</div>
            )}
            {input.quantity && input.IngredientId ? (
              <button className="greenButtonConfirmEditPage" type="submit">
                <MdOutlineCheckCircleOutline />
              </button>
            ) : (
              <button disabled={true} className="disabledButtonConfirmEditPage">
                <MdOutlineCheckCircleOutline />
              </button>
            )}
          </div>
          {repeated && (
            <div className="failure">
              El ingrediente seleccionado ya se encuentra añadido en la receta.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
