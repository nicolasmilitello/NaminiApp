import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//importo los hooks de react-redux (previamente lo instalo -npm i react-redux-):
import { useDispatch, useSelector } from "react-redux";

//? STYLES:
import {
  Container,
  FiltersTitleAndSearchBarContainer,
  FiltersContainer,
  CategoryFilter,
  AToZFilter,
  SearchBarContainer,
  Grid,
  NoResultsContainer,
  AnimationContainer,
  LoadingAnimation,
} from "./HomeSC";

//? ICONS:
import { MdSearchOff } from "react-icons/md";

//? COMPONENTS:
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";

//? ACTIONS:
import {
  getRecipes,
  filterRecipesByCategory,
  orderByName,
  getCategories,
} from "../../actions";

export default function Home() {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  // eslint-disable-next-line no-unused-vars
  const [orden, setOrden] = useState("");
  const categories = useSelector((state) => state.categories);

  //PAGINADO:------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes?.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const handleClickPage = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  //-------------------------------------------------------------------

  useEffect(() => {
    if (!allRecipes?.length) {
      dispatch(getRecipes());
    }
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  function handleFilterCategory(e) {
    dispatch(filterRecipesByCategory(e.target.value));
  }

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <Container>
      <FiltersTitleAndSearchBarContainer>
        <FiltersContainer>
          <CategoryFilter onChange={(e) => handleFilterCategory(e)}>
            <option value="all">Todos</option>
            {categories?.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </CategoryFilter>

          <AToZFilter onChange={(e) => handleOrderName(e)}>
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </AToZFilter>
        </FiltersContainer>

        <h1>Recetas</h1>

        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>
      </FiltersTitleAndSearchBarContainer>

      <div>
        {typeof allRecipes === "object" && currentRecipes ? (
          <Grid>
            {currentRecipes?.map((el) => {
              return (
                <Link to={`/home/${el.id}`} key={el.id}>
                  <Card
                    img={el.img}
                    name={el.name}
                    servings={el.servings}
                    category={el.CategoryId}
                    key={el.id}
                    id={el.id}
                  />
                </Link>
              );
            })}
          </Grid>
        ) : typeof allRecipes === "string" ? (
          <NoResultsContainer>
            <AnimationContainer>
              <MdSearchOff />
            </AnimationContainer>
            <span>No se encontraron coincidencias.</span>
          </NoResultsContainer>
        ) : (
          <LoadingAnimation></LoadingAnimation>
        )}
      </div>
      {typeof allRecipes !== "string" ? (
        <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes?.length}
          handleClickPage={handleClickPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      ) : null}
    </Container>
  );
}
