import React from "react";
import styled from "styled-components";

const ContainerMemberIsRecipe = styled.div`
  padding: 40px;
`;

export const Header = styled.h1`
  font-size: 40px;
  color: var(--txt-theme);
`;

const MemberIsRecipe = () => {
  return (
    <ContainerMemberIsRecipe>
      <Header>Member's Recipe</Header>
    </ContainerMemberIsRecipe>
  );
};

export default MemberIsRecipe;
