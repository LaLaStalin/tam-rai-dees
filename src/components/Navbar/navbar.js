import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import Divider from "../Divider/divider";
import { FaHamburger } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import SearchInput from "../SearchInput/searchInput";
import { AuthContext } from "../../util/context";
import Avatar from "@mui/material/Avatar";

const logoAnimate = keyframes`
    from {transform: translateY(0px);}
    to {transform: translateY(-3px);}
`;

const NavbarContainer = styled.div`
  /* background: var(--bg-nav-theme); */
  background: transparent;
  height: 80px;
  position: relative;
  z-index: 999;
  box-shadow: ${({ path }) =>
    path === "/login" || path === "/register"
      ? null
      : "0px 2px 10px rgba(0, 0, 0, 0.3)"};

  .navbar-wrapper {
    display: flex;
    height: 100%;
    max-width: var(--w-screen);
    margin: 0 auto;
    justify-content: space-between;
    padding: 0 var(--pLR);
  }

  .text-logo {
    color: var(--txt-theme);
    font-weight: 600;
  }

  .logo-icon {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.3));
    font-size: 40px;

    animation: ${logoAnimate} 0.8s infinite alternate;
  }

  .logo-navbar {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 25px;
    font-weight: 700;
  }

  .nav-mobile {
    display: none;

    @media only screen and (max-width: 940px) {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 22px;
    }
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

  .profile-button {
    border-radius: 14px;
    /* box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3); */
    cursor: pointer;
    padding: 1.5px 1.5px 1.5px 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid
      ${(props) => (props.path === "/profile" ? "transparent" : "#dbdbdb")};

    background: ${(props) =>
      props.path === "/profile"
        ? "linear-gradient(180deg, #fff 0%, #fff 100%) padding-box,var(--main-color) border-box"
        : null};
  }

  .Avatar {
    border-radius: 10px;
    background: var(--main-color);
  }

  .help-icon {
    margin-left: 40px;
    font-size: 24px;
    color: #dbdbdb;
    cursor: pointer;
    border-radius: 15px;

    &:hover {
      border-radius: 15px;
      transition-duration: 0.5s;
      box-shadow: inset 0 0 0 20px #222;
    }
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

          {/* Profile */}
          <Link to="/profile">
            <span className="profile-button">
              <Avatar
                className="Avatar"
                style={{ borderRadius: "10px" }}
                src="/images/profile/lala.png"
              />
            </span>
          </Link>

          <Link to="/admin">
            <FiHelpCircle className="help-icon" keyword="/admin" />
          </Link>
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

            <Link to="/admin">
              <FiHelpCircle className="help-icon" keyword="/admin" />
            </Link>
          </AuthWrapper>
        ) : (
          <AuthWrapper>
            <Divider vertical="30px" color="var(--divider-theme)" />
            <Link
              to="/login"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <MenuItems keyword="">Login</MenuItems>
              <span className="profile-button">
                <Avatar className="Avatar" style={{ borderRadius: "10px" }} />
              </span>
            </Link>
            <Link to="/admin">
              <FiHelpCircle className="help-icon" keyword="/admin" />
            </Link>
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
                alt="burger-icon-logo"
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

          {user && user.user_email ? (
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
