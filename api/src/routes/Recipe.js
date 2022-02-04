const { Router } = require("express");
const { Recipe } = require("../models/Recipe.js");

const {
  getAll,
  createRecipe,
  getRecipeById,
  getRecipesByCategory,
  getIngredientsRecipeById,
  deleteRecipe,
  updateRecipe,
} = require("../services/Recipe.service.js");

const router = Router();

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
