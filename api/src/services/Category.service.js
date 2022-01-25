const { Category } = require("../db.js"); //importo el modelo Recipe de la base de datos;

const getCategories = async (req, res) => {
  try {
    const response = await Category.findAll();
    res.status(200).send(response);
  } catch (e) {
    res.status(400).send(e);
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (name) {
    try {
      const [newCategory, created] = await Category.findOrCreate({
        where: { name: name },
      });
      if (newCategory) {
        created
          ? res.status(200).send({ newCategory })
          : res.status(200).send("Ya existe una categoría con ese nombre");
      } else {
        res
          .status(400)
          .json({ message: "Error: no se pudo crear la categoría" });
      }
    } catch (e) {
      res.status(400).send(e);
    }
  } else {
    res
      .status(400)
      .json({ message: "Error: falta ingresar uno o más datos obligatorios" });
  }
};

//HAY UN ERROR:
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    res.status(200).json(
      await Category.destroy({
        where: {
          id,
        },
      })
    );
  } catch (e) {
    res.status(400).send(e);
  }
};

const updateCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const { id } = req.params;
    const response = await Category.update(
      { name: name },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).send(`${response} categoría(s) modificada(s)`);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
};
