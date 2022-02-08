const { Router } = require("express");

// Importar todos los routers;
const Ingredient = require("./Ingredient.js");
const Recipe = require("./Recipe.js");
const Category = require("./Category.js");
const Unit = require("./Unit.js");
const router = Router();

// Configurar los routers ()
router.use("/recipe", Recipe);
router.use("/ingredient", Ingredient);
router.use("/category", Category);
router.use("/unit", Unit);
module.exports = router;
