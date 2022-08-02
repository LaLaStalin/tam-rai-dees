import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { CardRecipe } from "../../components/Card";
import Pagination from "@mui/material/Pagination";
import { useNavigate } from "react-router-dom";

const ContainerWholeRecipe = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 var(--pLR);
  color: var(--txt-theme);

  .header-whole-recipe {
    margin-bottom: 20px;
    font-size: var(--txt-sub);

    & > span {
      display: flex;
      align-items: center;
      gap: 10px;

      .icon-food {
        font-size: 48px;
      }
    }

    & > p {
      color: gray;
    }
  }
`;

const WholeRecipe = (props) => {
  const navigate = useNavigate();

  const [listRecipe, setListRecipe] = useState([]);
  const [ingredientPerPage] = useState(8);

  const [lengthOfIngredeint, setLengthOfIngredient] = useState(
    listRecipe.length / ingredientPerPage
  );
  const [indexLastIngredient, setIndexLastIngredient] = useState(
    1 * ingredientPerPage
  );
  const [indexFirstIngredient, setIndexFirstIngredient] = useState(
    indexLastIngredient - ingredientPerPage
  );

  const handlePagination = useCallback(
    (event, page) => {
      const indexOfLastIngre = parseInt(page) * ingredientPerPage; //10
      const indexOfFirstIngre = indexOfLastIngre - ingredientPerPage; // 10 - 10 = 0
      setIndexLastIngredient(() => indexOfLastIngre);
      setIndexFirstIngredient(() => indexOfFirstIngre);
    },
    [indexFirstIngredient, indexLastIngredient]
  );

  useEffect(() => {
    if (props.showRecipe) {
      setListRecipe(props.showRecipe);
      setLengthOfIngredient(props.showRecipe.length / ingredientPerPage);
    }
  }, [props.showRecipe]);

  return (
    <ContainerWholeRecipe ref={props.refRecipe}>
      <div className="header-whole-recipe">
        <span>
          <Icon icon="emojione:pot-of-food" className="icon-food" />
          <h2>เมนูที่คุณสามารถทำได้ !!</h2>
        </span>

        <p>เมนูอาหารที่เกี่ยวข้องกับวัตถุดิบที่คุณเลือกหรือที่คุณค้นหา. . .</p>
      </div>
      {listRecipe.length > 0
        ? listRecipe
            .slice(indexFirstIngredient, indexLastIngredient)
            .map((recipe) => (
              <CardRecipe
                key={recipe.recipeAdded.recipe_id}
                id={recipe.recipeAdded.recipe_id}
                recipe_img={recipe.recipeAdded.recipe_img}
                like={recipe.likeCount}
                nameRecipe={recipe.recipeAdded.recipe_name}
                writter={
                  recipe.recipeAdded.user_firstname +
                  " " +
                  recipe.recipeAdded.user_lastname
                }
                description={recipe.recipeAdded.recipe_description}
                duration_m={recipe.recipeAdded.recipe_duration_m}
                duration_hr={recipe.recipeAdded.recipe_duration_hr}
                onClicked={() =>
                  navigate(`/recipe/${recipe.recipe_id}`, {
                    state: recipe.recipeAdded,
                  })
                }
              />
            ))
        : "ไม่พบสูตรอาหาร"}

      <Pagination
        count={Math.ceil(lengthOfIngredeint)}
        shape="rounded"
        showFirstButton
        showLastButton
        onChange={handlePagination}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      />
    </ContainerWholeRecipe>
  );
};

export default WholeRecipe;
