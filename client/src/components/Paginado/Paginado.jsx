import React from "react";
import { useState } from "react";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import "../Globales.css";
import "./Paginado.css";

export default function Paginado({
  recipesPerPage,
  allRecipes,
  handleClickPage,
  setCurrentPage,
  currentPage,
}) {
  const pageNumbers = [];

  const [pageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          key={number}
          id={number}
          onClick={handleClickPage}
          className={
            currentPage === number ? "pageSelected" : "pageButtonSelected"
          }
        >
          {number}
        </button>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="pageNumberBar">
      <button
        onClick={handleClickPrev}
        className={
          currentPage === pageNumbers[0]
            ? "backNextDisabledButton"
            : "backNextButton"
        }
        disabled={currentPage === pageNumbers[0] ? true : false}
      >
        <BiFirstPage />
      </button>

      {renderPageNumbers}

      <button
        onClick={handleClickNext}
        className={
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? "backNextDisabledButton"
            : "backNextButton"
        }
        disabled={
          currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
        }
      >
        <BiLastPage />
      </button>
    </div>
  );
}
