import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//? STYLES:
import {
  Container,
  Card,
  ReturnButtonContainer,
  ReturnButton,
  CategoryForm,
  InputContainer,
  LoadingAnimation,
  ButtonContainer,
  SaveButton,
  DisabledButton,
} from "./CategoryEditSC";

//? ICONS:
import { GiReturnArrow } from "react-icons/gi";

//? ACTIONS:
import { getCategories, putRecipe, getDetail } from "../../actions";

export default function CategoryEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);

  const categories = useSelector((state) => state.categories);

  const recipeDetails = useSelector((state) => state.detail);

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      CategoryId: e.target.value,
    });
  }

  async function guardarCambio(e) {
    e.preventDefault();
    setShow(true);
    await putRecipe(props.match.params.id, input);
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

        <h1 className="titleItemEdit">Editar categoría</h1>

        <CategoryForm onSubmit={(e) => guardarCambio(e)}>
          <InputContainer>
            <label>Categoría: </label>
            <select
              defaultValue={recipeDetails && recipeDetails[0]?.CategoryId}
              onChange={(e) => handleSelect(e)}
            >
              {categories?.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </InputContainer>

          <ButtonContainer>
            {show ? (
              <LoadingAnimation></LoadingAnimation>
            ) : input.CategoryId ? (
              <SaveButton type="submit">Guardar cambio</SaveButton>
            ) : (
              <DisabledButton disabled={true}>Guardar cambio</DisabledButton>
            )}
          </ButtonContainer>
        </CategoryForm>
      </Card>
    </Container>
  );
}
