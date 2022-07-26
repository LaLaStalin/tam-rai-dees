import { AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";
import React from "react";
import { VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../util/context";

const Menu = styled.div`
  display: none;

  @media only screen and (max-width: 940px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    transition: all 0.4s ease-in-out;
    transform: ${({ isShowMobile }) =>
      isShowMobile ? "translateY(0)" : "translateY(-100%)"};
    z-index: 9999;
  }
  .close-icon {
    position: absolute;
    right: 30px;
    width: fit-content;
    top: 30px;
    font-size: 40px;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #ff3e43;
    }
  }

  .wrapper-mobile {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    & > span {
      margin-bottom: 10px;
    }

    .menu-item {
      font-size: var(--txt-header);
      width: 100%;
      padding: 20px 0;
      text-align: center;
      cursor: pointer;
      color: #dedede;

      &:hover {
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.1) 100%
          ),
          linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
      }

      & > h5:hover {
        background: var(--main-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }
`;

const Sidebar = (props) => {
  const { user } = AuthContext();
  const location = useLocation();

  return (
    <>
      <Menu isShowMobile={props.getMobile}>
        <span
          className="close-icon"
          onClick={() => {
            props.isSetMobile(!props.getMobile);
          }}
        >
          <VscClose />
        </span>
        {/*Already login*/}
        <div className="wrapper-mobile">
          {location.pathname === "/" && !user ? (
            <span className="profile-button">
              <AiOutlineUser className="profile-icon" />
            </span>
          ) : null}

          {user && user.user_email ? (
            <>
              <Link
                to="/profile"
                className="menu-item"
                onClick={() => {
                  props.isSetMobile(!props.getMobile);
                }}
              >
                <h5>Profile</h5>
              </Link>
              <Link
                to="/myrecipes"
                className="menu-item"
                onClick={() => {
                  props.isSetMobile(!props.getMobile);
                }}
              >
                <h5>My Recipe</h5>
              </Link>
              <Link
                to="/recipe/create"
                className="menu-item"
                onClick={() => {
                  props.isSetMobile(!props.getMobile);
                }}
              >
                <h5>เขียนสูตรอาหาร</h5>
              </Link>
              {user.user_urole === "A" && (
                <Link
                  to="/admin"
                  className="menu-item"
                  onClick={() => {
                    props.isSetMobile(!props.getMobile);
                  }}
                >
                  <h5>Admin</h5>
                </Link>
              )}
            </>
          ) : (
            <>
              {/*Menu items not login*/}
              <Link
                to="/login"
                className="menu-item"
                onClick={() => {
                  props.isSetMobile(!props.getMobile);
                }}
              >
                <h5>Login</h5>
              </Link>
              <Link
                to="/register"
                className="menu-item"
                onClick={() => {
                  props.isSetMobile(!props.getMobile);
                }}
              >
                <h5>Register</h5>
              </Link>
            </>
          )}

          <a href="/" target="_blank" className="menu-item">
            <h5>help</h5>
          </a>
        </div>
      </Menu>
    </>
  );
};

export default Sidebar;
