import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredients, postIngredient, getUnits } from "../../actions";
import "./IngredientCreate.css";
import "../Globales.css";

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
    // console.log(ing);
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
    // console.log(ing);
  }

  function handleShow(e) {
    e.preventDefault();
    show ? setShow(false) : setShow(true);
    show ? setIntermedio([]) : setIntermedio([...ingredients]);
    // console.log(show);
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
    // console.log(response);
    if (response.status === 200) {
      setCode(true);
    }
    // alert("Ingrediente creado exitosamente");
  }

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUnits());
  }, []);

  return (
    <div className="ingredientCreatorContent">
      <div className="ingredientCreator">
        <h1 className="titlePage">Crear ingrediente</h1>
        <form
          className="formIngredientCreator"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="ingredientInputs">
            <div className="ingredientName">
              <label>Nombre: </label>
              <input
                className="inputNameIngredient"
                type="text"
                size="40"
                name="name"
                placeholder="Ingrese el nombre"
                onChange={(e) => handleInput(e)}
              />
            </div>

            <div className="ingredientUnit">
              <label>Unidad de medida: </label>
              <select
                className="inputUnitIngredient"
                onChange={(e) => handleSelect(e)}
              >
                <option disabled selected>
                  Seleccione una unidad
                </option>
                {units?.map((unit) => (
                  <option value={unit.id} key={unit.id}>
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>

            <div>{errors.name && <p className="error">{errors.name}</p>}</div>
            <div>
              {errors.UnitId && <p className="error">{errors.UnitId}</p>}
            </div>
          </div>

          <div>
            <div>
              <button className="grayButton" onClick={(e) => handleShow(e)}>
                {show
                  ? "Ocultar ingredientes existentes"
                  : "Ver ingredientes existentes"}
              </button>
            </div>
            <div>
              {ing.name && ing.UnitId && (
                <button className="greenButton" type="submit">
                  Crear ingrediente
                </button>
              )}
            </div>
          </div>
        </form>
        <div className="messagesContentIngredientCreator">
          {show2 ? (
            code ? (
              // <span className="success">Ingrediente creado exitosamente</span>
              typeof message === "object" ? ( //si message es un objeto es porque se creó la categoría exitosamente ya que la ruta devuelve como un objeto la nueva categoría
                <span className="successIngredientCreate">
                  Ingrediente creado exitosamente
                </span>
              ) : (
                <span className="failure">{message}</span> //sino me envió una string que dice "Ya existe una categoría con ese nombre"
              )
            ) : (
              <div className="lds-hourglass"></div>
              // <span className="loading">Cargando...</span>
            )
          ) : (
            ""
          )}
        </div>
      </div>

      {intermedio.length ? (
        <div className="contenedorIngs">
          {intermedio?.map((ing) => (
            <div className="ings" key={ing.id}>
              {`‣ ${ing.name}`}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
