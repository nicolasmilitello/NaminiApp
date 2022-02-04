var supertest = require("supertest-as-promised")(require("../app"));
var expect = require("chai").expect;
// var model = require("../models/model");

describe("Routes", function () {
  // beforeEach(function () {
  //   model.reset();
  // });

  describe("/get", function () {
    it("Categories: GET responde con un array con las categorías existentes", function () {
      return supertest // supertest nos permite hacer y testear requests HTTP
        .get("/category/get") // hacemos un request HTTP: GET a '/houses'
        .expect(200) // el codigo de status del response
        .expect("Content-Type", /json/) // podemos testear los headers
        .expect(function (res) {
          expect(res.body).to.eql([
            {
              id: 1,
              name: "Tartas",
            },
            {
              id: 2,
              name: "Tortas",
            },
            {
              id: 3,
              name: "Shots",
            },
            {
              id: 4,
              name: "Alfajores",
            },
            {
              id: 5,
              name: "Postres",
            },
            {
              id: 6,
              name: "Tortas temáticas",
            },
            {
              id: 34,
              name: "Muffins",
            },
            {
              id: 40,
              name: "Cookies",
            },
          ]);
        });
    });

    it("Recipes: GET responde con un array con las recetas existentes", function () {
      // model.addHouse("Gryffindor");
      // model.addHouse("Slytherin");
      return supertest
        .get("/recipe/get")
        .expect(200)
        .expect("Content-Type", /json/);
      // .expect(function (res) {
      //   expect(res.body).to.eql(["Gryffindor", "Slytherin"]);
      // });
    });

    it("Recipes: si le paso por query un nombre, GET responde con un array con la receta con el nombre ingresado", function () {
      // model.addHouse("Gryffindor");
      // model.addHouse("Slytherin");
      return supertest
        .get("/recipe/get?name=selva negra")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql([
            {
              id: 1,
              name: "Selva Negra",
              servings: 8,
              steps: [
                "Para la compota. Colocar las guindas y su almíbar en una cacerolita. Calentar hasta que rompa el hervor. Agregar el almidón disuelto en el kirsch. Cuando espese, retirar del calor y enfriar.",
                "Para la crema al chocolate. Derretir el chocolate picado a baño María. Calentar la crema en una cacerola pequeña hasta el primer hervor. Mezclarla con el chocolate con la ayuda de una espátula. Enfriar hasta obtener una consistencia de pomada.",
                "Para el armado. Cortar el genoise en 3 capas. Sobre una de ellas extender una pequeña porción de chantillí y colocar la compota de guindas. Evitar poner frutas en el centro para que al cortar las porciones queden bien prolijas.",
                "Ubicar otra capa de genoise, embeber con la mitad del almíbar perfumado con el kirsch y untar con la crema al chocolate. Apoyar arriba la última capa de genoise. Embeber con el resto del almíbar.",
                "Cubrir toda la torta con crema chantillí. Decorar con virutas de chocolate, guindas y copos de crema. Enfriar bien antes de consumir (preferentemente durante 24 horas).",
              ],
              img: "Https://badun.nestle.es/imgserver/v1/80/1290x742/e4abb4431192-tarta-selva-negra.jpg",
              CategoryId: 2,
            },
          ]);
        });
    });

    it("Recipes: si le paso por query un nombre que no existe, GET responde con un status 404", function () {
      // model.addHouse("Gryffindor");
      // model.addHouse("Slytherin");
      return supertest
        .get("/recipe/get?name=alfajor")
        .expect(404)
        .expect("Content-Type", "text/html; charset=utf-8");
    });

    it("Ingredients: GET responde con un array con los ingredientes existentes", function () {
      // model.addHouse("Gryffindor");
      // model.addHouse("Slytherin");
      return supertest
        .get("/ingredient/get")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql([
            {
              id: 2,
              name: "Ralladura de limón",
              UnitId: 4,
            },
            {
              id: 3,
              name: "Harina",
              UnitId: 1,
            },
            {
              id: 4,
              name: "Agua",
              UnitId: 3,
            },
            {
              id: 5,
              name: "Chocolate",
              UnitId: 1,
            },
            {
              id: 6,
              name: "Chocolate blanco",
              UnitId: 1,
            },
            {
              id: 7,
              name: "Gotas de chocolate semiamargo",
              UnitId: 1,
            },
            {
              id: 9,
              name: "Sal",
              UnitId: 4,
            },
            {
              id: 10,
              name: "Microgotas de chocolate blanco",
              UnitId: 1,
            },
            {
              id: 12,
              name: "Manteca",
              UnitId: 1,
            },
            {
              id: 13,
              name: "Dulce de leche",
              UnitId: 1,
            },
            {
              id: 14,
              name: "Crema de leche",
              UnitId: 3,
            },
            {
              id: 15,
              name: "Chocolinas",
              UnitId: 6,
            },
            {
              id: 16,
              name: "Queso crema",
              UnitId: 1,
            },
            {
              id: 17,
              name: "Frutillas",
              UnitId: 1,
            },
            {
              id: 18,
              name: "Chocolate cobertura",
              UnitId: 1,
            },
            {
              id: 19,
              name: "Agua de azahar",
              UnitId: 4,
            },
            {
              id: 23,
              name: "Ralladura de naranja",
              UnitId: 1,
            },
            {
              id: 24,
              name: "Frambuesas",
              UnitId: 1,
            },
            {
              id: 25,
              name: "Dulce de leche repostero",
              UnitId: 1,
            },
            {
              id: 26,
              name: "Arándanos",
              UnitId: 1,
            },
            {
              id: 28,
              name: "Merengues",
              UnitId: 1,
            },
            {
              id: 29,
              name: "Yogur",
              UnitId: 3,
            },
            {
              id: 30,
              name: "Almidón de maíz",
              UnitId: 4,
            },
            {
              id: 31,
              name: "Bicarbonato de sodio",
              UnitId: 4,
            },
            {
              id: 32,
              name: "Azúcar",
              UnitId: 1,
            },
            {
              id: 33,
              name: "Azúcar impalpable",
              UnitId: 1,
            },
            {
              id: 34,
              name: "Huevo(s)",
              UnitId: 6,
            },
            {
              id: 35,
              name: "Yema(s)",
              UnitId: 6,
            },
            {
              id: 36,
              name: "Clara(s)",
              UnitId: 6,
            },
            {
              id: 37,
              name: "Nutella",
              UnitId: 1,
            },
            {
              id: 38,
              name: "Pasta de pistachos",
              UnitId: 1,
            },
            {
              id: 39,
              name: "Chocolate semiamargo",
              UnitId: 1,
            },
            {
              id: 27,
              name: "Duraznos",
              UnitId: 1,
            },
            {
              id: 44,
              name: "Leche",
              UnitId: 3,
            },
            {
              id: 45,
              name: "Stevia",
              UnitId: 3,
            },
            {
              id: 53,
              name: "Galletitas Oreo",
              UnitId: 1,
            },
            {
              id: 54,
              name: "Galletitas Vainillas",
              UnitId: 1,
            },
            {
              id: 55,
              name: "Polvo de hornear",
              UnitId: 4,
            },
            {
              id: 56,
              name: "Ricotta",
              UnitId: 1,
            },
            {
              id: 57,
              name: "Esencia de vainilla",
              UnitId: 4,
            },
            {
              id: 58,
              name: "Levadura",
              UnitId: 1,
            },
            {
              id: 61,
              name: "Ferrero Rocher",
              UnitId: 6,
            },
            {
              id: 62,
              name: "Barritas Kinder",
              UnitId: 6,
            },
          ]);
        });
    });

    it("Units: GET responde con un array con todas las unidades existentes", function () {
      // model.addHouse("Gryffindor");
      // model.addHouse("Slytherin");
      return supertest
        .get("/unit/get")
        .expect(200)
        .expect("Content-Type", /json/)
        .expect(function (res) {
          expect(res.body).to.eql([
            {
              id: 1,
              name: "gr",
            },
            {
              id: 2,
              name: "taza(s)",
            },
            {
              id: 3,
              name: "ml",
            },
            {
              id: 4,
              name: "cucharada(s) de té",
            },
            {
              id: 5,
              name: "gota(s)",
            },
            {
              id: 6,
              name: "unidad(es)",
            },
            {
              id: 7,
              name: "medida(s)",
            },
            {
              id: 8,
              name: "pizca(s)",
            },
          ]);
        });
    });
  });
});
