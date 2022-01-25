const { DataTypes, Model } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  class Ingredient_Recipe extends Model {}
  Ingredient_Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { sequelize: sequelize, timestamps: false }
  );
};
