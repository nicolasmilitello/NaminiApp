import React from "react";
import { useState } from "react";
import "./CardStep.css";

export default function CardStep({
  st,
  index,
  setStepState,
  stepState,
  errors,
  setErrors,
  validate,
}) {
  const [step, setStep] = useState(st);
  const [show, setShow] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setStep(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStepState({
      steps: [...stepState.steps, step],
    });
    setShow(true);
  }

  return (
    <div>
      {show ? (
        ""
      ) : (
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>{`Paso ${index + 1}:`}</div>
            <textarea
              cols="100"
              rows="5"
              type="text"
              defaultValue={st}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <button type="submit">Confirmar paso</button>
          </form>
        </div>
      )}
    </div>
  );
}
