import React from "react";
import { Link } from "react-router-dom";
//importo los hooks que voy a usar de react:
import { useState, useEffect } from "react";
//importo los hooks de react-redux (previamente lo instalo -npm i react-redux-):
import { useDispatch, useSelector } from "react-redux";
//importo las actions que me interesa usar en este componente:
import {
  getRecipes,
  filterRecipesByCategory,
  orderByName,
  getCategories,
  deleteRecipe,
} from "../actions";
//importo otros componentes que voy a usar en este componente Home:
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch(); //mapDispatchToProps
  const allRecipes = useSelector((state) => state.recipes); //mapStateToProps
  const [orden, setOrden] = useState("");
  const categories = useSelector((state) => state.categories);

  //PAGINADO:------------------------------------------------------
  // const [currentPage, setCurrentPage] = useState(1);
  // const [recipesPerPage, setRecipesPerPage] = useState(5);
  // const indexOfLastRecipe = currentPage * recipesPerPage;
  // const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  // const currentRecipes = allRecipes.slice(
  //   indexOfFirstRecipe,
  //   indexOfLastRecipe
  // );
  // const paginado = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
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
    <div className="home">
      <h1>Recetas</h1>
      <select onChange={(e) => handleOrderName(e)}>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select onChange={(e) => handleFilterCategory(e)}>
        {/* Como "value" le pongo el id que corresponde a cada categoría, ya que es lo que tiene cada receta en la tabla Recipe para relacionarse con una determinada categoría */}
        <option value="all">Todos</option>
        {categories?.map((cat) => (
          <option value={cat.id} key={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <SearchBar />
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Volver a cargar todas las recetas
      </button>
      <div>
        {/* <Paginado
          recipesPerPage={recipesPerPage}
          allRecipes={allRecipes.length}
          paginado={paginado}
        /> 
        {currentRecipes &&
          currentRecipes.map((el) => {
            return (
              <Link to={`/home/${el.id}`}>
                <Card name={el.name} servings={el.servings} key={el.id} />
              </Link>
            );
          })}
        */}
        <div className="cards">
          {allRecipes &&
            allRecipes.map((el) => {
              return (
                <div>
                  <Link to={`/home/${el.id}`}>
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
            })}
        </div>
      </div>
    </div>
  );
}
