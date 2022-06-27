import React from "react";
import styled from "styled-components";
import { RecipeInfoContainer } from "./recipeIngredient";

const listTag = [
  {
    id: 1,
    step: "ไข่ไก่",
  },
  {
    id: 2,
    step: "หมู",
  },
  {
    id: 3,
    step: "พริก",
  },
  {
    id: 4,
    step: "ใบกะเพรา",
  },
  {
    id: 5,
    step: "กระเทียม",
  },
  {
    id: 6,
    step: "ผัด",
  },
];

const WrrapperRecipeTag = styled.div`
  display: flex;
  flex-direction: column;
  & > h1 {
    font-size: 22px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: var(--main-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 50px));
    justify-content: left;
    gap: 20px;
    text-align: center;
    margin-top: 20px;
    padding-left: 20px;

    @media screen and (max-width: 500px) {
      justify-content: center;
    }

    .tag-box {
      background: lightgray;
      padding: 10px 20px;
      color: var(--txt-theme);
      font-size: var(--txt-sub);
      border-radius: 8px;
    }
  }
`;

const RecipeTag = () => {
  return (
    <RecipeInfoContainer>
      <WrrapperRecipeTag>
        <h1>แท็ก</h1>
        <div className="wrapper">
          {listTag.map((items) => (
            <span className="tag-box" key={items.id}>
              <p>{items.step}</p>
            </span>
          ))}
        </div>
      </WrrapperRecipeTag>
    </RecipeInfoContainer>
  );
};

export default RecipeTag;
