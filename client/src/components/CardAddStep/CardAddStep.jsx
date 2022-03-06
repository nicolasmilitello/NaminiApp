import React, { useState } from "react";

//? STYLES:
import {
  Container,
  AddStepForm,
  TexteareaAndButton,
  Textarea,
  AddStepButton,
  DisabledAddButton,
  ErrorStepLength,
} from "./CardAddStepSC";

//? ICONS:
import { MdOutlineCheckCircleOutline } from "react-icons/md";

export default function CardAddStep({ setStepState, stepState }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setInput(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStepState({
      steps: [...stepState.steps, input],
    });
    setInput("");
  }

  return (
    <Container>
      <AddStepForm onSubmit={(e) => handleSubmit(e)}>
        <TexteareaAndButton>
          <Textarea
            value={input}
            maxLength="255"
            type="text"
            cols="100"
            rows="5"
            placeholder="Ingrese paso..."
            onChange={(e) => handleChange(e)}
          />
          {input.length ? (
            <AddStepButton type="submit">
              <MdOutlineCheckCircleOutline />
            </AddStepButton>
          ) : (
            <DisabledAddButton disabled={true}>
              <MdOutlineCheckCircleOutline />
            </DisabledAddButton>
          )}
        </TexteareaAndButton>
        <ErrorStepLength>
          {input.length === 255
            ? `Excede la longitud permitida para cada paso`
            : null}
        </ErrorStepLength>
      </AddStepForm>
    </Container>
  );
}
