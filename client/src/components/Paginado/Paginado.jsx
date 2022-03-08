import React from "react";
import { useState } from "react";

//? STYLES:
import {
  Container,
  NextPreviousButtonDisabled,
  NextPreviousButton,
  PageButton,
  SelectedPageButton,
} from "./PaginadoSC";

//? ICONS:
import { BiFirstPage, BiLastPage } from "react-icons/bi";

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
        <div key={number}>
          {currentPage === number ? (
            <SelectedPageButton id={number} onClick={handleClickPage}>
              {number}
            </SelectedPageButton>
          ) : (
            <PageButton id={number} onClick={handleClickPage}>
              {number}
            </PageButton>
          )}
        </div>
      );
    } else {
      return null;
    }
  });

  return (
    <Container>
      {currentPage === pageNumbers[0] ? (
        <NextPreviousButtonDisabled disabled={true}>
          <BiFirstPage />
        </NextPreviousButtonDisabled>
      ) : (
        <NextPreviousButton onClick={handleClickPrev}>
          <BiFirstPage />
        </NextPreviousButton>
      )}

      {renderPageNumbers}

      {currentPage === pageNumbers[pageNumbers.length - 1] ? (
        <NextPreviousButtonDisabled disabled={true}>
          <BiLastPage />
        </NextPreviousButtonDisabled>
      ) : (
        <NextPreviousButton onClick={handleClickNext}>
          <BiLastPage />
        </NextPreviousButton>
      )}
    </Container>
  );
}
