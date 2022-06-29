import React from "react";
import styled from "styled-components";

const ContainerMember = styled.div`
  width: 1164px;
  height: 920px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  background: var(--bg-theme);
  padding: 40px;
`;

export const Header = styled.h1`
  font-size: 40px;
  color: var(--txt-theme);
`;

const Member = () => {
  return (
    <ContainerMember>
      <Header>Member</Header>
    </ContainerMember>
  );
};

export default Member;
