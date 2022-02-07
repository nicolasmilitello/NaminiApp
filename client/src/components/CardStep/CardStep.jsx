import React from "react";
import { useState } from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import "./CardStep.css";
import "../NameEdit/NameEdit.css";
import "../StepsEdit/StepsEdit.css";

export default function CardStep({ st, index, setStepState, stepState }) {
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
        <div className="confirmStepContent">
          <form
            className="formStepConfirmedEditPage"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="stepDescriptionAndButton">
              <div className="numberStepEditPage">{`${index + 1}. `}</div>
              <textarea
                className="inputStepEditPage"
                cols="100"
                rows="5"
                type="text"
                defaultValue={st}
                onChange={(e) => handleChange(e)}
              ></textarea>

              {step.length < 256 ? (
                <button className="greenButtonConfirmEditPage" type="submit">
                  <MdOutlineCheckCircleOutline />
                </button>
              ) : (
                <button
                  disabled={true}
                  className="disabledButtonConfirmEditPage"
                >
                  <MdOutlineCheckCircleOutline />
                </button>
              )}
            </div>
            {step.length > 255 ? (
              <div className="stepLengthError">
                Excede la longitud permitida para cada paso.
              </div>
            ) : (
              <br />
            )}
          </form>
        </div>
      )}
    </div>
  );
}
