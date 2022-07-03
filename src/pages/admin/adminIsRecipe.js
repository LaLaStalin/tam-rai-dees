import React from "react";
import styled from "styled-components";

const ContainerAdminIsRecipe = styled.div`
  padding: 40px;
`;

export const Header = styled.h1`
  font-size: 40px;
  color: var(--txt-theme);
`;

const AdminIsRecipe = () => {
  return (
    <ContainerAdminIsRecipe>
      <Header>Admin's Recipe</Header>
    </ContainerAdminIsRecipe>
  );
};

export default AdminIsRecipe;
