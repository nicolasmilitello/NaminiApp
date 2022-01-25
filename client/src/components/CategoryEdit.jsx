import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, putRecipe } from "../actions/index";
import { useEffect, useState } from "react";
import "./CategoryEdit.css";
import "./Estilos globales.css";

export default function IngredientsEdit(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);
  const categories = useSelector((state) => state.categories);
  const [code, setCode] = useState(false);

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      CategoryId: e.target.value,
    });
    console.log(input);
  }

  async function guardarCambio(e) {
    e.preventDefault();
    setCode(false);
    setShow(true);
    const response = await putRecipe(props.match.params.id, input);
    if (response.status === 200) {
      setCode(true);
    }
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <form onSubmit={(e) => guardarCambio(e)}>
        <h1>Editar categoría</h1>

        <div>
          <label>Categoría nueva: </label>
          <select onChange={(e) => handleSelect(e)}>
            <option disabled selected>
              Seleccione la nueva categoría
            </option>
            {categories?.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        {input.CategoryId ? <button type="submit">Guardar cambio</button> : ""}
      </form>
      <Link to={`/edit/${props.match.params.id}`}>
        <button>Volver</button>
      </Link>
      <div>
        {show ? (
          code ? (
            <span className="success">Categoría actualizada exitosamente</span>
          ) : (
            <div className="lds-hourglass"></div>
            // <span className="loading">Cargando...</span>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
