const { Router } = require("express");

const { get, createIngredient } = require("../services/Ingredient.service.js");

const router = Router();

//GET:
router.get("/get", get);

//POST:
router.post("/create", createIngredient);

module.exports = router;
