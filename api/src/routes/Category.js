const { Router } = require("express");
const { Recipe } = require("../models/Recipe.js");
//importo las funciones de servicio:
const {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} = require("../services/Category.service.js");

const router = Router();

//todas las request que lleguen a este archivo es porque son del tipo:
//"http://localhost:3001/recipe/xxxxxxxxxx"

//GET:
router.get("/get", getCategories);

//POST:
router.post("/create", createCategory);

//DELETE:
router.delete("delete/:id", deleteCategory);

//PUT:
router.put("/update/:id", updateCategory);

module.exports = router;
