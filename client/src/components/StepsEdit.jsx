import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, putRecipe } from "../actions/index";
import { useEffect, useState } from "react";
import "./StepsEdit.css";
import CardStep from "./CardStep";
import CardAddStep from "./CardAddStep";
import "./Estilos globales.css";
// import IngredientAddEdit from "./IngredientAddEdit";

function validate(stepState) {
  let errors = {};
  if (!stepState.steps?.length) {
    errors.steps =
      "Es un requerimiento obligatorio ingresar los pasos de la receta";
  }
  return errors;
}

export default function StepsEdit(props) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [code, setCode] = useState(false);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail);

  const [stepState, setStepState] = useState({
    steps: [],
  });

  async function guardarCambios(e) {
    e.preventDefault();
    // console.log(input);
    setCode(false);
    setShow(true);
    const response = await putRecipe(props.match.params.id, stepState);
    if (response.status === 200) {
      setCode(true);
    }
  }

  function handleDeleteStep(e, s) {
    e.preventDefault();
    setStepState({
      steps: stepState.steps.filter((st) => st !== s),
    });
  }

  return (
    <div>
      <h1>Editar pasos</h1>
      <h3>Pasos:</h3>
      {/* {errors.steps && <p className="error">{errors.steps}</p>} */}
      {stepState.steps?.map((st, index) => (
        <div>
          <div key={index + 1}>{`${index + 1}. ${st}`}</div>
          <button onClick={(e) => handleDeleteStep(e, st)}>x</button>
        </div>
      ))}
      <h3>Confirme pasos ya existentes y agregue nuevos:</h3>
      {recipeDetails &&
        recipeDetails[0].steps.map((st, index) => (
          <div>
            <CardStep
              st={st}
              index={index}
              setStepState={setStepState}
              stepState={stepState}
              errors={errors}
              setErrors={setErrors}
              validate={validate}
            />
          </div>
        ))}

      <CardAddStep
        setStepState={setStepState}
        stepState={stepState}
        errors={errors}
        setErrors={setErrors}
        validate={validate}
      />

      {stepState.steps.length ? (
        <div>
          <button onClick={(e) => guardarCambios(e)}>Guardar cambios</button>
        </div>
      ) : (
        ""
      )}
      <Link to={`/edit/${props.match.params.id}`}>
        <button>Volver</button>
      </Link>
      <div>
        {show ? (
          code ? (
            <span className="success">Pasos actualizados exitosamente.</span>
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
