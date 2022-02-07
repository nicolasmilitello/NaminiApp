import { Link, useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, putRecipe } from "../../actions";
import { useEffect, useState } from "react";
import CardStep from "../CardStep/CardStep";
import CardAddStep from "../CardAddStep/CardAddStep";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import "../Globales.css";
import "../NameEdit/NameEdit.css";
import "./StepsEdit.css";

export default function StepsEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  // const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  // const [code, setCode] = useState(false);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail);

  const [stepState, setStepState] = useState({
    steps: [],
  });

  async function guardarCambios(e) {
    e.preventDefault();
    // setCode(false);
    setShow(true);
    const response = await putRecipe(props.match.params.id, stepState);
    // if (response.status === 200) {
    //   setCode(true);
    // }
    history.push(`/edit/${props.match.params.id}`);
  }

  function handleDeleteStep(e, s) {
    e.preventDefault();
    setStepState({
      steps: stepState.steps.filter((st) => st !== s),
    });
  }

  return (
    <div className="pageItemEdit">
      <div className="containerStepsPageEdit">
        <Link className="returnPage" to={`/edit/${props.match.params.id}`}>
          <button className="returnButton">
            <GiReturnArrow />
          </button>
        </Link>
        <h1 className="titlePage">Editar pasos</h1>
        <div className="checkedStep">
          <div className="titleStepEditPage">
            {stepState.steps.length === 0 ? (
              <div className="redTitle">No hay pasos confirmados.</div>
            ) : stepState.steps.length === 1 ? (
              `Un paso confirmado: `
            ) : (
              `${stepState.steps?.length} pasos confirmados: `
            )}
          </div>
          {stepState.steps?.map((st, index) => (
            <div className="confirmedStepContent" key={index}>
              <div className="ingrItem">
                <span className="numberStep">{`${index + 1}. `}</span>
                <span>{`${st} `}</span>
              </div>
              <button
                className="redButtonStepEditPage"
                onClick={(e) => handleDeleteStep(e, st)}
              >
                <MdOutlineCancel />
              </button>
            </div>
          ))}
        </div>
        <div className="titleStepEditPage">
          Confirme y/o edite pasos ya existentes y agregue nuevos:
        </div>
        {recipeDetails &&
          recipeDetails[0].steps.map((st, index) => (
            <div key={index}>
              <CardStep
                st={st}
                index={index}
                setStepState={setStepState}
                stepState={stepState}
              />
            </div>
          ))}

        <CardAddStep setStepState={setStepState} stepState={stepState} />

        {show ? (
          <div className="lds-hourglassEditCreate"></div>
        ) : stepState.steps?.length ? (
          <div className="goBack">
            <button className="greenButton" onClick={(e) => guardarCambios(e)}>
              Guardar cambios
            </button>
          </div>
        ) : (
          <div className="goBack">
            <button disabled={true} className="disabledButtonStepEditPage">
              Guardar cambios
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
