import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import {
  postRecipe,
  getCategories,
  getIngredients,
  getUnits,
} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./RecipeCreate.css";
import "./Estilos globales.css";

function validate(input) {
  let errors = {};
  if (!input.CategoryId) {
    errors.CategoryId =
      "Es un requerimiento obligatorio ingresar una categoría para la receta";
  } else if (!input.name) {
    errors.name =
      "Es un requerimiento obligatorio asignarle un nombre a la receta";
  } else if (!input.servings) {
    errors.servings =
      "Es un requerimiento obligatorio introducir las porciones";
  } else if (!input.ingredients.length) {
    errors.ingredients =
      "Es un requerimiento obligatorio ingresar los ingredientes de la receta";
  } else if (!input.steps.length) {
    errors.steps =
      "Es un requerimiento obligatorio ingresar los pasos de la receta";
  } else if (!input.img) {
    errors.img =
      "Es un requerimiento obligatorio cargar una imagen para la receta";
  }
  return errors;
}

export default function RecipeCreate() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const ingredients = useSelector((state) => state.ingredients);
  const [errors, setErrors] = useState({});
  const [show2, setShow2] = useState(false); //para mostrar si se creó correctamente la receta
  const [code, setCode] = useState(false); //para mostrar si se creó correctamente la receta

  const [input, setInput] = useState({
    name: "",
    servings: "",
    steps: [],
    CategoryId: 0,
    ingredients: [],
    img: "",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]:
          e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
      })
    );
    // console.log(input);
    // console.log(errors);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      CategoryId: e.target.value,
    });
    console.log(input);
  }

  //PARA OBTENER NOMBRES DE UNIDADES E INGREDIENTES------------------
  const ingredientList = useSelector((state) => state.ingredients); //listado de todos los ingredientes existentes en la db

  const unitList = useSelector((state) => state.units); //listado de todas las unidades existentes en la db

  function obtenerIdUnidad(ingId) {
    // console.log(ingId);
    const unitId = ingredientList?.filter((el) => el.id === Number(ingId))[0]
      ?.UnitId;

    const unit = unitList?.filter((el) => el.id === unitId)[0]?.name;

    return unit;
  }

  function obtenerId(ingId) {
    const select = ingredientList.filter((el) => el.id === Number(ingId));
    // console.log(select[0]);
    return select[0];
  }

  //PARA MANEJAR EL ARREGLO STEPS-------------------------
  const [step, setStep] = useState("");

  function handleInputSteps(e) {
    e.preventDefault();
    setStep(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
  }

  function handleAddStep(e) {
    e.preventDefault();
    setStep("");
    setInput({
      ...input,
      steps: [...input.steps, step],
    });
    // console.log(input);
    setErrors(
      validate({
        ...input,
        steps: [...input.steps, step],
      })
    );
  }

  //Para eliminar pasos ya agregados:
  function handleDeleteStep(e, step) {
    e.preventDefault();
    setInput({
      ...input,
      steps: input.steps.filter((st) => st !== step),
    });
    setErrors(
      validate({
        ...input,
        steps: input.steps.filter((st) => st !== step),
      })
    );
    // console.log(step);
  }
  //----------------------------------------------------------------

  //PARA MANEJAR LOS INGREDIENTES Y CANTIDADES-------
  const [objIngredient, setObjIngredient] = useState({
    quantity: 0,
    // UnitId: 0, //sacar
    IngredientId: 0,
  });
  const [quantityIn, setQuantityIn] = useState(0);
  // const [unitIdIn, setUnitIdIn] = useState(0);
  const [ingredientIdIn, setIngredientIdIn] = useState(0);

  function handleInputQuantity(e) {
    e.preventDefault();
    setQuantityIn(e.target.value);
    // console.log(quantityIn);
  }

  // function handleInputUnitId(e) {
  //   e.preventDefault();
  //   setUnitIdIn(e.target.value);
  //   // console.log(unitIdIn);
  // }

  function handleInputIngredient(e) {
    e.preventDefault();
    setIngredientIdIn(e.target.value);
    // console.log(e);
    // console.log(ingredientIdIn);
  }

  const [repeated, setRepeated] = useState(false);
  function handleAddIngredient(e) {
    e.preventDefault();
    // console.log(
    //   input.ingredients.filter((i) => i.IngredientId === ingredientIdIn).length
    // );
    if (
      input.ingredients.filter((i) => i.IngredientId === ingredientIdIn).length
    ) {
      setRepeated(true);
    } else {
      setRepeated(false);
      setObjIngredient({
        quantity: quantityIn,
        // UnitId: unitIdIn,
        IngredientId: ingredientIdIn,
      });
      handleAddIng();
    }
    console.log(repeated);

    // console.log(objIngredient);
  }

  function handleAddIng() {
    setInput({
      ...input,
      ingredients: [...input.ingredients, objIngredient],
    });
    setErrors(
      validate({
        ...input,
        ingredients: [...input.ingredients, objIngredient],
      })
    );
    // console.log(input);
    // console.log(errors);
  }

  //Para eliminar ingredientes ya agregados:
  function handleDeleteIngredient(e, ing) {
    e.preventDefault();
    setInput({
      ...input,
      ingredients: input.ingredients.filter((ingredient) => ingredient !== ing),
    });
    setErrors(
      validate({
        ...input,
        ingredients: input.ingredients.filter(
          (ingredient) => ingredient !== ing
        ),
      })
    );
    // console.log(input.ingredients);
  }

  //----------------------------------------------------------------
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(input);
    setCode(false);
    setShow2(true);
    const response = await dispatch(postRecipe(input));
    console.log(response);
    setMessage(response?.data);
    if (response.status === 200) {
      setCode(true);
    }
    // alert("La receta fue creada exitosamente");
    setInput({
      name: "",
      servings: "",
      steps: [],
      CategoryId: 0,
      ingredients: [],
      img: "",
    });
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getUnits());
  }, []);

  return (
    <div className="recipeCreatorContent">
      <div className="recipeCreator">
        <h1 className="titleRecipeCreator">Crear una receta</h1>

        <form className="formNewRecipe" onSubmit={(e) => handleSubmit(e)}>
          <div className="nameNewRecipe">
            <label>Nombre: </label>
            <input
              type="text"
              value={input.name}
              name="name"
              size="40"
              className="inputNameNewRecipe"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="categoryAndServings">
            <div className="categoryNewRecipe">
              <label>Categoría: </label>
              <select
                className="inputsNewRecipe"
                onChange={(e) => handleSelect(e)}
              >
                <option disabled selected>
                  Seleccione una categoría
                </option>
                {categories?.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="servingsNewRecipe">
              <label>Porciones: </label>
              <input
                className="inputServingsNewRecipe"
                type="number"
                placeholder="Ingrese las porciones"
                value={input.servings}
                min="1"
                max="99"
                name="servings"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="ingredientsNewRecipe">
            <div>
              <label>Ingredientes: </label>
            </div>

            <div>
              <div>
                <select
                  className="inputsNewRecipe"
                  onChange={(e) => handleInputIngredient(e)}
                >
                  <option disabled selected>
                    Seleccione un ingrediente
                  </option>
                  {ingredients?.map((ing) => (
                    <option value={ing.id} key={ing.id}>
                      {ing.name}
                    </option>
                  ))}
                </select>

                <input
                  className="inputQuantityNewRecipe"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="Cantidad"
                  onChange={(e) => handleInputQuantity(e)}
                />
              </div>
            </div>
            <div>{obtenerIdUnidad(ingredientIdIn)}</div>
            <div>
              <button
                className="addIngredientItem"
                onClick={(e) => handleAddIngredient(e)}
              >
                +
              </button>
            </div>
          </div>

          <div className="allIngredients">
            {input.ingredients.map((ing, index) => (
              <p className="addedIngredient" key={index + 1}>
                <span className="ingredientItem">{`${
                  obtenerId(ing.IngredientId)?.name
                }: ${ing.quantity} ${obtenerIdUnidad(
                  ing.IngredientId
                )} `}</span>

                <button
                  className="deleteIngredientItem"
                  onClick={(e) => handleDeleteIngredient(e, ing)}
                >
                  x
                </button>
              </p>
            ))}
          </div>

          <div className="stepsNewRecipe">
            <div>
              <label className="titleSteps">Pasos: </label>
            </div>

            <div className="newStep">
              <div>
                <textarea
                  className="inputStepsNewRecipe"
                  type="text"
                  placeholder="Ingrese paso..."
                  name="steps"
                  onChange={(e) => handleInputSteps(e)}
                />
              </div>
              <div className="buttonAddStep">
                <button
                  className="addIngredientItem"
                  onClick={(e) => handleAddStep(e)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="allSteps">
            {input.steps.map((step, index) => (
              <p className="addedIngredient" key={index + 1}>
                <span className="ingredientItem">{`${
                  index + 1
                }. ${step} `}</span>
                <button
                  className="deleteIngredientItem"
                  onClick={(e) => handleDeleteStep(e, step)}
                >
                  x
                </button>
              </p>
            ))}
          </div>

          <div className="imgNewRecipe">
            <label>Imagen: </label>
            <input
              type="text"
              className="inputImgNewRecipe"
              placeholder="Ingrese la URL de la imagen"
              value={input.img}
              name="img"
              onChange={(e) => handleChange(e)}
            />
          </div>

          {errors.name && <p className="error">{errors.name}</p>}
          {errors.CategoryId && <p className="error">{errors.CategoryId}</p>}
          {errors.servings && <p className="error">{errors.servings}</p>}
          {repeated && (
            <div className="failure">
              El ingrediente seleccionado ya se encuentra añadido en la receta.
            </div>
          )}
          {errors.ingredients && <p className="error">{errors.ingredients}</p>}
          {errors.steps && <p className="error">{errors.steps}</p>}
          {errors.img && <p className="error">{errors.img}</p>}
          {!errors.CategoryId &&
            !errors.name &&
            !errors.servings &&
            !errors.ingredients?.length &&
            !errors.steps?.length &&
            !errors.img && <button type="submit">Guardar receta</button>}
        </form>
        <div>
          {show2 ? (
            code ? (
              // <span className="success">Ingrediente creado exitosamente</span>
              typeof message === "object" ? ( //si message es un objeto es porque se creó la categoría exitosamente ya que la ruta devuelve como un objeto la nueva categoría
                <span className="success">Receta creada exitosamente</span>
              ) : (
                <span className="failure">{message}</span> //sino me envió una string que dice "Ya existe una categoría con ese nombre"
              )
            ) : (
              <div className="lds-hourglass"></div>
              // <span className="loading">Cargando...</span>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
