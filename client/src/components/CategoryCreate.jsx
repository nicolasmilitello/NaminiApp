import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, postCategory } from "../actions/index";
import "./CategoryCreate.css";
import "./Estilos globales.css";

function validate(cat) {
  let errors = {};
  if (!cat.name) {
    errors.name = "Es un requerimiento obligatorio el nombre de la categoría";
  }
  return errors;
}

export default function CategoryCreate() {
  const dispatch = useDispatch();
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
    // console.log(show);
  }

  function handleChange(e) {
    setCat({
      name: e.target.value,
    });
    setErrors(
      validate({
        name: e.target.value,
      })
    );
    // console.log(cat);
    // console.log(errors);
  }

  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(cat);
    setCode(false);
    setShow2(true);
    const response = await dispatch(postCategory(cat));
    setMessage(response?.data);
    // console.log(typeof response);
    if (response.status === 200) {
      setCode(true);
    }
    // alert("La categoría fue creada exitosamente");
    setCat("");
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []); //loop infinito si pongo "categories"

  return (
    <div className="categoryCreatorContent">
      <div className="categoryCreator">
        <h1 className="titleCategoryCreator">Crear categoría</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="inputCategoryName">
              <label>Nombre de la categoría: </label>
              <input
                type="text"
                size="40"
                placeholder="Nombre de la categoría a crear..."
                name="name"
                className="inputNameCategoryCreator"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="categoryCreatorButtons">
            <div>
              <button onClick={(e) => handleShow(e)}>
                {show
                  ? "Ocultar categorías existentes"
                  : "Ver categorías existentes"}
              </button>
            </div>
            <div className="create">
              {cat.name ? (
                <button type="submit">Crear categoría</button>
              ) : (
                errors.name && (
                  <p className="errorCategoryInput">{errors.name}</p>
                )
              )}
            </div>
          </div>
        </form>

        <div className="messagesContentCategoryCreator">
          {show2 ? (
            code ? (
              // <span className="success">Categoría creada exitosamente</span>
              // <span className="success">{message}</span>
              typeof message === "object" ? ( //si message es un objeto es porque se creó la categoría exitosamente ya que la ruta devuelve como un objeto la nueva categoría
                <span className="success">Categoría creada exitosamente</span>
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
// {
//   intermedio.length ? (
//     <div className="contenedorIngs">
//       {intermedio?.map((ing) => (
//         <div className="ings" key={ing.id}>
//           {`‣ ${ing.name}`}
//         </div>
//       ))}
//     </div>
//   ) : (
//     ""
//   );
// }
