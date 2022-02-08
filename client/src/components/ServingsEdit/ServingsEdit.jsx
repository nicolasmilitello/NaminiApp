import { Link, useHistory } from "react-router-dom";
import React from "react";
import { putRecipe } from "../../actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import { GiReturnArrow } from "react-icons/gi";
import "./ServingsEdit.css";
import "../NameEdit/NameEdit.css";

export default function ServingsEdit(props) {
  const history = useHistory();
  const [input, setInput] = useState({
    servings: "",
  });
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recipeDetails = useSelector((state) => state.detail);

  function handleChange(e) {
    e.preventDefault();
    setInput({
      [e.target.name]: e.target.value,
    });
  }

  async function guardarCambio(e) {
    e.preventDefault();
    setShow(true);
    await putRecipe(props.match.params.id, input);
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
              defaultValue={recipeDetails?.[0].servings}
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
