const { DataTypes, Model } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  class Recipe extends Model {}
  Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      servings: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      steps: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    { sequelize: sequelize, timestamps: false }
  );
};
