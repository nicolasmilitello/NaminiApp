import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import { GiReturnArrow } from "react-icons/gi";

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
} from "./NameEditSC";

//? ACTIONS:
import { putRecipe } from "../../actions";

export default function NameEdit(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeDetails = useSelector((state) => state.detail);

  const [input, setInput] = useState({
    name: "",
  });
  const [show, setShow] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
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
          <ReturnButton className="returnButton">
            <GiReturnArrow />
          </ReturnButton>
        </ReturnButtonContainer>

        <h1>Editar nombre</h1>

        <NameForm onSubmit={(e) => guardarCambio(e)}>
          <InputContainer>
            <label>Nombre: </label>
            <input
              type="text"
              defaultValue={recipeDetails?.[0].name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </InputContainer>
          <ButtonContainer>
            {show ? (
              <LoadingAnimation></LoadingAnimation>
            ) : input.name ? (
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
