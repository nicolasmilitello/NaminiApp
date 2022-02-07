import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//importo los hooks de react-redux (previamente lo instalo -npm i react-redux-):
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  filterRecipesByCategory,
  orderByName,
  getCategories,
} from "../../actions";
import { MdSearchOff } from "react-icons/md";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar";
import "./Home.css";
import "../Globales.css";

export default function Home() {
  const dispatch = useDispatch(); //mapDispatchToProps
  const allRecipes = useSelector((state) => state.recipes); //mapStateToProps
  const [orden, setOrden] = useState("");
  const categories = useSelector((state) => state.categories);

  //PAGINADO:------------------------------------------------------
  const [currentPage, setCurrentPage] = useState(1);
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
    dispatch(getRecipes());
    dispatch(getCategories());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getRecipes());
  }

  function handleFilterCategory(e) {
    dispatch(filterRecipesByCategory(e.target.value));
  }

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(`Ordenado ${e.target.value}`);
  }

  return (
    <div className="homeContent">
      <div className="filtersAndSearchBar">
        <div className="filtersAndButton">
          <div className="filtersHome">
            <select
              className="categoryFilter"
              onChange={(e) => handleFilterCategory(e)}
            >
              <option value="all">Todos</option>
              {categories?.map((cat) => (
                <option value={cat.id} key={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            <select className="aToZFilter" onChange={(e) => handleOrderName(e)}>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
          </div>
        </div>

        <h1 className="titlePage">Recetas</h1>
        <div className="searchBarSize">
          <SearchBar />
        </div>
      </div>
      <div>
        {typeof allRecipes === "object" && currentRecipes ? (
          <div className="cards">
            {currentRecipes?.map((el) => {
              return (
                <Link to={`/home/${el.id}`} className="cardsLink" key={el.id}>
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
          </div>
        ) : typeof allRecipes === "string" ? (
          <div className="noResults">
            <div className="scale-down-center">
              <MdSearchOff />
            </div>
            <div className="noResultsText">No se encontraron coincidencias</div>
          </div>
        ) : (
          <div className="loading">
            <div className="lds-hourglass"></div>
          </div>
        )}
      </div>
      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes?.length}
        handleClickPage={handleClickPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
