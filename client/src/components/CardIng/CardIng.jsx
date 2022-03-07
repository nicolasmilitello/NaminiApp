import React from "react";
import { useState } from "react";

//? STYLES:
import {
  Container,
  FormContainer,
  IngredientConfirmForm,
  IngredientItem,
  IngredientName,
  IngredientInput,
  Unit,
  ConfirmIng,
  DisabledButton,
  ErrorContainer,
} from "./CardIngSC.js";

//? ICONS:
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export default function CardIng({
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
    <Container>
      {show ? null : (
        <FormContainer>
          <IngredientConfirmForm onSubmit={(e) => handleSubmit(e)}>
            <IngredientItem>
              <IngredientName>
                {`${
                  obtenerId(IngredientId) && obtenerId(IngredientId)[0].name
                }: `}
              </IngredientName>

              <IngredientInput
                type="number"
                min="0.1"
                step="0.1"
                defaultValue={quantity}
                onChange={(e) => handleChange(e)}
              ></IngredientInput>

              <Unit> {`${obtenerIdUnidad(IngredientId)}`} </Unit>
            </IngredientItem>

            {Number(ing.quantity) ? (
              <ConfirmIng type="submit">
                <MdOutlineCheckCircleOutline />
              </ConfirmIng>
            ) : (
              <DisabledButton disabled={true}>
                <MdOutlineCheckCircleOutline />
              </DisabledButton>
            )}
          </IngredientConfirmForm>
          <ErrorContainer>
            {repeated ? `Ya se encuentra añadido en la receta.` : null}
          </ErrorContainer>
        </FormContainer>
      )}
    </Container>
  );
}
