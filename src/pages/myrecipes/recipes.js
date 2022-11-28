import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import CardMyRecipe from "../../components/Card/CardMyRecipe";
import Pagination from "@mui/material/Pagination";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../.././util/context";

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

const Recipes = () => {
  const navigate = useNavigate();
  const { user, apiUrl } = AuthContext();
  const [listMyRecipes, setListMyRecipes] = useState([]);

  const [myRecipePerPage] = useState(8);

  const [lengthOfMyRecipe, setLengthOfMyRecipe] = useState(1);
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

  useEffect(() => {
    console.log("apiurl:", apiUrl);
    console.log("apiurl:", apiUrl);

    axios
      .post(`${apiUrl}/recipe/fetchAllMyRecipe.php`, {
        id: parseInt(user.user_id),
      })
      .then((res) => {
        console.log("11", res.data);
        if (res.data.success) {
          setListMyRecipes(res.data.dataRecipe);
          setLengthOfMyRecipe(res.data.dataRecipe.length / myRecipePerPage);
        }
      });
  }, []);

  return (
    <>
      <CardContainerMyRecipes>
        {listMyRecipes.length > 0 ? (
          listMyRecipes
            .slice(indexFirstMyRecipe, indexLastMyRecipe)
            .map((items) => (
              <CardMyRecipe
                onClicked={() =>
                  navigate(`/recipe/${items.recipe_id}`, { state: items })
                }
                key={items.recipe_id}
                keyword={items.recipe_id}
                recipeName={items.recipe_name}
                recipeDescription={items.recipe_description}
                src={`${apiUrl}/imgs/recipe/${items.recipe_img}`}
              />
            ))
        ) : (
          <Link to="/recipe/create">
            <p
              style={{
                color: "gray",
                opacity: 0.5,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              มาสร้างสูตรอาหารกันเถอะ!
            </p>
          </Link>
        )}
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
