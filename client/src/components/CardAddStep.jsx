import React, { useState } from "react";

export default function CardAddStep({
  setStepState,
  stepState,
  errors,
  setErrors,
  validate,
}) {
  const [input, setInput] = useState("");

  const [completed, setCompleted] = useState(false);

  function handleChange(e) {
    e.preventDefault();

    setCompleted(true);

    setInput(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
    setErrors(validate(e.target.value));
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
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <textarea
              type="text"
              cols="100"
              rows="5"
              placeholder="Ingrese paso..."
              onChange={(e) => handleChange(e)}
            />
            {input.length ? (
              <button type="submit">Confirmar nuevo paso</button>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
