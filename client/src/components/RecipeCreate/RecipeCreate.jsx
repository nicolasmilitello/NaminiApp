import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  postRecipe,
  getCategories,
  getIngredients,
  getUnits,
} from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import { MdAddCircleOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import "./RecipeCreate.css";
import "../StepsEdit/StepsEdit.css";
import "../Globales.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name =
      "Es un requerimiento obligatorio asignarle un nombre a la receta";
  } else if (!input.CategoryId) {
    errors.CategoryId =
      "Es un requerimiento obligatorio ingresar una categoría para la receta";
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
  const history = useHistory();
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
  }

  function handleSelect(e) {
    setInput({
      ...input,
      CategoryId: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        CategoryId: e.target.value,
      })
    );
  }

  //PARA OBTENER NOMBRES DE UNIDADES E INGREDIENTES------------------
  const ingredientList = useSelector((state) => state.ingredients); //listado de todos los ingredientes existentes en la db

  const unitList = useSelector((state) => state.units); //listado de todas las unidades existentes en la db

  function obtenerIdUnidad(ingId) {
    const unitId = ingredientList?.filter((el) => el.id === Number(ingId))[0]
      ?.UnitId;

    const unit = unitList?.filter((el) => el.id === unitId)[0]?.name;

    return unit;
  }

  function obtenerId(ingId) {
    const select = ingredientList.filter((el) => el.id === Number(ingId));

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
    setInput({
      ...input,
      steps: [...input.steps, step],
    });
    setErrors(
      validate({
        ...input,
        steps: [...input.steps, step],
      })
    );
    setStep("");
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
  }
  //----------------------------------------------------------------

  //PARA MANEJAR LOS INGREDIENTES Y CANTIDADES-------
  const [quantityIn, setQuantityIn] = useState("");
  const [ingredientIdIn, setIngredientIdIn] = useState("");

  function handleInputQuantity(e) {
    e.preventDefault();
    setQuantityIn(e.target.value);
  }

  function handleInputIngredient(e) {
    e.preventDefault();
    setIngredientIdIn(e.target.value);
  }

  const [repeated, setRepeated] = useState(false);
  function handleAddIngredient(e) {
    e.preventDefault();

    if (
      input.ingredients.filter((i) => i.IngredientId === ingredientIdIn).length
    ) {
      setRepeated(true);
    } else {
      setRepeated(false);
      handleAddIng();
    }
  }

  function handleAddIng() {
    setInput({
      ...input,
      ingredients: [
        ...input.ingredients,
        {
          quantity: quantityIn,
          IngredientId: ingredientIdIn,
        },
      ],
    });
    setErrors(
      validate({
        ...input,
        ingredients: [
          ...input.ingredients,
          {
            quantity: quantityIn,
            IngredientId: ingredientIdIn,
          },
        ],
      })
    );
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
  }

  //----------------------------------------------------------------
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setCode(false);
    setShow2(true);
    const response = await dispatch(postRecipe(input));
    setMessage(response?.data);
    if (response.status === 200) {
      setCode(true);
    }
    setInput({
      name: "",
      servings: "",
      steps: [],
      CategoryId: 0,
      ingredients: [],
      img: "",
    });
    if (typeof response.data != "string") {
      history.push(`/home/${response.data.id}`);
    }
  }

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getUnits());
  }, []);

  return (
    <div className="recipeCreatorContent">
      <div className="recipeCreator">
        <h1 className="titlePage">Crear una receta</h1>

        <form className="formNewRecipe" onSubmit={(e) => handleSubmit(e)}>
          <div className="nameNewRecipe">
            <label>Nombre: </label>
            <input
              type="text"
              value={input.name}
              placeholder=" Ingrese el nombre"
              name="name"
              size="40"
              className="inputNameNewRecipe"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p className="errorInputVisible">{errors.name}</p>}
          </div>

          <div className="categoryAndServings">
            <div className="categoryNewRecipe">
              <label>Categoría: </label>
              <select
                defaultValue={"DEFAULT"}
                className="inputCategoryNewRecipe"
                onChange={(e) => handleSelect(e)}
              >
                <option value="DEFAULT" disabled>
                  Seleccione una categoría
                </option>
                {categories?.map((cat) => (
                  <option value={cat.id} key={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              {errors.CategoryId && (
                <p className="errorInputVisible">{errors.CategoryId}</p>
              )}
            </div>

            <div className="servingsNewRecipe">
              <label>Porciones: </label>
              <input
                className="inputServingsNewRecipe"
                type="number"
                placeholder=" Ingrese las porciones"
                value={input.servings}
                min="1"
                max="99"
                name="servings"
                onChange={(e) => handleChange(e)}
              />
              {errors.servings && (
                <p className="errorInputVisible">{errors.servings}</p>
              )}
            </div>
          </div>
          <div className="ingredientsNewRecipe">
            <div className="inputsAddIngredient">
              <label className="labelIngredients">Ingredientes: </label>

              <div>
                <div>
                  <select
                    defaultValue={"DEFAULT"}
                    className="inputsNewRecipe"
                    onChange={(e) => handleInputIngredient(e)}
                  >
                    <option value="DEFAULT" disabled>
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
                    min="0.1"
                    step="0.1"
                    placeholder=" Cantidad"
                    onChange={(e) => handleInputQuantity(e)}
                  />
                </div>
              </div>
              <div className="blankSpace">
                <div className="titlesEditAndLabels">
                  {obtenerIdUnidad(ingredientIdIn)}
                </div>
              </div>
              <div className="buttonAdd">
                <button
                  disabled={
                    quantityIn.length && ingredientIdIn.length ? false : true
                  }
                  className={
                    quantityIn.length &&
                    Number(quantityIn) &&
                    ingredientIdIn.length
                      ? "addIngredientItem"
                      : "addIngredientItemDisabled"
                  }
                  onClick={(e) => handleAddIngredient(e)}
                >
                  <MdAddCircleOutline />
                </button>
              </div>
            </div>

            <div>
              {repeated && (
                <div className="errorInputVisible">
                  El ingrediente seleccionado ya se encuentra añadido en la
                  receta.
                </div>
              )}
              {errors.ingredients && (
                <p className="errorInputVisible">{errors.ingredients}</p>
              )}
            </div>
          </div>
          <div className="allIngredients">
            {input.ingredients.map((ing, index) => (
              <p className="addedIngredient" key={index + 1}>
                <span className="ingredientItem">{` ${
                  obtenerId(ing.IngredientId)?.name
                }: ${ing.quantity} ${obtenerIdUnidad(
                  ing.IngredientId
                )} `}</span>

                <button
                  className="redButtonStepEditPage"
                  onClick={(e) => handleDeleteIngredient(e, ing)}
                >
                  <MdOutlineCancel />
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
                  maxLength="255"
                  className="inputStepsNewRecipe"
                  type="text"
                  placeholder=" Ingrese paso..."
                  name="steps"
                  onChange={(e) => handleInputSteps(e)}
                />
              </div>
              <div className="buttonAddStep">
                <button
                  disabled={step.length ? false : true}
                  className={
                    step.length
                      ? "addIngredientItem"
                      : "addIngredientItemDisabled"
                  }
                  onClick={(e) => handleAddStep(e)}
                >
                  <MdAddCircleOutline />
                </button>
              </div>
            </div>
            {errors.steps && (
              <p className="errorInputVisible">{errors.steps}</p>
            )}
          </div>
          {step.length === 255 ? (
            <div className="stepLengthError">
              Excede la longitud permitida para cada paso.
            </div>
          ) : (
            <br />
          )}
          <div className="allSteps">
            {input.steps.map((step, index) => (
              <p className="addedIngredient" key={index + 1}>
                <div className="ingredientItem">
                  <span className="numberStep">{`${index + 1}. `}</span>
                  <span>{`${step} `}</span>
                </div>
                <button
                  className="redButtonStepEditPage"
                  onClick={(e) => handleDeleteStep(e, step)}
                >
                  <MdOutlineCancel />
                </button>
              </p>
            ))}
          </div>
          <div className="imgNewRecipe">
            <label>Imagen: </label>
            <input
              type="text"
              className="inputImgNewRecipe"
              placeholder=" Ingrese la URL de la imagen"
              value={input.img}
              name="img"
              onChange={(e) => handleChange(e)}
            />
            {errors.img && <p className="errorInputVisible">{errors.img}</p>}
          </div>
          {input.name &&
          input.servings &&
          input.steps.length &&
          input.ingredients?.length &&
          input.CategoryId &&
          input.img ? (
            <button className="saveRecipeButton" type="submit">
              Guardar receta
            </button>
          ) : (
            <button disabled={true} className="disabledButtonStepEditPage">
              Guardar receta
            </button>
          )}
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
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
