import React, { useState, useCallback, useEffect } from "react";
import CardMyRecipe from "../../components/Card/CardMyRecipe";
import { CardContainerMyRecipes } from "./recipes";
import Pagination from "@mui/material/Pagination";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../.././util/context";

const Favorite = (props) => {
  const { user, apiUrl } = AuthContext();
  const navigate = useNavigate();
  const [listFavorite, setListFavorite] = useState([]);

  const [favoritePerPage] = useState(8);
  const [lengthOfFavorite, setLengthOfFavorite] = useState(1);
  const [indexLastFavorite, setIndexLastFavorite] = useState(
    1 * favoritePerPage
  );
  const [indexFirstFavorite, setIndexFirstFavorite] = useState(
    indexLastFavorite - favoritePerPage
  );

  useEffect(() => {
    axios
      .post(`${apiUrl}/recipe/fetchAllFavorite.php`, {
        id: parseInt(user.user_id),
      })
      .then((res) => {
        console.log("favorite", res.data);
        if (res.data.success) {
          setListFavorite(res.data.dataFavorite);
          setLengthOfFavorite(res.data.dataFavorite.length / favoritePerPage);
        }
      });
  }, []);

  const handlePagination = useCallback(
    (event, page) => {
      const indexOfLast = parseInt(page) * favoritePerPage; //10
      const indexOfFirst = indexOfLast - favoritePerPage; // 10 - 10 = 0
      setIndexLastFavorite(() => indexOfLast);
      setIndexFirstFavorite(() => indexOfFirst);
    },
    [indexFirstFavorite, indexLastFavorite]
  );

  return (
    <>
      <CardContainerMyRecipes>
        {listFavorite.length > 0 ? (
          listFavorite
            .slice(indexFirstFavorite, indexLastFavorite)
            .map((items) => (
              <CardMyRecipe
                key={items.recipe_id}
                keyword={items.recipe_id}
                recipeName={items.recipe_name}
                recipeDescription={items.recipe_description}
                src={`${apiUrl}/imgs/recipe/${items.recipe_img}`}
                onClicked={() =>
                  navigate(`/recipe/${items.recipe_id}`, { state: items })
                }
              />
            ))
        ) : (
          <Link to="/">
            <p
              style={{
                color: "gray",
                opacity: 0.5,
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              มาติดตามสูตรอาหารกันเถอะ!
            </p>
          </Link>
        )}
      </CardContainerMyRecipes>
      <Pagination
        count={Math.ceil(lengthOfFavorite)}
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

export default Favorite;
