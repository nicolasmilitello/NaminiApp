import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//? STYLES:
import {
  Container,
  CreatorCard,
  CategoryForm,
  ErrorContainer,
  InputContainer,
  Buttons,
  CategoriesButton,
  SaveButton,
  DisabledButton,
  Failure,
  LoadingAnimation,
  CategoriesContainer,
} from "./CategoryCreateSC";

//? ACTIONS:
import { getCategories, postCategory } from "../../actions";

function validate(cat) {
  let errors = {};
  if (!cat.name) {
    errors.name = "Es un requerimiento obligatorio el nombre de la categoría";
  }
  return errors;
}

export default function CategoryCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories);
  const [cat, setCat] = useState({
    name: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [intermedio, setIntermedio] = useState([]);
  const [show2, setShow2] = useState(false);
  const [code, setCode] = useState(false);

  function handleShow(e) {
    e.preventDefault();
    show ? setShow(false) : setShow(true);
    show ? setIntermedio([]) : setIntermedio([...categories]);
  }

  function handleChange(e) {
    setCat({
      name: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
    setErrors(
      validate({
        name: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
      })
    );
  }

  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setCode(false);
    setShow2(true);
    const response = await dispatch(postCategory(cat));
    setMessage(response?.data);
    if (response.status === 200) {
      setCode(true);
    }
    setCat("");
    if (response?.data !== "Ya existe una categoría con ese nombre") {
      history.push("/home");
    }
  }

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <CreatorCard>
        <h1>Crear categoría</h1>
        <CategoryForm onSubmit={(e) => handleSubmit(e)}>
          <InputContainer>
            <label>Nombre de la categoría: </label>
            <input
              type="text"
              size="40"
              placeholder=" Ingrese el nombre"
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </InputContainer>
          <ErrorContainer>{errors.name && <p>{errors.name}</p>}</ErrorContainer>

          <Buttons>
            <CategoriesButton onClick={(e) => handleShow(e)}>
              {show
                ? "Ocultar categorías existentes"
                : "Ver categorías existentes"}
            </CategoriesButton>
            {cat.name ? (
              <SaveButton type="submit">Crear categoría</SaveButton>
            ) : (
              <DisabledButton disabled={true}>Crear categoría</DisabledButton>
            )}
          </Buttons>
        </CategoryForm>

        {show2 ? (
          code ? (
            //si message es un objeto es porque se creó la categoría exitosamente ya que la ruta devuelve como un objeto la nueva categoría:
            typeof message === "object" ? (
              <></>
            ) : (
              <Failure>{message}</Failure> //sino me envió una string que dice "Ya existe una categoría con ese nombre"
            )
          ) : (
            <LoadingAnimation></LoadingAnimation>
          )
        ) : (
          <></>
        )}
      </CreatorCard>

      {intermedio.length ? (
        <CategoriesContainer>
          {intermedio?.map((c) => (
            <p key={c.id}>{c.name}</p>
          ))}
        </CategoriesContainer>
      ) : (
        ""
      )}
    </Container>
  );
}
