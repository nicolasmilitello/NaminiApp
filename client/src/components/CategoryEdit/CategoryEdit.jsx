import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, putRecipe } from "../../actions";
import { useEffect, useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import "./CategoryEdit.css";
import "../Globales.css";
import "../NameEdit/NameEdit.css";

export default function IngredientsEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);
  const categories = useSelector((state) => state.categories);
  // const [code, setCode] = useState(false);

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
    // setCode(false);
    setShow(true);
    const response = await putRecipe(props.match.params.id, input);
    // if (response.status === 200) {
    //   setCode(true);
    // }
    history.push(`/edit/${props.match.params.id}`);
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="pageItemEdit">
      <div className="containerCategoryEdit">
        <Link className="returnPage" to={`/edit/${props.match.params.id}`}>
          <button className="returnButton">
            <GiReturnArrow />
          </button>
        </Link>
        <form onSubmit={(e) => guardarCambio(e)}>
          <h1 className="titleItemEdit">Editar categoría</h1>

          <div className="labelAndInput">
            <label>Categoría: </label>
            <select
              className="inputCategoryEditPage"
              onChange={(e) => handleSelect(e)}
            >
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

          {show ? (
            <div className="lds-hourglassEditCreate"></div>
          ) : input.CategoryId ? (
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
        <div></div>
      </div>
    </div>
  );
}
