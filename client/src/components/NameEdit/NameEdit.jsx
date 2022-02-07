import React from "react";
import { Link, useHistory } from "react-router-dom";
import { putRecipe } from "../../actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import { GiReturnArrow } from "react-icons/gi";
import "./NameEdit.css";
import "../Globales.css";

export default function NameEdit(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, []);

  const recipeDetails = useSelector((state) => state.detail);

  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);
  // const [code, setCode] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
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
      <div className="containerNameEdit">
        <Link className="returnPage" to={`/edit/${props.match.params.id}`}>
          <button className="returnButton">
            <GiReturnArrow />
          </button>
        </Link>
        <form onSubmit={(e) => guardarCambio(e)}>
          <h1 className="titleItemEdit">Editar nombre</h1>

          <div className="labelAndInput">
            <label>Nombre: </label>
            <input
              className="inputEditPage"
              type="text"
              value={input.name}
              defaultValue={recipeDetails?.[0].name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {show ? (
            <div className="lds-hourglassEditCreate"></div>
          ) : input.name ? (
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
        {/* <div>
          {show ? (
            code ? (
              <span className="success">Nombre actualizado exitosamente</span>
            ) : (
              <div className="lds-hourglass"></div>
            )
          ) : (
            ""
          )}
        </div> */}
      </div>
    </div>
  );
}
