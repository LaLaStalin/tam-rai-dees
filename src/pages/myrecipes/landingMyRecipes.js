import React from "react";
import styled from "styled-components";

const ContainerLandingMyRecipes = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: var(--w-screen);
  margin: 0 auto;
  background-image: url("/images/bg/bg-home.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 0 var(--pLR);

  .profile-img {
    position: absolute;
    border-radius: 100%;
    height: 110px;
    width: 110px;
    bottom: -50px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);

    & > img {
      border-radius: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const UsernameWrapper = styled.section`
  background-color: var(--bg-theme);
  max-width: var(--w-screen);
  margin: 0 auto;
  margin-top: -20px;
  height: 180px;
  z-index: 99;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 0 var(--pLR);

  .username-recipe {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    & > h3 {
      color: var(--txt-theme);
      text-shadow: 0 5px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

const LandingMyRecipes = () => {
  return (
    <>
      <ContainerLandingMyRecipes>
        <div className="profile-img">
          <img src="/images/profile/lala.png" />
        </div>
      </ContainerLandingMyRecipes>
      <UsernameWrapper>
        <div className="username-recipe">
          <h3>Nattida Jang</h3>
        </div>
      </UsernameWrapper>
    </>
  );
};

export default LandingMyRecipes;
