import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//? ACTIONS:
import { getCategories } from "../../actions";

//?STYLES
import { Container, Image, DetailsContainer } from "./CardSC";

//? ICONS:
import { BiDish } from "react-icons/bi";
import { ImSpoonKnife } from "react-icons/im";

//? IMAGES:
import ImgNotFound from "../../img/ImgNotFound.png";

export default function Card({ id, name, servings, category, img }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  let categoryRecipe = categories?.filter((cat) => category === cat.id);
  let cat = categoryRecipe ? categoryRecipe[0]?.name : "";

  useEffect(() => {
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Image
        src={img}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = ImgNotFound;
        }}
        alt="not found"
      />
      <DetailsContainer>
        <div>
          <div>
            <BiDish />
          </div>
          <h6>{cat}</h6>
        </div>
        <h3>{name}</h3>
        <div>
          <div>
            <ImSpoonKnife />
          </div>
          <h6>{servings} porciones</h6>
        </div>
      </DetailsContainer>
    </Container>
  );
}
