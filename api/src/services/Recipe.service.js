const { Recipe, Category, Ingredient_Recipe, Ingredient } = require("../db.js"); //importo el modelo Recipe de la base de datos;

// const getAll = async (req, res, next) => {
//   try {
//     const pedido = await Recipe.findAll({
//       include: {
//         model: Category,
//         attributes: ["name"],
//         through: {
//           attributes: [],
//         },
//       },
//     });
//     res.send(pedido);
//   } catch (e) {|
//     next(e);
//   }
// };

const getAll = async (req, res, next) => {
  try {
    const pedido = await Recipe.findAll();
    const { name } = req.query;
    if (name) {
      let recipeName = await pedido.filter((recipe) =>
        recipe.name.toLowerCase().includes(name.toLowerCase())
      );
      if (recipeName.length) {
        res.status(200).send(recipeName);
      } else {
        res.status(404).send("No se encontró ninguna coincidencia");
      }
    } else {
      res.status(200).send(pedido);
    }
  } catch (e) {
    res.status(400).send(e);
    // next(e);
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    let foundRecipe = await Recipe.findByPk(id); //ESTA SOLA LÍNEA FUNCIONA
    //----------------------------------------------------------------
    // let foundRecipe = await Recipe.findAll({
    //   where: {
    //     id,
    //   },
    //   include: {
    //     model: Ingredient_Recipe,
    //   },
    // });
    // console.log(foundRecipe);
    // let foundIngredients = await Ingredient_Recipe.findAll({
    //   // where: {
    //   //   RecipeId: id,
    //   // },
    //   include: {
    //     Ingredient,
    //   },
    // });
    // console.log(foundIngredients);
    //----------------------------------------------------------------
    if (foundRecipe) {
      res.status(200).json(foundRecipe);
    } else {
      res.status(404).send("No existe una receta con el 'id' solicitado");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

const getRecipesByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    let foundRecipes = await Recipe.findAll({
      where: {
        categoryId: id,
      },
    });
    if (foundRecipes) {
      res.status(200).json(foundRecipes);
    } else {
      res.status(404).send("No existen recetas en esa categoría");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

const getIngredientsRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    let foundRecipe = await Ingredient_Recipe.findAll({
      where: {
        RecipeId: id,
      },
    });
    console.log(foundRecipe);

    if (foundRecipe) {
      res.status(200).json(foundRecipe);
    } else {
      res.status(404).send("No existe una receta con el 'id' solicitado");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

const createRecipe = async (req, res) => {
  const { name, servings, steps, CategoryId, img, ingredients } = req.body;
  if (name && servings && steps && CategoryId) {
    // console.log(typeof CategoryId);
    try {
      let [newRecipe, created] = await Recipe.findOrCreate({
        where: { name: name },
        defaults: {
          name,
          servings,
          steps,
          CategoryId,
          img,
        },
      });

      try {
        for (let ingredient of ingredients) {
          await newRecipe.addIngredient(ingredient.IngredientId, {
            through: {
              quantity: ingredient.quantity,
            },
          });
        }
      } catch (error) {
        // await deleteDBRecipe(newRecipe.id);
        // throw new Error("Problems setting Ingredients relations with Recipe");
      }

      //PROBLEMA CON STEPS!--------------------------------
      // console.log(Array.isArray(newRecipe.steps)); //false
      // console.log(typeof newRecipe.steps); //string
      //----------------------------------------------------------

      if (newRecipe) {
        // res.status(200).send("Receta creada con éxito");
        created
          ? res.status(200).json(newRecipe)
          : res.status(200).send("Ya existe una receta con ese nombre");
      } else {
        res
          .status(400)
          .json({ message: "Error: no se pudo crear la nueva receta" });
      }
    } catch (e) {
      await deleteRecipe(newRecipe.id);
      console.log(e);
      res.status(400).send(e);
    }
  } else {
    res
      .status(400)
      .json({ message: "Error: falta ingresar uno o más datos obligatorios" });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    let foundRecipe = await Recipe.findAll({
      where: {
        id: id,
      },
    });
    const deletedRecipe = await Recipe.destroy({
      where: {
        id,
      },
    });
    // const deletedRecipe = await Ingredient_Recipe.destroy({
    //   where: {
    //     RecipeId: id,
    //   },
    // });
    res.status(200).send(id);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateRecipe = async (req, res) => {
  const { name, servings, steps, img, CategoryId, ingredients } = req.body;
  // console.log(ingredients);
  try {
    const { id } = req.params;

    let foundRecipe = await Recipe.findAll({
      where: {
        id: id,
      },
    });

    try {
      for (let ingredient of ingredients) {
        await foundRecipe.addIngredient(ingredient.IngredientId, {
          through: {
            quantity: ingredient.quantity,
          },
        });
      }
    } catch (error) {
      // await deleteDBRecipe(newRecipe.id);
      // throw new Error("Problems setting Ingredients relations with Recipe");
    }

    const updatedRecipe = await Recipe.update(
      {
        name: name,
        servings: servings,
        steps: steps,
        img: img,
        CategoryId: CategoryId,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).send(`${updatedRecipe} receta(s) modicada(s)`);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  getAll,
  createRecipe,
  getRecipeById,
  getRecipesByCategory,
  // getRecipesByName,
  getIngredientsRecipeById,
  deleteRecipe,
  updateRecipe,
};

// const getRecipesByName = async (req, res) => {
//   const { name } = req.query;
//   console.log(name);
//   if (name) {
//     try {
//       const foundRecipes = await Recipe.findAll({
//         where: {
//           name,
//         },
//       });
//       console.log(foundRecipes);
//       if (foundRecipes) {
//         res.json(foundRecipes);
//       } else {
//         res.send("No existen recetas con ese nombre");
//       }
//     } catch (e) {
//       res.send(e);
//     }
//   }
// };

//* Set relations Ingredient,Steps & Diet
// try {
//   for (let ingredient of ingredients) {
//     await newRecipe.addIngredient(ingredient.id, {
//       through: {
//         amount: ingredient.amount,
//         unit: ingredient.unit,
//       },
//     });
//   }
// } catch (error) {
//   await deleteDBRecipe(newRecipe.id);
//   throw new Error("Problems setting Ingredients relations with Recipe");
// }

// try {
//   for (let step of steps) {
//     await newRecipe.createStep({ number: step.number, content: step.content });
//   }
// } catch (error) {
//   await deleteDBRecipe(newRecipe.id);
//   throw new Error("Problems creating Steps of the procedure");
// }

// try {
//   await newRecipe.addDiets(diets);
// } catch (error) {
//   await deleteDBRecipe(newRecipe.id);
//   throw new Error("Problems setting Diets relations with Recipe");
// }
