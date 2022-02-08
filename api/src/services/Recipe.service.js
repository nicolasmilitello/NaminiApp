const { Recipe, Ingredient_Recipe, Ingredient } = require("../db.js"); 

const getAll = async (req, res) => {
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
        res.status(200).json("No se encontró ninguna coincidencia");
      }
    } else {
      res.status(200).send(pedido);
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    let foundRecipe = await Recipe.findByPk(id);

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

    let foundRecipe = await Ingredient_Recipe.findAll({
      where: {
        RecipeId: id,
      },
    });

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
  if (name && servings && steps && CategoryId && img && ingredients) {
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
        throw new Error("No se pudo crear la receta");
      }

      if (newRecipe) {
        created
          ? res.status(200).json(newRecipe)
          : res.status(200).send("Ya existe una receta con ese nombre");
      } else {
        res
          .status(400)
          .json({ message: "Error: no se pudo crear la nueva receta" });
      }
    } catch (e) {
      // await Recipe.destroy({
      //   where: {
      //     id: newRecipe.id,
      //   },
      // });
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
    res.status(200).send(id);
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateRecipe = async (req, res) => {
  const { name, servings, steps, img, CategoryId, ingredients } = req.body;
  try {
    const { id } = req.params;

    if (ingredients) {
      try {
        await Ingredient_Recipe.destroy({
          where: {
            RecipeId: id,
          },
        });
      } catch (e) {
        console.log(e);
      }

      let foundRecipe = await Recipe.findOne({
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
        console.log(error);
      }
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
  getIngredientsRecipeById,
  deleteRecipe,
  updateRecipe,
};
