import { Link, useHistory } from "react-router-dom";
import React from "react";
import { putRecipe } from "../../actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions/index";
import { GiReturnArrow } from "react-icons/gi";
import "./ImgEdit.css";
import "../NameEdit/NameEdit.css";
import "../Globales.css";

export default function ImgEdit(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    img: "",
  });
  const [show, setShow] = useState(false);

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
      <div className="containerImgEdit">
        <Link className="returnPage" to={`/edit/${props.match.params.id}`}>
          <button className="returnButton">
            <GiReturnArrow />
          </button>
        </Link>
        <form onSubmit={(e) => guardarCambio(e)}>
          <h1 className="titleItemEdit">Editar imagen</h1>

          <div className="labelAndInput">
            <label>Imagen: </label>
            <input
              className="inputEditPage"
              type="text"
              defaultValue={recipeDetails?.[0].img}
              name="img"
              onChange={(e) => handleChange(e)}
            />
          </div>
          {show ? (
            <div className="lds-hourglassEditCreate"></div>
          ) : input.img ? (
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
