import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const RecipeInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  width: 93%;
  padding: 40px 30px;
  border-radius: 22px;
  position: relative;
  background: var(--bg-theme);

  @media screen and (max-width: 610px) {
    width: 85%;
  }
  & > h1 {
    font-size: 22px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: var(--main-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .amount-recipe {
    position: absolute;
    top: 15px;
    right: 30px;
    font-size: var(--txt-sub);
    font-weight: 600;
    color: gray;
  }

  .list-ingredient-recipe {
    display: flex;
    padding: 10px 0;
    padding-left: 10px;
    justify-content: space-between;
    border-radius: 8px;
    color: var(--txt-theme);
    font-size: var(--txt-sub);
    font-weight: bold;
    list-style: none;
  }
`;

const listIngredient = [
  { id: 1, name: "หมูบด", volume: "1 ถ้วยเล็ก" },
  { id: 2, name: "น้ำมันพืช", volume: "" },
  { id: 3, name: "กระเทียบ", volume: "1 ช้อนโต๊ะ" },
  { id: 4, name: "พริก", volume: "ช้อนโต๊ะ" },
  { id: 5, name: "ใบกระพรา", volume: "1 ถ้วยใหญ่" },
  { id: 6, name: "ไข่ไก่", volume: "1 ฟอง" },
  { id: 7, name: "น้ำปลา", volume: "1 ช้อนโต๊ะ" },
  { id: 8, name: "ซีอิ๊วขาว", volume: "2 ช้อนโต๊ะ" },
];

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const RecipeIngredient = (props) => {
  const [itemAnimate, setItemAnimate] = useState(false);

  const handleAnimate = () => {
    if (window.scrollY >= 250) {
      setItemAnimate(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleAnimate);
    return () => {
      document.removeEventListener("scroll", handleAnimate);
    };
  }, [handleAnimate]);

  return (
    <>
      <RecipeInfoContainer>
        <p className="amount-recipe">สำหรับ 2 ท่าน</p>
        <h1>ส่วนผสม</h1>
        {listIngredient.map((items, index) => (
          <motion.ul
            initial="hidden"
            transition={{ duration: 1, times: [0, 0.2, 1] }}
            animate={itemAnimate && "visible"}
            variants={list}
            className="list-ingredient-recipe"
            key={items.id}
            style={{
              background: (index + 1) % 2 === 0 ? "#f3f3f3" : "transparent",
            }}
          >
            <motion.li variants={item}>{items.name}</motion.li>
            <motion.li variants={item}>{items.volume}</motion.li>
          </motion.ul>
        ))}
      </RecipeInfoContainer>
    </>
  );
};

export default RecipeIngredient;
