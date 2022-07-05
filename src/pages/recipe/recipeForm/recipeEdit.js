import React from "react";
import RecipeForm from "./recipeForm";

const RecipeEdit = (props) => {
  document.title = "Tam Rai Dee - Edit";
  return (
    <>
      <RecipeForm mode="edit" />
    </>
  );
};

export default RecipeEdit;
