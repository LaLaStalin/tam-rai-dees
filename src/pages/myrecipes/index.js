import React, { useState, useEffect } from "react";
import LandingMyRecipes from "./landingMyRecipes";
import Recipes from "./recipes";
import { ContainerGlobal } from "../../components/global.styled";
import { ButtonPrimary } from "../../components/Button/index";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Favorite from "./favorite";
import { useLocation } from "react-router-dom";

const ButtonMenuWrrapper = styled.div`
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px var(--pLR);

  .button-menu {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
    justify-content: flex-start;
    /* color: var(--bg-theme); */
    width: 140px;

    .icon {
      font-size: 30px;
      font-weight: 400;
    }

    & > p {
      font-size: var(--txt-primary);
    }
  }
`;

const MyRecipes = () => {
  document.title = "Kin Rai Dee - My Recipe";

  const [isMyRecipe, setIsMyRecipe] = useState("recipe");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const renderBtn = () => {
    return (
      <>
        <ButtonMenuWrrapper>
          <ButtonPrimary
            w="150px"
            h="60px"
            fontW="500"
            shadow={isMyRecipe === "recipe" ? null : "transpanrent"}
            color={isMyRecipe === "recipe" ? "#fff" : "gray"}
            bg={isMyRecipe === "recipe" ? null : "transparent"}
            border={isMyRecipe === "recipe" ? null : "1px solid gray"}
            style={{ zIndex: `${isMyRecipe === "recipe" ? 2 : 1}` }}
            onClick={() => setIsMyRecipe("recipe")}
          >
            <span className="button-menu">
              <Icon icon="arcticons:nextcloudcookbook" className="icon" />
              <p>Recipes</p>
            </span>
          </ButtonPrimary>
          <ButtonPrimary
            w="150px"
            h="60px"
            fontW="500"
            bg={isMyRecipe === "favorite" ? null : "transparent"}
            shadow={isMyRecipe === "favorite" ? null : "transpanrent"}
            color={isMyRecipe === "favorite" ? "#fff" : "gray"}
            border={isMyRecipe === "favorite" ? null : "1px solid gray"}
            style={{
              marginLeft: "-13px",
              zIndex: `${isMyRecipe === "recipe" ? 1 : 2}`,
              paddingLeft: "25px",
            }}
            onClick={() => setIsMyRecipe("favorite")}
          >
            <span className="button-menu">
              <Icon icon="ep:collection-tag" className="icon" />
              <p>Favorite</p>
            </span>
          </ButtonPrimary>
        </ButtonMenuWrrapper>
      </>
    );
  };
  return (
    <ContainerGlobal>
      <LandingMyRecipes />
      {renderBtn()}
      {isMyRecipe === "recipe" ? <Recipes /> : <Favorite />}
    </ContainerGlobal>
  );
};

export default MyRecipes;
