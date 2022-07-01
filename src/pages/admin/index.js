import React, { useState } from "react";
import styled from "styled-components";
import Member from "./member";
import { ButtonSettings } from "../profile/index";
import { FiUser } from "react-icons/fi";
import { GiCook, GiCookingPot } from "react-icons/gi";
import MemberIsRecipe from "./memberIsRecipe";
import AdminIsRecipe from "./adminIsRecipe";

const ContainerAdminPage = styled.div`
  height: 140vh;
  display: flex;

  .sideber-admin-page {
    width: 400px;
    height: 100%;
    background: var(--bg-theme);
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;

    .sideber-btn {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 60px 20px;
      gap: 30px;
    }
  }

  .wrrapper-admin-page {
    height: 100%;
    background-image: url("/images/bg/bg-theme-w.png");
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const mapBtnAdmin = [
  {
    keyword: "member",
    nameDisplay: "Member",
    subDisplay: "ข้อมูลสมาชิก",
    iconDisplay: <FiUser className="icon" />,
  },
  {
    keyword: "memberIsRecipe",
    nameDisplay: "Member's Recipe",
    subDisplay: "สูตรอาหารของสมาชิก",
    iconDisplay: <GiCookingPot className="icon" />,
  },
  {
    keyword: "adminIsRecipe",
    nameDisplay: "Admin's Recipe",
    subDisplay: "สูตรอาหารของofficial",
    iconDisplay: <GiCook className="icon" />,
  },
];

const AdminPage = () => {
  document.title = "Tam Rai Dee - Admin";
  const [isBtnAdmin, setIsBtnAdmin] = useState("member");

  return (
    <ContainerAdminPage>
      <div className="sideber-admin-page">
        <span className="sideber-btn">
          {mapBtnAdmin.map((btn) => (
            <ButtonSettings
              key={btn.keyword}
              bgIcon="var(--main-color)"
              bg="linear-gradient(180deg, rgba(245, 56, 3, 0.1) 0%, rgba(245, 208, 32, 0.1) 100%)"
              borderColor="2px solid orange"
              onClick={() => setIsBtnAdmin(btn.keyword)}
              active={isBtnAdmin}
              keyword={btn.keyword}
            >
              <span className="box-icon">{btn.iconDisplay}</span>
              <span className="box-icon-name">
                <h4>{btn.nameDisplay}</h4> <p>{btn.subDisplay}</p>
              </span>
            </ButtonSettings>
          ))}
        </span>
      </div>
      <div className="wrrapper-admin-page">
        {isBtnAdmin === "member" && <Member />}
        {isBtnAdmin === "memberIsRecipe" && <MemberIsRecipe />}
        {isBtnAdmin === "adminIsRecipe" && <AdminIsRecipe />}
      </div>
    </ContainerAdminPage>
  );
};

export default AdminPage;
