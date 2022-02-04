import React from "react";
import "../Globales.css";
import "./Paginado.css";

export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pageNumberBar">
      {pageNumbers &&
        pageNumbers.map((number) => (
          <div key={number}>
            <button className="pageButton" onClick={() => paginado(number)}>
              {number}
            </button>
          </div>
        ))}
    </div>
  );
}
