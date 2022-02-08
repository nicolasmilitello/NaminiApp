const { Ingredient } = require("../db.js");

const get = async (req, res) => {
  try {
    const response = await Ingredient.findAll();
    const { name } = req.query;
    if (name) {
      let ingredientName = await response.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(name.toLowerCase())
      );
      if (ingredientName.length) {
        res.status(200).send(ingredientName);
      } else {
        res.status(404).send("No se encontraron coincidencias");
      }
    }
    res.status(200).send(response);
  } catch (e) {
    res.send(e);
  }
};

const createIngredient = async (req, res) => {
  const { name, UnitId } = req.body;

  if (name) {
    try {
      let [newIngredient, created] = await Ingredient.findOrCreate({
        where: { name: name },
        defaults: {
          name,
          UnitId,
        },
      });

      if (newIngredient) {
        created
          ? res.status(200).json({ newIngredient })
          : res.status(200).send("Ya existe un ingrediente con ese nombre");
      } else {
        res
          .status(400)
          .json({ message: "Error: no se pudo crear el ingrediente" });
      }
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  } else {
    res
      .status(400)
      .json({ message: "Error: falta ingresar uno o más datos obligatorios" });
  }
};

module.exports = {
  get,
  createIngredient,
};
