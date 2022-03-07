import React from "react";
import { useState } from "react";

//? STYLES
import {
  Container,
  EditStepFormContainer,
  TexteareaAndButtonContainer,
  StepNumber,
  Textarea,
  ConfirmStep,
  DisabledButton,
  ErrorStepLength,
} from "./CardStepSC";

//? ICONS
import { MdOutlineCheckCircleOutline } from "react-icons/md";

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
    <Container>
      {show ? null : (
        <EditStepFormContainer onSubmit={(e) => handleSubmit(e)}>
          <TexteareaAndButtonContainer>
            <StepNumber>{`${index + 1}. `}</StepNumber>

            <Textarea
              cols="100"
              rows="5"
              type="text"
              defaultValue={st}
              onChange={(e) => handleChange(e)}
            ></Textarea>

            {step.length < 256 && step.length > 0 ? (
              <ConfirmStep type="submit">
                <MdOutlineCheckCircleOutline />
              </ConfirmStep>
            ) : (
              <DisabledButton disabled={true}>
                <MdOutlineCheckCircleOutline />
              </DisabledButton>
            )}
          </TexteareaAndButtonContainer>
          <ErrorStepLength>
            {step.length > 255
              ? `Excede la longitud permitida para cada paso.`
              : null}
          </ErrorStepLength>
        </EditStepFormContainer>
      )}
    </Container>
  );
}
