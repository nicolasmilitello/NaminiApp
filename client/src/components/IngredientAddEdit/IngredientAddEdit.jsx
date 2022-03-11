import React, { useState } from "react";

//? STYLES:
import {
  FormContainer,
  InputsContainer,
  Unit,
  AddIngrButton,
  DisabledAddButton,
  IngrError,
} from "./IngredientAddEditSC";

//? ICONS:
import { MdOutlineCheckCircleOutline } from "react-icons/md";

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
    if (
      ingState.ingredients.filter((i) => i.IngredientId === input.IngredientId)
        .length
    ) {
      setRepeated(true);
    } else {
      setCompleted(false);
      setRepeated(false);
      setIngState({
        ingredients: [...ingState.ingredients, input],
      });
      setInput({
        ...input,
        quantity: "",
      });
    }
  }

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <InputsContainer>
        <select
          defaultValue={"DEFAULT"}
          onChange={(e) => handleInputIngredient(e)}
        >
          <option value="DEFAULT" disabled>
            Seleccione un ingrediente
          </option>
          {ingredientList?.map((ing) => (
            <option value={ing.id} key={ing.id}>
              {ing.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          min="0.1"
          step="0.1"
          value={input.quantity}
          placeholder="Cantidad"
          onChange={(e) => handleInputQuantity(e)}
        />

        <Unit>{completed && `${unitName}`}</Unit>

        {input.quantity && input.IngredientId ? (
          <AddIngrButton type="submit">
            <MdOutlineCheckCircleOutline />
          </AddIngrButton>
        ) : (
          <DisabledAddButton disabled={true}>
            <MdOutlineCheckCircleOutline />
          </DisabledAddButton>
        )}
      </InputsContainer>

      {repeated && <IngrError>Ya se encuentra añadido en la receta.</IngrError>}
    </FormContainer>
  );
}
