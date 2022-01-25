import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { putRecipe } from "../actions/index";
import { useState } from "react";
import "./ServingsEdit.css";

export default function IngredientsEdit(props) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);
  const [code, setCode] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value,
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

  return (
    <div>
      <form onSubmit={(e) => guardarCambio(e)}>
        <h1>Editar porciones</h1>

        <div>
          <label>Porciones nuevas: </label>
          <input
            type="number"
            placeholder="Ingrese las porciones"
            value={input.servings}
            min="1"
            max="99"
            name="servings"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {input.servings ? <button type="submit">Guardar cambio</button> : ""}
      </form>
      <div>
        {show ? (
          code ? (
            <span className="success">Porciones actualizadas exitosamente</span>
          ) : (
            <span className="failure">
              No se pudieron actualizar las porciones
            </span>
          )
        ) : (
          ""
        )}
      </div>
      <Link to={`/edit/${props.match.params.id}`}>
        <button>Volver</button>
      </Link>
    </div>
  );
}
