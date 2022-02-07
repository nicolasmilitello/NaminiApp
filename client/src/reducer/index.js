const initialState = {
  recipes: [], //cuando aplico filtros, este es el que se modificará. Este es el que estoy renderizando.
  allRecipes: [], //tendrá lo mismo que "recipes", me va a servir para que al filtrar, si vuelvo a aplicar otro filtro se me haga sobre la totalidad de las recetas y no intente hacer un filtro de las filtradas anteriormente.
  categories: [],
  ingredients: [],
  units: [],
  detail: [],
  ing_rec: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload, //creo otro que tenga lo mismo para poder filtrar sin problemas
      };
    case "GET_INGREDIENTS_RECIPES":
      return {
        ...state,
        ing_rec: action.payload,
      };
    case "FILTER_BY_CATEGORY":
      const allRecipes = state.allRecipes;
      const recipesFiltered =
        action.payload === "all"
          ? allRecipes
          : allRecipes.filter((el) => el.CategoryId === Number(action.payload)); //la action.payload me llega como string, y en la tabla "Recipes" la "CategoryId" es un número, asique la transformo en number.
      return {
        ...state,
        recipes: recipesFiltered,
      };
    case "ORDER_BY_NAME":
      let sortedArr =
        action.payload === "asc"
          ? state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        recipes: sortedArr,
      };
    case "GET_NAME_RECIPES":
      return {
        ...state,
        recipes: action.payload,
      };
    case "GET_CATEGORIES":
      let sortedCategories = action.payload.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        categories: sortedCategories,
      };
    case "POST_RECIPE":
      return {
        ...state,
      };
    case "GET_INGREDIENTS":
      let sortedIng = action.payload.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        ingredients: sortedIng,
      };
    case "POST_CATEGORY":
      return {
        ...state,
      };
    case "POST_INGREDIENT":
      return {
        ...state,
      };
    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: [action.payload],
      };
    case "PUT_RECIPE":
      return {
        ...state,
      };
    case "GET_UNITS":
      let sortedUnits = action.payload.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        units: sortedUnits,
      };
    default:
      return {};
  }
}

export default rootReducer;
