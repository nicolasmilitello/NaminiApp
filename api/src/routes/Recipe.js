const { Router } = require("express");
const { Recipe } = require("../models/Recipe.js");
//importo las funciones de servicio:
const {
  getAll,
  createRecipe,
  getRecipeById,
  getRecipesByCategory,
  //getRecipesByName,
  getIngredientsRecipeById,
  deleteRecipe,
  updateRecipe,
} = require("../services/Recipe.service.js");

const router = Router();

//todas las request que lleguen a este archivo es porque son del tipo:
//"http://localhost:3001/recipe/xxxxxxxxxx"

//GET:

router.get("/get", getAll); //todas y query
router.get("/:id", getRecipeById);
router.get("/category/:id", getRecipesByCategory);
router.get("/ingredients/:id", getIngredientsRecipeById);

//POST:
router.post("/create", createRecipe);

//DELETE:
router.delete("/delete/:id", deleteRecipe);

//PUT:
router.put("/update/:id", updateRecipe);

module.exports = router;

//router.get("/recipes", getRecipesByName);
