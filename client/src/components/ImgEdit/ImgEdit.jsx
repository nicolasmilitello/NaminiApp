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
  ImgForm,
  InputContainer,
  LoadingAnimation,
  ButtonContainer,
  SaveButton,
  DisabledButton,
} from "./ImgEditSC";

//? ICONS:
import { GiReturnArrow } from "react-icons/gi";

//? ACTIONS:
import { putRecipe, getDetail } from "../../actions";

export default function ImgEdit(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    img: "",
  });
  const [show, setShow] = useState(false);

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

        <h1>Editar imagen</h1>

        <ImgForm onSubmit={(e) => guardarCambio(e)}>
          <InputContainer>
            <label>Imagen: </label>
            <input
              type="text"
              defaultValue={recipeDetails?.[0].img}
              name="img"
              onChange={(e) => handleChange(e)}
            />
          </InputContainer>
          <ButtonContainer>
            {show ? (
              <LoadingAnimation></LoadingAnimation>
            ) : input.img ? (
              <SaveButton type="submit">Guardar cambio</SaveButton>
            ) : (
              <DisabledButton disabled={true}>Guardar cambio</DisabledButton>
            )}
          </ButtonContainer>
        </ImgForm>
      </Card>
    </Container>
  );
}
