import React, { useEffect, useRef } from "react";
import LandingHero from "./landingHero";
import IngredientMenu from "./ingredientMenu";
import WholeRecipe from "./wholeRecipe";
import { ContainerGlobal } from "../../components/global.styled";
import { useLocation } from "react-router-dom";
const Homepage = () => {
  const location = useLocation();
  const refRecipe = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  document.title = "Tam Rai Dee - Home";
  return (
    <ContainerGlobal>
      <LandingHero refRecipe={refRecipe} />
      <IngredientMenu />
      <WholeRecipe refRecipe={refRecipe} />
    </ContainerGlobal>
  );
};

export default Homepage;
