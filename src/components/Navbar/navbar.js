import React, { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import Divider from "../Divider/divider";
import { FaHamburger } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { AuthContext } from "../../util/context";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const logoAnimate = keyframes`
    from {transform: translateY(0px);}
    to {transform: translateY(-3px);}
`;

const NavbarContainer = styled.div`
  /* background: var(--bg-nav-theme); */
  background: transparent;
  height: 80px;
  position: relative;
  z-index: 888;
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
    margin-right: 15px;
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
  const { user, apiUrl } = AuthContext();
  const location = useLocation();
  const navigate = useNavigate();

  const HandleHelp = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    let poperOpen = Boolean(anchorEl);

    const handleClickHelp = (event) => {
      if (poperOpen) return;
      setAnchorEl(event.currentTarget);
    };

    const handleCloseHelp = () => {
      setAnchorEl(null);
    };

    const styleMenuItem = {
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px",
    };

    return (
      <div onClick={handleClickHelp}>
        <a href="https://nattida-jang.gitbook.io/kinraidee/" target="_blank">
          <Tooltip title="ศูนย์ช่วยเหลือ">
            <span
              style={{
                marginLeft:
                  location.pathname === "/login" ||
                  location.pathname === "/register"
                    ? "0"
                    : "40px",
                height: "24px",
              }}
            >
              <FiHelpCircle className="help-icon" />
            </span>
          </Tooltip>
        </a>

        {/* แถบเมนู help */}
        {/* <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={poperOpen}
          onClose={handleCloseHelp}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <a href="./images/help/NewFeature.pdf" target="_blank">
            <MenuItem style={styleMenuItem} onClick={handleCloseHelp}>
              มีอะไรใหม่
            </MenuItem>
          </a>
          <MenuItem style={styleMenuItem} onClick={handleCloseHelp}>
            สมัครสมาชิก
          </MenuItem>
          <MenuItem style={styleMenuItem} onClick={handleCloseHelp}>
            สร้างสูตรอาหารของตัวเอง
          </MenuItem>
          <MenuItem style={styleMenuItem} onClick={handleCloseHelp}>
            แก้ไขสูตรอาหาร
          </MenuItem>
          <MenuItem style={styleMenuItem} onClick={handleCloseHelp}>
            เปลี่ยนรหัสผ่าน
          </MenuItem>
        </Menu> */}
      </div>
    );
  };

  const renderAlreayLogin = () => {
    return (
      <>
        {/*Already login*/}
        <AuthWrapper path={location.pathname}>
          <Tooltip title="เขียนสูตรอาหารของตัวเองเพื่อแชร์ให้เพื่อนๆ">
            <MenuItems
              path={location.pathname}
              keyword="/recipe/create"
              onClick={() => navigate("/recipe/create")}
            >
              + เขียนสูตรอาหาร
            </MenuItems>
          </Tooltip>

          <Divider vertical="30px" color="var(--divider-theme)" />

          <Link to="/myrecipes">
            <Tooltip title="สูตรอาหารของฉันและสูตรอาหารของเพื่อนๆ">
              <MenuItems
                path={location.pathname}
                keyword="/myrecipes"
                style={{ fontWeight: 550 }}
              >
                My Recipes
              </MenuItems>
            </Tooltip>
          </Link>

          <Divider vertical="30px" color="var(--divider-theme)" />

          {/* Admin */}
          {user.user_urole === "A" && (
            <Link to="/admin">
              <Tooltip title="จัดการข้อมูลต่างๆ">
                <MenuItems
                  path={location.pathname}
                  keyword="/admin"
                  style={{ fontWeight: 550 }}
                >
                  Admin
                </MenuItems>
              </Tooltip>
            </Link>
          )}

          {/* Profile */}
          <Link to="/profile">
            <Tooltip title="My Profile" followCursor>
              <span className="profile-button">
                <Avatar
                  className="Avatar"
                  style={{ borderRadius: "10px" }}
                  src={
                    user.user_img
                      ? `${apiUrl}/imgs/profile/${user.user_img}`
                      : null
                  }
                >
                  {!user.user_img && user.user_firstname[0]}
                </Avatar>
              </span>
            </Tooltip>
          </Link>

          {/* Help */}

          {HandleHelp()}
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
              <Tooltip title="เข้าสู่ระบบ">
                <MenuItems path={location.pathname} keyword="/login">
                  Login
                </MenuItems>
              </Tooltip>
            </Link>

            <Link to="/register">
              <Tooltip title="สมัครสมาชิก">
                <MenuItems path={location.pathname} keyword="/register">
                  Register
                </MenuItems>
              </Tooltip>
            </Link>

            {/* Help */}
            {HandleHelp()}
          </AuthWrapper>
        ) : (
          <AuthWrapper>
            <Divider vertical="30px" color="var(--divider-theme)" />

            <Link
              to="/login"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Tooltip title="เข้าสู่ระบบ">
                <MenuItems keyword="/login">Login</MenuItems>
              </Tooltip>

              <Tooltip title="Profile" followCursor>
                <span className="profile-button">
                  <Avatar className="Avatar" style={{ borderRadius: "10px" }} />
                </span>
              </Tooltip>
            </Link>

            {/* Help */}
            {HandleHelp()}
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
                src="./logo/burger.png"
                width={45}
                height={45}
                className="logo-icon"
              />
            </Link>

            <Link to="/">
              <Tooltip title="Home" followCursor>
                <h3 className="text-logo">Kin Rai Dee</h3>
              </Tooltip>
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
            <Tooltip title="เพิ่มเติม">
              <span style={{ height: "20px" }}>
                <FaHamburger />
              </span>
            </Tooltip>
          </span>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
