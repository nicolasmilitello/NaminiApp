import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { putRecipe } from "../actions/index";
import { useState } from "react";
import "./ImgEdit.css";
import "./Estilos globales.css";

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
        <h1>Editar imagen</h1>

        <div>
          <label>Imagen nueva: </label>
          <input
            type="text"
            placeholder="Ingrese la URL de la nueva imagen"
            value={input.img}
            name="img"
            onChange={(e) => handleChange(e)}
          />
        </div>
        {input.img ? <button type="submit">Guardar cambio</button> : ""}
      </form>
      <Link to={`/edit/${props.match.params.id}`}>
        <button>Volver</button>
      </Link>
      <div>
        {show ? (
          code ? (
            <span className="success">Imagen actualizada exitosamente</span>
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
