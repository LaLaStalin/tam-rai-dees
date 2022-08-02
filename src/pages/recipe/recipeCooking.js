import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RecipeInfoContainer } from "./recipeIngredient";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion/dist/framer-motion";

const WrrapperRecipeCooking = styled.div`
  & > h1 {
    font-size: 22px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: var(--main-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .duration-recipe {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 5px;
    top: 15px;
    right: 30px;
    font-size: var(--txt-sub);
    font-weight: bold;
    color: var(--txt-theme);
  }

  .time-icon {
    font-size: 20px;
  }

  .list-cooking-recipe {
    display: grid;
    grid-template-columns: 50px auto;
    padding: 20px 0;
    align-items: center;
    color: var(--txt-theme);
    font-size: var(--txt-sub);
    font-weight: bold;
    width: 100%;

    .index-box {
      background: lightgray;
      width: 35px;
      height: 35px;
      font-size: var(--txt-sub);
      font-weight: bold;
      border-radius: 8px;
      color: var(--bg-theme);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const RecipeCooking = (props) => {
  const [itemAnimate, setItemAnimate] = useState(false);

  const handleAnimate = () => {
    if (window.scrollY >= 200) {
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
    <RecipeInfoContainer>
      <WrrapperRecipeCooking>
        <div className="duration-recipe">
          <p
            style={{
              color: "lightgray",
              fontSize: "var(--txt-primary)",
              fontWeight: "400",
              marginRight: "5px",
            }}
          >
            เวลาทำอาหาร
          </p>
          <Icon
            icon="icon-park-outline:time"
            className="time-icon"
            color="var(--txt-theme)"
          />
          {props.duration_hr && props.duration_hr !== "0" && (
            <p>{props.duration_hr} ชั่วโมง</p>
          )}
          <p>{props.duration_m} นาที</p>
        </div>
        <h1>วิธีทำ</h1>
        {props.listCooking.map((items, index) => (
          <motion.div
            initial="hidden"
            transition={{ duration: 1, times: [0, 0.2, 1] }}
            animate={itemAnimate && "visible"}
            variants={list}
            className="list-cooking-recipe"
            key={items.cooking_id}
          >
            <motion.span variants={item} className="index-box">
              <p>{index + 1}</p>
            </motion.span>
            <motion.p variants={item}>{items.cooking_step}</motion.p>
          </motion.div>
        ))}
      </WrrapperRecipeCooking>
    </RecipeInfoContainer>
  );
};

export default RecipeCooking;
