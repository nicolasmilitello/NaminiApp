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
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //-------------------------------------------------------------------

  //para traer las recetas cuando el componente se monta:
  useEffect(() => {
    dispatch(getRecipes()); //getRecipes() es la action creada en actions.
    dispatch(getCategories());
  }, [dispatch]); //arreglo vacío como segundo parámetro para que no se genere un loop infinito

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

          <div>
            <button
              className="grayButton"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              Reestablecer las recetas
            </button>
          </div>
        </div>

        <h1 className="titlePage">Recetas</h1>
        <div className="searchBarSize">
          <SearchBar />
        </div>
      </div>
      <div>
        <div className="cards">
          {currentRecipes &&
            currentRecipes.map((el) => {
              return (
                <Link to={`/home/${el.id}`} className="cardsLink">
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
          {/* {allRecipes &&
            allRecipes.map((el) => {
              return (
                <div>
                  <Link className="linkToRecipes" to={`/home/${el.id}`}>
                  <Card
                  img={el.img}
                  name={el.name}
                  servings={el.servings}
                  category={el.CategoryId}
                  key={el.id}
                  id={el.id}
                  />
                  </Link>
                  </div>
              );
            })} */}
        </div>
      </div>
      <Paginado
        recipesPerPage={recipesPerPage}
        allRecipes={allRecipes?.length}
        paginado={paginado}
      />
    </div>
  );
}
