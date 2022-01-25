const { Router } = require("express");
//importo las funciones de servicio:
const {
  get,
  createIngredient,
  // getIngredientsByName,
} = require("../services/Ingredient.service.js");

const router = Router();

//GET:
router.get("/get", get);
// router.get("/ingredients", getIngredientsByName);

//POST:
router.post("/create", createIngredient);

//PUT:

module.exports = router;
