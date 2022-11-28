import React, { useEffect, useRef, useState } from "react";
import LandingHero from "./landingHero";
import IngredientMenu from "./ingredientMenu";
import WholeRecipe from "./wholeRecipe";
import { ContainerGlobal } from "../../components/global.styled";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../util/context";

const Homepage = () => {
  const location = useLocation();
  const refRecipe = useRef(null);
  const [allUser, setAllUser] = useState([]);
  const [allRecipe, setAllRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState([]);
  const { apiUrl } = AuthContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    axios.get(`${apiUrl}/user/fetchAllUser.php`).then((res) => {
      setAllUser(res.data.dataUser);

      const addLikeIntoRecipe = [];

      //add Like to recipe object
      //Array be like [recipeAdded: [...], likeCount: 0]

      res.data.dataRecipe.map((items) => {
        for (let i = 0; i < res.data.like.length; i++) {
          if (items.recipe_id === res.data.like[i].recipe_id_by_like) {
            addLikeIntoRecipe.push({
              recipeAdded: items,
              likeCount: res.data.like[i].count_like,
            });

            break;
          }
        }
      });

      //add Tags into recipe
      //Array be like [recipeAdded: [...], likeCount: 0, tags:, [...]]

      const addTagsArrayToRecipe = [];

      addLikeIntoRecipe.map((items) => {
        const tagsMock = [];

        res.data.dataTags.map((tags) => {
          if (items.recipeAdded.recipe_id === tags.recipe_id) {
            tagsMock.push(tags.tag_id);
          }
        });

        addTagsArrayToRecipe.push({
          recipeAdded: items.recipeAdded,
          likeCount: items.likeCount,
          tags: tagsMock,
        });
      });

      setAllRecipe(addTagsArrayToRecipe);
      setShowRecipe(addTagsArrayToRecipe);
    });
  }, []);

  document.title = "Kin Rai Dee - Home";

  return (
    <ContainerGlobal>
      <LandingHero
        allUser={allUser}
        allRecipe={allRecipe}
        showRecipe={showRecipe}
        setShowRecipe={setShowRecipe}
        refRecipe={refRecipe}
      />
      <IngredientMenu allRecipe={allRecipe} setShowRecipe={setShowRecipe} />
      <WholeRecipe
        allUser={allUser}
        showRecipe={showRecipe}
        refRecipe={refRecipe}
      />
    </ContainerGlobal>
  );
};

export default Homepage;
