import React, { useState } from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import "../NameEdit/NameEdit.css";
import "../StepsEdit/StepsEdit.css";

export default function CardAddStep({ setStepState, stepState }) {
  const [input, setInput] = useState("");

  const [completed, setCompleted] = useState(false);

  function handleChange(e) {
    e.preventDefault();

    setCompleted(true);

    setInput(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCompleted(false);
    setStepState({
      steps: [...stepState.steps, input],
    });
    setInput("");
  }

  return (
    <div className="addStepEditPage">
      <div>
        <form className="formAddStepEditPage" onSubmit={(e) => handleSubmit(e)}>
          <div className="textareaAndButton">
            <textarea
              value={input}
              maxLength="255"
              className="inputAddStepEditPage"
              type="text"
              cols="100"
              rows="5"
              placeholder="Ingrese paso..."
              onChange={(e) => handleChange(e)}
            />
            {input.length ? (
              <button className="greenButtonConfirmEditPage" type="submit">
                <MdOutlineCheckCircleOutline />
              </button>
            ) : (
              <button disabled={true} className="disabledButtonConfirmEditPage">
                <MdOutlineCheckCircleOutline />
              </button>
            )}
          </div>
          {input.length === 255 ? (
            <div className="stepLengthError">
              Excede la longitud permitida para cada paso.
            </div>
          ) : (
            <br />
          )}
        </form>
      </div>
    </div>
  );
}
