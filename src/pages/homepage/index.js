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
  const { apiUrl } = AuthContext();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    axios.get(`${apiUrl}/user/fetchAllUser.php`).then((res) => {
      console.log("all: ", res.data);
      setAllUser(res.data.dataUser);
      setAllRecipe(res.data.dataRecipe);
    });
  }, []);

  document.title = "Tam Rai Dee - Home";
  return (
    <ContainerGlobal>
      <LandingHero
        allUser={allUser}
        allRecipe={allRecipe}
        refRecipe={refRecipe}
      />
      <IngredientMenu />
      <WholeRecipe
        refRecipe={refRecipe}
        allUser={allUser}
        allRecipe={allRecipe}
      />
    </ContainerGlobal>
  );
};

export default Homepage;
