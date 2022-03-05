import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//? STYLES:
import {
  Container,
  CreatorCard,
  IngredientForm,
  InputsContainer,
  NameInput,
  ErrorContainer,
  UnitInput,
  Buttons,
  IngredientsButton,
  SaveButton,
  DisabledButton,
  Failure,
  LoadingAnimation,
  IngredientsContainer,
} from "./IngredientCreateSC";

//? ACTIONS:
import { getIngredients, postIngredient, getUnits } from "../../actions";

function validate(ing) {
  let errors = {};
  if (!ing.name) {
    errors.name = "Es un requerimiento obligatorio el nombre del ingrediente.";
  } else if (!ing.UnitId) {
    errors.UnitId =
      "Es un requerimiento obligatorio asignarle una unidad al ingrediente.";
  }
  return errors;
}

export default function IngredientCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const ingredients = useSelector((state) => state.ingredients);
  const units = useSelector((state) => state.units);
  const [ing, setIng] = useState({
    name: "",
    UnitId: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [intermedio, setIntermedio] = useState([]);
  const [show2, setShow2] = useState(false);
  const [code, setCode] = useState(false);

  function handleInput(e) {
    e.preventDefault();
    setIng({
      ...ing,
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
    setErrors(
      validate({
        ...ing,
        [e.target.name]:
          e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
      })
    );
  }

  function handleSelect(e) {
    e.preventDefault();
    setIng({
      ...ing,
      UnitId: e.target.value,
    });
    setErrors(
      validate({
        ...ing,
        UnitId: e.target.value,
      })
    );
  }

  function handleShow(e) {
    e.preventDefault();
    show ? setShow(false) : setShow(true);
    show ? setIntermedio([]) : setIntermedio([...ingredients]);
  }

  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setCode(false);
    setShow2(true);
    const response = await dispatch(postIngredient(ing));
    setMessage(response?.data);
    setIng({
      name: "",
      UnitId: "",
    });

    if (response.status === 200) {
      setCode(true);
    }

    if (response?.data !== "Ya existe un ingrediente con ese nombre") {
      history.push("/home");
    }
  }

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUnits());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <CreatorCard>
        <h1>Crear ingrediente</h1>
        <IngredientForm onSubmit={(e) => handleSubmit(e)}>
          <InputsContainer>
            <NameInput>
              <label>Nombre: </label>

              <input
                type="text"
                size="40"
                name="name"
                placeholder=" Ingrese el nombre"
                onChange={(e) => handleInput(e)}
              />
            </NameInput>
            <ErrorContainer>
              {errors.name && <p>{errors.name}</p>}
            </ErrorContainer>

            <UnitInput>
              <label>Unidad de medida: </label>
              <select
                defaultValue={"DEFAULT"}
                onChange={(e) => handleSelect(e)}
              >
                <option value="DEFAULT" disabled>
                  Seleccione una unidad
                </option>
                {units?.map((unit) => (
                  <option value={unit.id} key={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </UnitInput>
            <ErrorContainer>
              {errors.UnitId && <p>{errors.UnitId}</p>}
            </ErrorContainer>
          </InputsContainer>

          <Buttons>
            <IngredientsButton onClick={(e) => handleShow(e)}>
              {show
                ? "Ocultar ingredientes existentes"
                : "Ver ingredientes existentes"}
            </IngredientsButton>

            {ing.name && ing.UnitId ? (
              <SaveButton type="submit">Crear ingrediente</SaveButton>
            ) : (
              <DisabledButton disabled={true}>Crear ingrediente</DisabledButton>
            )}
          </Buttons>
        </IngredientForm>

        {show2 ? (
          code ? (
            // <span className="success">Ingrediente creado exitosamente</span>
            typeof message === "object" ? ( //si message es un objeto es porque se creó la categoría exitosamente ya que la ruta devuelve como un objeto la nueva categoría
              <></>
            ) : (
              <Failure>{message}</Failure> //sino me envió una string que dice "Ya existe una categoría con ese nombre"
            )
          ) : (
            <LoadingAnimation></LoadingAnimation>
          )
        ) : null}
      </CreatorCard>

      {intermedio.length ? (
        <IngredientsContainer>
          {intermedio?.map((ing) => (
            <p className="ings" key={ing.id}>
              {`‣ ${ing.name}`}
            </p>
          ))}
        </IngredientsContainer>
      ) : null}
    </Container>
  );
}
