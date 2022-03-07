import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//? STYLES:
import {
  Container,
  Card,
  ReturnButtonContainer,
  ReturnButton,
  ConfirmedIngrContainer,
  NoConfirmedIngr,
  ItemsContainer,
  Item,
  RemoveIngrButton,
  ConfirmTitle,
  LoadingAnimation,
  ButtonContainer,
  SaveButton,
  DisabledButton,
} from "./IngredientsEditSC";

//? ICONS:
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

//? COMPONENTS:
import CardIng from "../CardIng/CardIng";
import IngredientAddEdit from "../IngredientAddEdit/IngredientAddEdit";

//? ACTIONS:
import {
  getIngredients,
  getIngredientsRecipe,
  getUnits,
  putRecipe,
} from "../../actions";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    await putRecipe(props.match.params.id, ingState);
    history.push(`/edit/${props.match.params.id}`);
  }

  return (
    <Container>
      <Card>
        <ReturnButtonContainer to={`/edit/${props.match.params.id}`}>
          <ReturnButton>
            <GiReturnArrow />
          </ReturnButton>
        </ReturnButtonContainer>

        <h1>Editar ingredientes</h1>

        <ConfirmedIngrContainer>
          {ingState.ingredients.length === 0 ? (
            <NoConfirmedIngr>No hay ingredientes confirmados.</NoConfirmedIngr>
          ) : ingState.ingredients.length === 1 ? (
            `Un ingrediente confirmado: `
          ) : (
            `${ingState.ingredients?.length} ingredientes confirmados: `
          )}
        </ConfirmedIngrContainer>

        <ItemsContainer>
          {ingState.ingredients.map((ing) => {
            return (
              <Item key={ing.IngredientId}>
                <span>{`✔ ${obtenerId(ing.IngredientId)?.name}: ${
                  ing.quantity
                } ${obtenerIdUnidad(ing.IngredientId)} `}</span>

                <RemoveIngrButton
                  onClick={(e) => handleDeleteIngredient(e, ing)}
                >
                  <MdOutlineCancel />
                </RemoveIngrButton>
              </Item>
            );
          })}
        </ItemsContainer>

        <ConfirmTitle>
          Confirme y/o edite ingredientes ya existentes y agregue nuevos:
        </ConfirmTitle>

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

        <IngredientAddEdit
          idRecipe={idRecipe}
          ingState={ingState}
          setIngState={setIngState}
          ingredientList={ingredientList} //el arreglo todos los ingredientes de la base de datos
          unitList={unitList}
        />

        <ButtonContainer>
          {show ? (
            <LoadingAnimation></LoadingAnimation>
          ) : ingState.ingredients?.length ? (
            <SaveButton onClick={(e) => guardarCambios(e)}>
              Guardar cambios
            </SaveButton>
          ) : (
            <DisabledButton disabled={true}>Guardar cambios</DisabledButton>
          )}
        </ButtonContainer>
      </Card>
    </Container>
  );
}
