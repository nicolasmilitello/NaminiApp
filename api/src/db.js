require("dotenv").config(); //para trabajar con las variables de entorno, instalarlo.
const { Sequelize } = require("sequelize");
const fs = require("fs"); //file system, viene con Windows, sin necesidad de instalarlo
const path = require("path"); //file system, viene con Windows, sin necesidad de instalarlo
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; //debo crear el archivo .env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/namini`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize)); //ACA HICE UNA MODIFICACIÓN el "forEach" estaba así: "modelDefiners.forEach(model => model(sequelize));"

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Ingredient, Recipe, Unit, Ingredient_Recipe, Category } =
  sequelize.models;

// Aca vendrian las relaciones
//Relación uno a muchos Ingredient y Unit:
Unit.hasMany(Ingredient);
Ingredient.belongsTo(Unit);

//Relación muchos a muchos Recipe e Ingredients:
Ingredient.belongsToMany(Recipe, { through: Ingredient_Recipe });
Recipe.belongsToMany(Ingredient, { through: Ingredient_Recipe });

//Relación uno a muchos Recipe y Category:
Category.hasMany(Recipe);
Recipe.belongsTo(Category);
// Category.hasMany(Recipe, { foreignKey: "categoryId", sourceKey: "id" });
// Recipe.belongsTo(Category, { foreignKey: "categoryId", sourceKey: "id" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
