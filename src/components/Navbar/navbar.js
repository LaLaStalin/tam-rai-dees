import React, { useState, useEffect } from "react";
import "./navbar.css";
import { AiOutlineUser } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import Divider from "../Divider/divider";
import { FaHamburger } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SearchInput from "../SearchInput/searchInput";
import { AuthContext } from "../../util/context";

const logoAnimate = keyframes`
    from {transform: translateY(0px);}
    to {transform: translateY(-3px);}
`;

const NavbarContainer = styled.div`
  /* background: var(--bg-nav-theme); */
  background: transparent;
  height: 80px;
  position: relative;
  z-index: 99;
  box-shadow: ${({ path }) =>
    path === "/login" || path === "/register"
      ? null
      : "0px 2px 10px rgba(0, 0, 0, 0.3)"};

  .text-logo {
    color: var(--txt-theme);
    font-weight: 600;
  }

  .logo-icon {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));

    animation: ${logoAnimate} 0.8s infinite alternate;
  }
`;

const AuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ path }) =>
    path === "/login" || path === "/register" ? "30px" : "10px"};

  @media screen and (max-width: 940px) {
    display: none;
  }
`;

const MenuItems = styled.p`
  font-size: var(--txt-primary);
  font-weight: 600;
  background: ${({ path, keyword }) =>
    path === keyword ? "var(--main-color)" : "var(--txt-theme)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const Navbar = (props) => {
  const { user } = AuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const themeHandle = () => {
    document.body.classList.add("dark");
  };

  const renderAlreayLogin = () => {
    return (
      <>
        {/*Already login*/}
        <AuthWrapper path={location.pathname}>
          {location.pathname !== "/" && (
            <SearchInput
              radius="10px"
              w="350px"
              shadow="0px 2px 5px rgba(0, 0, 0, 0.2)"
            />
          )}

          <MenuItems
            path={location.pathname}
            keyword="/recipe/create"
            onClick={() => navigate("/recipe/create")}
          >
            + เขียนสูตรอาหาร
          </MenuItems>

          <Divider vertical="30px" color="var(--divider-theme)" />
          <Link to="/myrecipes">
            <MenuItems
              path={location.pathname}
              keyword="/myrecipes"
              style={{ fontWeight: 550 }}
            >
              My Recipes
            </MenuItems>
          </Link>
          <Link to="/profile">
            <span className="profile-button">
              <AiOutlineUser className="profile-icon" />
            </span>
          </Link>

          <FiHelpCircle className="help-icon" />
        </AuthWrapper>
      </>
    );
  };

  const renderNotLoginYet = () => {
    return (
      <>
        {/*do not login yet*/}
        {location.pathname === "/login" || location.pathname === "/register" ? (
          <AuthWrapper path={location.pathname}>
            <Link to="/login">
              <MenuItems path={location.pathname} keyword="/login">
                Login
              </MenuItems>
            </Link>
            <Link to="/register">
              <MenuItems path={location.pathname} keyword="/register">
                Register
              </MenuItems>
            </Link>

            <FiHelpCircle className="help-icon" />
          </AuthWrapper>
        ) : (
          <AuthWrapper>
            <Divider vertical="30px" color="var(--divider-theme)" />
            <Link to="/login" className="auth-wrapper ">
              <MenuItems keyword="">Login</MenuItems>
              <span className="profile-button">
                <AiOutlineUser className="profile-icon" />
              </span>
            </Link>
            <FiHelpCircle className="help-icon" />
          </AuthWrapper>
        )}
      </>
    );
  };

  return (
    <>
      <NavbarContainer path={location.pathname}>
        <div className="navbar-wrapper">
          <div className="logo-navbar">
            <Link to="/">
              <img
                src="/logo/burger.png"
                width={45}
                height={45}
                className="logo-icon"
              />
              {/* <video
                autoPlay
                loop
                src="/videos/logo-animation1.mp4"
                type="video/mp4"
                width={80}
              /> */}
            </Link>
            <Link to="/">
              <h3 className="text-logo">Tam Rai Dee</h3>
            </Link>
          </div>

          {user.email ? (
            <>
              {/*Already login*/}
              {renderAlreayLogin()}
            </>
          ) : (
            <>
              {/*do not login yet*/}
              {renderNotLoginYet()}
            </>
          )}

          <span
            className="nav-mobile"
            onClick={() => props.isSetMobile(!props.getMobile)}
          >
            <FaHamburger />
          </span>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
