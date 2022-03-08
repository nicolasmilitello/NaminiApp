import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//?ACTIONS:
import {
  getDetail,
  getCategories,
  getIngredientsRecipe,
  getIngredients,
  getUnits,
} from "../../actions";

//? STYLES:
import {
  Container,
  Card,
  InfoContainer,
  ImageContainer,
  Image,
  ButtonsContainer,
  EditButton,
  ReturnButton,
  IngrCateServContainer,
  Icon,
  ServingCategoryContainer,
  DetailTitle,
  IngredientsContainer,
  Item,
  StepsContainer,
  Step,
  StepNumber,
  LoadingAnimation,
} from "./RecipeDetailsSC";

//? ICONS:
import { ImSpoonKnife } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import { BiEditAlt, BiDish } from "react-icons/bi";

//? IMAGES:
import ImgNotFound from "../../img/ImgNotFound.png";

export default function RecipeDetails(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    dispatch(getIngredientsRecipe(props.match.params.id));
    dispatch(getCategories());
    dispatch(getIngredients());
    dispatch(getUnits());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const recipeDetails = useSelector((state) => state.detail); //detalles de una receta (no incluye los ingredientes)

  const categories = useSelector((state) => state.categories); //para traerme el listado de categorías existentes

  const ingredients = useSelector((state) => state.ing_rec); //listado de ingredientes de una receta en particular

  function cats() {
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
              alt="not found"
            />

            <ButtonsContainer>
              <Link to={`/edit/${recipeDetails[0].id}`}>
                <EditButton>
                  <BiEditAlt />
                </EditButton>
              </Link>
              <Link to={"/home"}>
                <ReturnButton>
                  <GiReturnArrow />
                </ReturnButton>
              </Link>
            </ButtonsContainer>

            <h1>{recipeDetails[0].name}</h1>

            <IngrCateServContainer>
              <ServingCategoryContainer>
                <Icon>
                  <BiDish />
                </Icon>

                <DetailTitle>{`${cats()}`}</DetailTitle>

                <Icon>
                  <ImSpoonKnife />
                </Icon>

                <DetailTitle>{recipeDetails[0].servings} porciones</DetailTitle>
              </ServingCategoryContainer>

              <IngredientsContainer>
                <p>Ingredientes:</p>
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
              <p>Pasos:</p>

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
