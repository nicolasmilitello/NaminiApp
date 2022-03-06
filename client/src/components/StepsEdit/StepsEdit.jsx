import { useHistory } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

//? STYLES:
import {
  Container,
  Card,
  ReturnButtonContainer,
  ReturnButton,
  ConfirmedStepsContainer,
  ConfirmedTitle,
  NoConfirmedIngr,
  ItemsContainer,
  Item,
  RemoveStepButton,
  ConfirmTitle,
  LoadingAnimation,
  ButtonContainer,
  SaveButton,
  DisabledButton,
} from "./StepsEditSC";

//? ICONS:
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

//? COMPONENTS:
import CardStep from "../CardStep/CardStep";
import CardAddStep from "../CardAddStep/CardAddStep";

//? ACTIONS:
import { getDetail, putRecipe } from "../../actions";

export default function StepsEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail);

  const [stepState, setStepState] = useState({
    steps: [],
  });

  async function guardarCambios(e) {
    e.preventDefault();
    setShow(true);
    await putRecipe(props.match.params.id, stepState);
    history.push(`/edit/${props.match.params.id}`);
  }

  function handleDeleteStep(e, s) {
    e.preventDefault();
    setStepState({
      steps: stepState.steps.filter((st) => st !== s),
    });
  }

  return (
    <Container>
      <Card>
        <ReturnButtonContainer to={`/edit/${props.match.params.id}`}>
          <ReturnButton>
            <GiReturnArrow />
          </ReturnButton>
        </ReturnButtonContainer>

        <h1>Editar pasos</h1>

        <ConfirmedStepsContainer>
          <ConfirmedTitle>
            {stepState.steps.length === 0 ? (
              <NoConfirmedIngr>No hay pasos confirmados.</NoConfirmedIngr>
            ) : stepState.steps.length === 1 ? (
              `Un paso confirmado: `
            ) : (
              `${stepState.steps?.length} pasos confirmados: `
            )}
          </ConfirmedTitle>

          {stepState.steps?.map((st, index) => (
            <ItemsContainer key={index}>
              <Item>
                <span className="numberStep">{`${index + 1}. `}</span>
                <span>{`${st} `}</span>
              </Item>
              <RemoveStepButton onClick={(e) => handleDeleteStep(e, st)}>
                <MdOutlineCancel />
              </RemoveStepButton>
            </ItemsContainer>
          ))}
        </ConfirmedStepsContainer>

        <ConfirmTitle>
          Confirme y/o edite pasos ya existentes y agregue nuevos:
        </ConfirmTitle>

        {recipeDetails &&
          recipeDetails[0].steps.map((st, index) => (
            <CardStep
              key={index}
              st={st}
              index={index}
              setStepState={setStepState}
              stepState={stepState}
            />
          ))}

        <CardAddStep setStepState={setStepState} stepState={stepState} />

        <ButtonContainer>
          {show ? (
            <LoadingAnimation></LoadingAnimation>
          ) : stepState.steps?.length ? (
            <SaveButton onClick={(e) => guardarCambios(e)}>
              Guardar cambios
            </SaveButton>
          ) : (
            <DisabledButton disabled={true}>Guardar cambios</DisabledButton>
          )}
        </ButtonContainer>
      </Card>
    </Container>
  );
}
