import React, { useState, useCallback } from "react";
import styled from "styled-components";
import CardMyRecipe from "../../components/Card/CardMyRecipe";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

export const CardContainerMyRecipes = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 48%));
  justify-content: center;
  grid-gap: 32px;
  max-width: var(--w-screen);
  margin: 0 auto;
  padding: 0 var(--pLR);

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 100%));
  }
`;

const listMock = [
  {
    id: 1,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 2,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 3,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 4,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 5,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 6,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 7,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 8,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 9,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 10,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
  {
    id: 11,
    name: "ข้าวกะเพราหมูสับไข่ดาว",
    description:
      "ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ ....",
    src: "./images/recipes/myrecipe.jpg",
  },
];

const Recipes = () => {
  const navigate = useNavigate();
  const [listMyRecipes, setListMyRecipes] = useState(listMock);

  const [myRecipePerPage, setMyRecipePerpage] = useState(8);

  const [lengthOfMyRecipe, setLengthOfMyRecipe] = useState(
    listMyRecipes.length / myRecipePerPage
  );
  const [indexLastMyRecipe, setIndexLastMyRecipe] = useState(
    1 * myRecipePerPage
  );
  const [indexFirstMyRecipe, setIndexFirstMyRecipe] = useState(
    indexLastMyRecipe - myRecipePerPage
  );

  const handlePagination = useCallback(
    (event, page) => {
      const indexOfLast = parseInt(page) * myRecipePerPage; //10
      const indexOfFirst = indexOfLast - myRecipePerPage; // 10 - 10 = 0
      setIndexLastMyRecipe(() => indexOfLast);
      setIndexFirstMyRecipe(() => indexOfFirst);
    },
    [indexFirstMyRecipe, indexLastMyRecipe]
  );

  return (
    <>
      <CardContainerMyRecipes>
        {listMyRecipes
          .slice(indexFirstMyRecipe, indexLastMyRecipe)
          .map((items) => (
            <CardMyRecipe
              onClicked={() => navigate("/recipe/1")}
              key={items.id}
              keyword={items.id}
              recipeName={items.name}
              recipeDescription={items.description}
              src={items.src}
            />
          ))}
      </CardContainerMyRecipes>
      <Pagination
        count={Math.ceil(lengthOfMyRecipe)}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={handlePagination}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      />
    </>
  );
};

export default Recipes;
