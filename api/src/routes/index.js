const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Como modularicé las rutas de Ingredient y Recipe, las necesito requerir:
const Ingredient = require("./Ingredient.js");
const Recipe = require("./Recipe.js");
const Category = require("./Category.js");
const Unit = require("./Unit.js");
const router = Router();

// Configurar los routers ()
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipe", Recipe); //CUANDO LLEGUE UNA SOLICITUD "/recipe" QUE USE EL ARCHIVO "RECIPE.JS".
router.use("/ingredient", Ingredient);
router.use("/category", Category);
router.use("/unit", Unit);
module.exports = router;

/*
REQUEST  -----------> me llega una request con el formato: "localhost:3001/ingredients/..."
      |
      |
      |
SERVIDOR -----------> llega la solicitud y la envía (mediante el middleware "server.use("/", routes);"
      |                                       definido en app.js) al archivo index.js.
      |
      |
      |
INDEX.JS (ROUTES) --> recibe la solicitud y según sea ".../ingredients" o ".../recipes" la redirige al 
      |                       |                       archivo correspondiente.
      |                       |
      |                       |
      |                       |
Ingredients.js     Recipes.js
*/
