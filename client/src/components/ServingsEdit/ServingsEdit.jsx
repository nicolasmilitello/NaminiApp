import { useHistory } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//? STYLES:
import {
  Container,
  Card,
  ReturnButtonContainer,
  ReturnButton,
  NameForm,
  InputContainer,
  LoadingAnimation,
  ButtonContainer,
  SaveButton,
  DisabledButton,
} from "./ServingsEditSC";
import "./ServingsEdit.css";
import "../NameEdit/NameEdit.css";

//? ACTIONS:
import { putRecipe, getDetail } from "../../actions";

//? ICONS:
import { GiReturnArrow } from "react-icons/gi";

export default function ServingsEdit(props) {
  const history = useHistory();
  const [input, setInput] = useState({
    servings: "",
  });
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeDetails = useSelector((state) => state.detail);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value,
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

        <h1>Editar porciones</h1>

        <NameForm onSubmit={(e) => guardarCambio(e)}>
          <InputContainer>
            <label>Porciones: </label>
            <input
              type="number"
              defaultValue={recipeDetails?.[0].servings}
              min="1"
              max="99"
              name="servings"
              onChange={(e) => handleChange(e)}
            />
          </InputContainer>
          <ButtonContainer>
            {show ? (
              <LoadingAnimation></LoadingAnimation>
            ) : input.servings ? (
              <SaveButton type="submit">Guardar cambio</SaveButton>
            ) : (
              <DisabledButton disabled={true}>Guardar cambio</DisabledButton>
            )}
          </ButtonContainer>
        </NameForm>
      </Card>
    </Container>
  );
}
