import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//? ACTIONS:
import {
  getDetail,
  getCategories,
  deleteRecipe,
  getIngredientsRecipe,
  getIngredients,
  getUnits,
} from "../../actions/index";

//? STYLES:
import {
  Container,
  Card,
  InfoContainer,
  Image,
  ButtonsContainer,
  DeleteButton,
  ReturnButton,
  EditButton,
  NameRecipeContainer,
  ImageEditContainer,
  IngrCateServContainer,
  Icon,
  ServingCategoryContainer,
  TitleContainer,
  IngredientsContainer,
  Item,
  StepsContainer,
  Step,
  StepNumber,
  LoadingAnimation,
} from "./RecipeEditSC";

//? ICONS:
import { BiEditAlt, BiDish } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";

//? IMAGES:
import ImgNotFound from "../../img/ImgNotFound.png";

export default function RecipeEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    dispatch(getCategories());
    dispatch(getIngredientsRecipe(props.match.params.id));
    dispatch(getIngredients());
    dispatch(getUnits());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail); //para traerme los detalles de una receta (no incluye los ingredientes)

  const categories = useSelector((state) => state.categories); //para traerme el listado de categorías existentes

  const ingredients = useSelector((state) => state.ing_rec); //listado de ingredientes de una receta en particular

  function obtenerNombreCategoria() {
    let categoryRecipe = categories
      ? categories.filter((cat) => recipeDetails[0].CategoryId === cat.id)
      : "";
    let nameCategory = categoryRecipe ? categoryRecipe[0]?.name : "";
    return nameCategory;
  }

  const ingredientList = useSelector((state) => state.ingredients); //listado de todos los ingredientes existentes en la db

  const unitList = useSelector((state) => state.units); //listado de todas las unidades existentes en la db

  function obtenerIdUnidad(ingId) {
    const unitId = ingredientList?.filter((el) => el.id === ingId)[0]?.UnitId;

    const unit = unitList?.filter((el) => el.id === unitId)[0]?.name;
    return unit;
  }

  function obtenerId(ingId) {
    const select = ingredientList?.filter((el) => el.id === ingId);
    return select && select[0];
  }

  function deleteRec(id) {
    dispatch(deleteRecipe(id));
    history.push("/home");
  }

  return (
    <Container>
      <Card>
        {recipeDetails?.length ? (
          <InfoContainer>
            <Image
              src={recipeDetails[0].img}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = ImgNotFound;
              }}
              alt="img not found"
            />

            <ButtonsContainer>
              <DeleteButton onClick={(e) => deleteRec(props.match.params.id)}>
                <MdDeleteOutline />
              </DeleteButton>

              <Link to={`/home/${props.match.params.id}`}>
                <ReturnButton>
                  <GiReturnArrow />
                </ReturnButton>
              </Link>
            </ButtonsContainer>

            <NameRecipeContainer>
              <h1>{recipeDetails[0].name}</h1>

              <Link to={`/name/${props.match.params.id}`}>
                <EditButton>
                  <BiEditAlt />
                </EditButton>
              </Link>
            </NameRecipeContainer>

            <ImageEditContainer>
              <img
                src={recipeDetails[0].img}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = ImgNotFound;
                }}
                alt="img not found"
              />
              <Link to={`/img/${props.match.params.id}`}>
                <EditButton>
                  <BiEditAlt />
                </EditButton>
              </Link>
            </ImageEditContainer>

            <IngrCateServContainer>
              <ServingCategoryContainer>
                <Icon>
                  <BiDish />
                </Icon>

                <TitleContainer>
                  <p>{obtenerNombreCategoria()}</p>
                  <Link to={`/category/${props.match.params.id}`}>
                    <EditButton>
                      <BiEditAlt />
                    </EditButton>
                  </Link>
                </TitleContainer>

                <ImSpoonKnife />

                <TitleContainer>
                  <p>{recipeDetails[0].servings} porciones</p>
                  <Link to={`/servings/${props.match.params.id}`}>
                    <EditButton>
                      <BiEditAlt />
                    </EditButton>
                  </Link>
                </TitleContainer>
              </ServingCategoryContainer>

              <IngredientsContainer>
                <TitleContainer>
                  <p>Ingredientes:</p>
                  <Link to={`/ingredients/${props.match.params.id}`}>
                    <EditButton>
                      <BiEditAlt />
                    </EditButton>
                  </Link>
                </TitleContainer>

                {ingredients?.map((i, index) => (
                  <Item key={index}>
                    <span>{`${
                      obtenerId(i.IngredientId) &&
                      obtenerId(i.IngredientId)?.name
                    }: `}</span>
                    <span>{`${i.quantity} `}</span>
                    <span>{`${obtenerIdUnidad(i.IngredientId)}`}</span>
                  </Item>
                ))}
              </IngredientsContainer>
            </IngrCateServContainer>

            <StepsContainer>
              <TitleContainer>
                <p>Pasos:</p>

                <Link to={`/steps/${props.match.params.id}`}>
                  <EditButton>
                    <BiEditAlt />
                  </EditButton>
                </Link>
              </TitleContainer>

              {recipeDetails[0].steps.map((st, index) => (
                <Step key={index}>
                  <StepNumber>{`${index + 1}. `}</StepNumber>
                  <span>{`${st}`}</span>
                </Step>
              ))}
            </StepsContainer>
          </InfoContainer>
        ) : (
          <LoadingAnimation></LoadingAnimation>
        )}
      </Card>
    </Container>
  );
}
