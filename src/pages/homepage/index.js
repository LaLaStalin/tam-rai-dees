import React, { useEffect } from "react";
import LandingHero from "./landingHero";
import IngredientMenu from "./ingredientMenu";
import WholeRecipe from "./wholeRecipe";
import { ContainerGlobal } from "../../components/global.styled";
import { useLocation } from "react-router-dom";
const Homepage = () => {
  // const handle = () => {
  //   console.log(window.scrollY);
  // };
  // useEffect(() => {
  //   document.addEventListener("scroll", handle);
  // }, [handle]);
  // const location = useLocation();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  document.title = "Tam Rai Dee - Home";
  return (
    <ContainerGlobal>
      <LandingHero />
      <IngredientMenu />
      <WholeRecipe />
    </ContainerGlobal>
  );
};

export default Homepage;
