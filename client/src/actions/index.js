import axios from "axios";

export function getRecipes() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/recipe/get");
    return dispatch({
      type: "GET_RECIPES",
      payload: json.data,
    });
  };
}

export function getUnits() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/unit/get");
    return dispatch({
      type: "GET_UNITS",
      payload: json.data,
    });
  };
}

export function getIngredientsRecipe(id) {
  return async function (dispatch) {
    var json = await axios.get(
      `http://localhost:3001/recipe/ingredients/${id}`
    );
    return dispatch({
      type: "GET_INGREDIENTS_RECIPES",
      payload: json.data,
    });
  };
}

export function getNameRecipes(name) {
  //acción para las búsquedas en el SearchBar
  //"name" será lo que el usuario escribe en la barra de búsqueda
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/recipe/get?name=${name}`
      );
      return dispatch({
        type: "GET_NAME_RECIPES",
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    var info = await axios.get("http://localhost:3001/category/get");
    return dispatch({
      type: "GET_CATEGORIES",
      payload: info.data,
    });
  };
}

export function postRecipe(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/recipe/create",
      payload
    );
    return response;
  };
}

export async function putRecipe(id, payload) {
  // return async function (dispatch) {
  const response = await axios.put(
    `http://localhost:3001/recipe/update/${id}`,
    payload
  );

  return response;
}
// }

export function postCategory(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/category/create",
      payload
    );

    return response;
  };
}

export function postIngredient(payload) {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/ingredient/create",
      payload
    );

    return response;
  };
}

export function filterRecipesByCategory(payload) {
  //recibo como payload lo que llamé "value" en las opciones para filtrar
  return {
    type: "FILTER_BY_CATEGORY",
    payload,
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function getIngredients() {
  return async function (dispatch) {
    var info = await axios.get("http://localhost:3001/ingredient/get");
    return dispatch({
      type: "GET_INGREDIENTS",
      payload: info.data,
    });
  };
}

export function deleteRecipe(id) {
  return async function (dispatch) {
    var info = await axios.delete(`http://localhost:3001/recipe/delete/${id}`);
    return dispatch({
      type: "DELETE_RECIPE",
      payload: info.data,
      status: info.status,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3001/recipe/${id}`);
    return dispatch({
      type: "GET_DETAILS",
      payload: json.data,
    });
  };
}
