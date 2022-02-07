import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, putRecipe, getDetail } from "../../actions";
import { useEffect, useState } from "react";
import { GiReturnArrow } from "react-icons/gi";
import "./CategoryEdit.css";
import "../Globales.css";
import "../NameEdit/NameEdit.css";

export default function CategoryEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);

  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);

  const categories = useSelector((state) => state.categories);

  const recipeDetails = useSelector((state) => state.detail);

  function handleSelect(e) {
    e.preventDefault();
    setInput({
      ...input,
      CategoryId: e.target.value,
    });
  }

  async function guardarCambio(e) {
    e.preventDefault();
    setShow(true);
    const response = await putRecipe(props.match.params.id, input);
    history.push(`/edit/${props.match.params.id}`);
  }

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
              defaultValue={recipeDetails && recipeDetails[0]?.CategoryId}
              className="inputCategoryEditPage"
              onChange={(e) => handleSelect(e)}
            >
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
