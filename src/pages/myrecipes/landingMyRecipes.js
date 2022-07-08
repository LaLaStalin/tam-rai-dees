import React from "react";
import styled from "styled-components";
import { AuthContext } from "../../util/context";
import Avatar from "@mui/material/Avatar";

const ContainerLandingMyRecipes = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: var(--w-screen);
  margin: 0 auto;
  background-image: url("./images/bg/bg-home.png");
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    .Avatar {
      border-radius: 100%;
      height: 100%;
      width: 100%;
      object-fit: cover;
      font-size: 40px;
      background: var(--main-color);
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
      margin-top: 25px;
      color: var(--txt-theme);
      text-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

const LandingMyRecipes = () => {
  const { user, apiUrl } = AuthContext();
  return (
    <>
      <ContainerLandingMyRecipes>
        <div className="profile-img">
          <Avatar
            className="Avatar"
            src={`${apiUrl}/imgs/profile/${user.user_img}`}
          >
            {!user.user_img && user.user_firstname[0]}
          </Avatar>
        </div>
      </ContainerLandingMyRecipes>
      <UsernameWrapper>
        <div className="username-recipe">
          <h3>{user.user_firstname + " " + user.user_lastname}</h3>
        </div>
      </UsernameWrapper>
    </>
  );
};

export default LandingMyRecipes;
