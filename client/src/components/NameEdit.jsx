import { Link } from "react-router-dom";
import React from "react";
// import { useDispatch } from "react-redux";
import { putRecipe } from "../actions/index";
import { useState } from "react";
import "./NameEdit.css";
import "./Estilos globales.css";

export default function IngredientsEdit(props) {
  // const dispatch = useDispatch();
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
  // console.log(code);

  return (
    <div>
      <form onSubmit={(e) => guardarCambio(e)}>
        <h1>Editar nombre</h1>

        <div>
          <label>Nombre nuevo: </label>
          <input
            type="text"
            placeholder="Ingrese el nuevo nombre"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {input.name ? <button type="submit">Guardar cambio</button> : ""}
      </form>
      <div>
        {show ? (
          code ? (
            <span className="success">Nombre actualizado exitosamente</span>
          ) : (
            <div className="lds-hourglass"></div>
            // <span className="loading">Cargando...</span>
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
