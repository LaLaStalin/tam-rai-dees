import React, { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion/dist/framer-motion";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BiRightArrow } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import {
  materialMeat,
  materialSea,
  materialVegetable,
  materialFruit,
  materialEggMilkButterCheese,
  materialFrozen,
  materialMeatTransform,
  materialDry,
  CookingTechniques,
} from "../../../util/staticData";

const ModalBox = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 800px;
  transform: translate(-50%, -50%);
  width: fit-content;
  margin: 0 auto;
  background: #efefef;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  .close-icon {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    font-size: 28px;
  }
`;

const RecipeTag = styled.div`
  color: var(--txt-theme);

  .header {
    color: var(--txt-theme);
    font-size: 25px;
  }

  .sub-header {
    padding: 10px 0 10px 10px;
    font-size: var(--txt-primary);
  }

  .title {
    font-size: 28px;
  }

  .type-ingredient {
    font-size: var(--txt-header);
  }

  .ingredient {
    font-size: var(--txt-sub);
  }
`;

const ContentRecipeWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 210px auto;
  height: 300px;
  position: relative;
  overflow: scroll;

  @media screen and (max-width: 500px) {
    grid-template-columns: ${(props) =>
      props.isSidebarOpen ? "210px auto" : "0 auto"};
  }

  .sidebar-menu {
    display: flex;
    align-items: left;
    flex-direction: column;
    max-width: fit-content;
    justify-content: left;
    transition: all 0.4s ease-in-out;

    @media screen and (max-width: 500px) {
      transform: ${(props) =>
        props.isSidebarOpen ? "translateX(0)" : "translateX(-100%)"};
    }
  }

  .arrow-open-sidebar {
    display: none;

    @media screen and (max-width: 500px) {
      display: block;
      cursor: pointer;
      position: fixed;
      left: 40px;
      top: 60%;
      font-size: 20px;
      z-index: 99;
      transition: all 0.4s ease-in-out;
      transform: ${(props) => (props.isSidebarOpen ? "rotateY(180deg)" : null)};
    }
  }

  .wrapper-checkbox {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    height: fit-content;
    grid-gap: 20px;
    margin-top: 50px;

    .checkbox-name-wrap {
      display: flex;
      align-items: center;
    }
  }
`;

const RecipeModalTag = ({ open, handleModalTag, listTag, handleListTag }) => {
  const [listIngredientCheckbox, setListIngredientCheckbox] =
    useState(materialMeat);
  const [tileValue, setTitleValue] = useState(0);
  const [ingredientValueMenu, setIngredientValueMenu] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderSidebarTap = () => {
    const handleChangeTitle = (event, newValue) => {
      setTitleValue(newValue);
      if (newValue === 1) setListIngredientCheckbox(CookingTechniques);
      if (newValue === 0) setListIngredientCheckbox(materialMeat);
    };

    const handleChangeIngreMenu = (event, newValue) => {
      if (newValue === 0) setListIngredientCheckbox(materialMeat);
      if (newValue === 1) setListIngredientCheckbox(materialSea);
      if (newValue === 2) setListIngredientCheckbox(materialVegetable);
      if (newValue === 3) setListIngredientCheckbox(materialFruit);
      if (newValue === 4)
        setListIngredientCheckbox(materialEggMilkButterCheese);
      if (newValue === 5) setListIngredientCheckbox(materialFrozen);
      if (newValue === 6) setListIngredientCheckbox(materialMeatTransform);
      if (newValue === 7) setListIngredientCheckbox(materialDry);
      setIngredientValueMenu(newValue);
    };

    function a11yProps(index) {
      return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
      };
    }
    return (
      <>
        <span
          className="arrow-open-sidebar"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BiRightArrow />
        </span>
        <div className="sidebar-menu">
          <Tabs
            value={tileValue}
            onChange={handleChangeTitle}
            textColor="primary"
            aria-label="icon label tabs example"
          >
            <Tab label="วัตถุดิบ" />
            <Tab label="วิธีการทำอาหาร" />
          </Tabs>
          {tileValue === 0 ? (
            <Tabs
              orientation="vertical"
              variant="scrollable"
              textColor="inherit"
              value={ingredientValueMenu}
              onChange={handleChangeIngreMenu}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              <Tab label="เนื้อสัตว์" {...a11yProps(0)} />
              <Tab label="อาหารทะเล" {...a11yProps(1)} />
              <Tab label="พืชผัก" {...a11yProps(2)} />
              <Tab label="ผลไม้" {...a11yProps(3)} />
              <Tab label="ไข่ นม เนย ชีส" {...a11yProps(4)} />
              <Tab label="ผลิตภัณฑ์แปรรูปแช่เย็น" {...a11yProps(5)} />
              <Tab label="ผลิตภัณฑ์เนื้อสัตว์แปรรูป" {...a11yProps(6)} />
              <Tab label="อาหารแห้ง" {...a11yProps(7)} />
            </Tabs>
          ) : (
            <img
              height="230 px"
              style={{ opjectFit: "cover" }}
              src="./images/bg/modal-bg-2.jpg"
              alt="img-sidebar"
            />
          )}
        </div>
      </>
    );
  };

  return (
    <Modal
      sx={{ margin: "0 var(--pLR)" }}
      open={open}
      onClose={handleModalTag}
      disableAutoFocus
    >
      <ModalBox>
        <span className="close-icon" onClick={handleModalTag}>
          <IoClose />
        </span>
        <RecipeTag>
          <h1 className="header">เลือกแท็กที่เกี่ยวข้องกับเมนูนี้</h1>
          <p className="sub-header">
            เลือกแท็กที่เกี่ยวข้องกับเมนูของตนเองและเลือกตามส่วนผสมสูตรอาหาร
            เช่น ข้าวกะเพราหมูสับไข่ดาว จะมีแท็กเมนูไขไก่, เมนูหมู,
            เมนูใบกะเพรา, เมนูผัด
            เลือกให้ครบแท็กก็จะเป็นประโยชนต่อเพื่อนๆต่อการค้นหาสูตรอาหารนะค่ะ
            ^_^
          </p>
          <ContentRecipeWrapper isSidebarOpen={isSidebarOpen}>
            {/* SIDEBAR */}
            {renderSidebarTap()}
            <div className="wrapper-checkbox">
              {listIngredientCheckbox.map((items) => (
                <div className="checkbox-name-wrap" key={items.id}>
                  <input
                    type="checkbox"
                    style={{ width: "30px" }}
                    name={items.name}
                    onChange={() => handleListTag(items.id, items.name)}
                    checked={listTag.some((ob) =>
                      ob.id === items.id ? true : false
                    )}
                  />
                  <p>{items.name}</p>
                </div>
              ))}
            </div>
          </ContentRecipeWrapper>
        </RecipeTag>
      </ModalBox>
    </Modal>
  );
};

export default RecipeModalTag;
