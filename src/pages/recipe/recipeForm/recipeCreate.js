import React from "react";
import RecipeForm from "./recipeForm";

const RecipeCreate = (props) => {
  document.title = "Kin Rai Dee - Create";

  return <RecipeForm mode="create" />;
};

export default RecipeCreate;
