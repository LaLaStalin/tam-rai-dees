import React, { useState } from "react";
import styled from "styled-components";
import Member from "./member";
import MemberEdit from "./memberEdit";
import { ButtonSettings } from "../profile/index";
import { FiUser } from "react-icons/fi";
import { GiCook, GiCookingPot } from "react-icons/gi";
import MemberIsRecipe from "./memberIsRecipe";
import AdminIsRecipe from "./adminIsRecipe";

const ContainerAdminPage = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  padding-right: 30px;
  background-image: url("./images/bg/bg-theme-w.png");
  grid-gap: 30px;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0 var(--pLR);
    gap: 10px;
  }

  .sideber-admin-page {
    width: 100%;
    height: 100%;
    background: var(--bg-theme);
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
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
    width: 100%;
    height: fit-content;
    border-radius: 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
    background: var(--bg-theme);
    margin: 40px 0;
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
  document.title = "Kin Rai Dee - Admin";
  const [isBtnAdmin, setIsBtnAdmin] = useState("member");
  const [memberSelected, setMemberSelected] = useState({});

  console.log("memberSelected", memberSelected);
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
        {isBtnAdmin === "member" && (
          <Member
            setIsBtnAdmin={setIsBtnAdmin}
            setMemberSelected={setMemberSelected}
          />
        )}
        {isBtnAdmin === "member-edit" && (
          <MemberEdit memberSelected={memberSelected} />
        )}
        {isBtnAdmin === "memberIsRecipe" && <MemberIsRecipe />}
        {isBtnAdmin === "adminIsRecipe" && <AdminIsRecipe />}
      </div>
    </ContainerAdminPage>
  );
};

export default AdminPage;
