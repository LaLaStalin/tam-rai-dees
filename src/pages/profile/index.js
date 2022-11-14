import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ContainerGlobal } from "../../components/global.styled";
import Account from "./account";
import { useNavigate } from "react-router-dom";
import Password from "./password";
import { FiUser, FiLogOut } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

const ContainerProfile = styled.div`
  max-width: var(--w-screen);
  margin: 0 auto;
  display: flex;
  padding: 0 var(--pLR);
  padding-top: 30px;
  gap: 20px;

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }

  .wrapper-setting-menu {
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 20px;

    @media screen and (max-width: 650px) {
      text-align: center;
      width: 100%;
    }

    & > h2 {
      text-indent: 12px;
      font-weight: 600;
      color: var(--txt-theme);
    }

    .sidebar-profile {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .button-settings {
        display: flex;
        align-items: center;
      }
    }
  }

  .infomation-profile {
    width: 100%;
    padding: 0 10px;
    height: fit-content;

    & > h2 {
      color: var(--txt-theme);
    }
  }
`;

export const ButtonSettings = styled.button`
  display: flex;
  padding: ${(props) => (props.p ? props.p : "10px 20px")};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  align-items: center;
  justify-content: ${(props) => (props.justify ? props.justify : "left")};
  border-radius: 10px;
  gap: 15px;
  /* color: gray; */
  cursor: pointer;

  color: ${(props) =>
    props.active === props.keyword ? "var(--txt-theme)" : "gray"};
  background: ${(props) =>
    props.active === props.keyword ? props.bg : "transparent"};
  border: ${(props) =>
    props.active === props.keyword ? props.borderColor : "2px solid #edeef2"};

  &:hover {
    /* background: ${(props) => props.bg}; */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    /* border: ${(props) => props.borderColor}; */
    color: var(--txt-theme);

    .box-icon {
      /* background: ${(props) => props.bgIcon}; */
    }
    .icon {
      color: var(--txt-theme);
    }
  }

  .box-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 12px;
    background: ${(props) =>
      props.active === props.keyword ? props.bgIcon : "#edeef2"};
    color: ${(props) => (props.active === props.keyword ? "#fff" : "")};

    .icon {
      font-size: 22px;
    }
  }

  .box-icon-name {
    display: flex;
    gap: 2px;
    flex-direction: column;
    text-align: left;
    line-height: 18px;

    & > h4 {
      font-size: var(--txt-primary);
    }

    & > p {
      font-size: 11px;
    }
  }
`;

const Profile = () => {
  const navigate = useNavigate();
  const [isAccount, setIsAccount] = useState("account");
  const [hei] = useState("HELOOO");
  document.title = "Kin Rai Dee - Profile";

  const mapBtnSetting = [
    {
      keyword: "account",
      nameDisplay: "Account",
      subDisplay: "Personal information",
      iconDisplay: <FiUser className="icon" />,
    },
    {
      keyword: "password",
      nameDisplay: "Password",
      subDisplay: "Email, Password",
      iconDisplay: <RiLockPasswordLine className="icon" />,
    },
  ];

  useEffect(() => {
    const storageValue = localStorage.getItem("profile");
    if (storageValue) setIsAccount(JSON.parse(storageValue));
  }, []);

  const renderBtnSetting = () => {
    return (
      <>
        {mapBtnSetting.map((btn) => (
          <ButtonSettings
            key={btn.keyword}
            bgIcon="var(--main-color)"
            bg="linear-gradient(180deg, rgba(245, 56, 3, 0.1) 0%, rgba(245, 208, 32, 0.1) 100%)"
            borderColor="2px solid orange"
            onClick={() => {
              setIsAccount(btn.keyword);
              localStorage.setItem("profile", JSON.stringify(btn.keyword));
            }}
            active={isAccount}
            keyword={btn.keyword}
          >
            <span className="box-icon">{btn.iconDisplay}</span>
            <span className="box-icon-name">
              <h4>{btn.nameDisplay}</h4> <p>{btn.subDisplay}</p>
            </span>
          </ButtonSettings>
        ))}

        {/*Logout Button*/}
        <ButtonSettings
          bgIcon="linear-gradient(to bottom, #fe2e33, #ff3c3f, #ff474a, #ff5255, #ff5c60)"
          bg="linear-gradient(180deg, #FFEAEA 0%, #FFE1E2 100%)"
          borderColor="2px solid orange"
          onClick={() => {
            navigate("/", { state: hei });
            localStorage.removeItem("user_setup");
            window.location.reload();
          }}
          keyword="logout"
        >
          <span className="box-icon">
            <FiLogOut className="icon" />
          </span>
          <span className="box-icon-name">
            <h4>Log out</h4>
          </span>
        </ButtonSettings>
      </>
    );
  };

  return (
    <ContainerGlobal>
      <ContainerProfile>
        <div className="wrapper-setting-menu">
          <h2>Settings</h2>
          <div className="sidebar-profile">{renderBtnSetting()}</div>
        </div>
        <div className="infomation-profile">
          {isAccount === "account" ? (
            <>
              <h2>Account</h2>
              <Account />
            </>
          ) : (
            <>
              <h2>Password</h2>
              <Password />
            </>
          )}
        </div>
      </ContainerProfile>
    </ContainerGlobal>
  );
};

export default Profile;
