const { Router } = require("express");
const { Recipe } = require("../models/Recipe.js");
const {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} = require("../services/Category.service.js");

const router = Router();

//GET:
router.get("/get", getCategories);

//POST:
router.post("/create", createCategory);

//DELETE:
router.delete("delete/:id", deleteCategory);

//PUT:
router.put("/update/:id", updateCategory);

module.exports = router;
