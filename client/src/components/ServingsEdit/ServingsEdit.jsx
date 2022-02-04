import { Link, useHistory } from "react-router-dom";
import React from "react";
import { putRecipe } from "../../actions";
import { useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import "./ServingsEdit.css";
import "../NameEdit/NameEdit.css";

export default function IngredientsEdit(props) {
  const history = useHistory();
  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);
  // const [code, setCode] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  async function guardarCambio(e) {
    e.preventDefault();
    // setCode(false);
    setShow(true);
    const response = await putRecipe(props.match.params.id, input);
    // if (response.status === 200) {
    //   setCode(true);
    // }
    history.push(`/edit/${props.match.params.id}`);
  }

  return (
    <div className="pageItemEdit">
      <div className="containerServingsEdit">
        <Link className="returnPage" to={`/edit/${props.match.params.id}`}>
          <button className="returnButton">
            <GiReturnArrow />
          </button>
        </Link>
        <form onSubmit={(e) => guardarCambio(e)}>
          <h1 className="titleItemEdit">Editar porciones</h1>

          <div className="labelAndInput">
            <label>Porciones: </label>
            <input
              className="inputServingEditPage"
              type="number"
              placeholder="Ingrese las porciones"
              value={input.servings}
              min="1"
              max="99"
              name="servings"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {show ? (
            <div className="lds-hourglassEditCreate"></div>
          ) : input.servings ? (
            <div className="goBack">
              <button className="greenButton" type="submit">
                Guardar cambio
              </button>
            </div>
          ) : (
            <div className="goBack">
              <button disabled={true} className="disabledButtonStepEditPage">
                Guardar cambio
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
