import React from "react";
import "./IngredientPopUp.css";
// import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";

export default function IngredientPopUp(show, intermedio) {
  return (
    <div className="i">
      {intermedio.length &&
        intermedio?.map((ing) => (
          <div className="ings" key={ing.id}>
            {`‣${ing.name}`}
          </div>
        ))}
    </div>
  );
}
