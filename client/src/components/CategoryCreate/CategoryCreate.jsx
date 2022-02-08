import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, postCategory } from "../../actions";
import "./CategoryCreate.css";
import "../Globales.css";

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
    history.push("/home");
  }

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="categoryCreatorContent">
      <div className="categoryCreator">
        <h1 className="titlePage">Crear categoría</h1>
        <form className="formCategoryCreator" onSubmit={(e) => handleSubmit(e)}>
          <div className="inputAndError">
            <div className="inputCategoryName">
              <label>Nombre de la categoría: </label>
              <input
                type="text"
                size="40"
                placeholder=" Ingrese el nombre"
                name="name"
                className="inputNameCategoryCreator"
                onChange={(e) => handleChange(e)}
              />
            </div>
            {errors.name && (
              <div className="errorInputVisible">{errors.name}</div>
            )}
          </div>

          <div className="categoryCreatorButtons">
            <div>
              <button className="grayButton" onClick={(e) => handleShow(e)}>
                {show
                  ? "Ocultar categorías existentes"
                  : "Ver categorías existentes"}
              </button>
            </div>
            {cat.name ? (
              <button className="greenButton" type="submit">
                Crear categoría
              </button>
            ) : (
              <button disabled={true} className="disabledButtonStepEditPage">
                Crear categoría
              </button>
            )}
          </div>
        </form>

        <div className="messagesContentCategoryCreator">
          {show2 ? (
            code ? (
              // <span className="success">Categoría creada exitosamente</span>
              // <span className="success">{message}</span>
              //si message es un objeto es porque se creó la categoría exitosamente ya que la ruta devuelve como un objeto la nueva categoría:
              typeof message === "object" ? (
                <span className="success">Categoría creada exitosamente</span>
              ) : (
                <span className="failure">{message}</span> //sino me envió una string que dice "Ya existe una categoría con ese nombre"
              )
            ) : (
              <div className="lds-hourglass"></div>
            )
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        {intermedio.length ? (
          <div className="contenedorCategories">
            {intermedio?.map((c) => (
              <div className="categories" key={c.id}>
                {c.name}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
