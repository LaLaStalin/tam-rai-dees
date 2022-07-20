import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Divider from "../../components/Divider/divider";
import { Icon } from "@iconify/react";
import { RiHeart3Fill } from "react-icons/ri";
import { ButtonTransparent } from "../Button/index";
import { AuthContext } from "../../util/context";
import { CardActionArea } from "@mui/material";

const ContainerCardIngredient = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  width: 210px;
  height: 180px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border: 3px solid transparent;
  background: ${(props) =>
    props.active.some((el) => el.idIngre === props.id)
      ? "linear-gradient(180deg, #fff 0%, #fff 100%) padding-box,var(--main-color) border-box"
      : "transparent"};
  cursor: pointer;

  & > p {
    position: absolute;
    left: 20px;
    top: 10px;
    font-size: var(--txt-sub);
    color: ${(props) =>
      props.active.some((el) => el.idIngre === props.id)
        ? "var(--txt-theme)"
        : "gray"};
    font-weight: 500;
  }

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export const CardIngredient = (props) => {
  return (
    <ContainerCardIngredient
      whileTap={{ scale: 0.9 }}
      id={props.id}
      active={props.active}
      onClick={props.onClicked}
    >
      <p>{props.name}</p>
      <img src={props.img} alt="ingredient-img" />
    </ContainerCardIngredient>
  );
};

const ContainerCardRecipe = styled.div`
  display: flex;
  background: var(--bg-theme);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 16px;
  margin: 20px 0;
  height: 100%;
  gap: 20px;
  color: gray;
  font-size: var(--txt-primary);
  position: relative;

  .icon-like {
    display: flex;
    position: absolute;
    gap: 2px;
    right: 10px;
    font-size: var(--txt-primary);
    cursor: pointer;
  }

  .img-recipe {
    width: 220px;
    height: 176px;
    border-radius: 12px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }
  }

  .content-recipe {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 176px;

    .content-recipe-info {
      display: flex;
      flex-direction: column;
      gap: 5px;

      & > h3 {
        background: var(--main-color);
        font-size: var(--txt-header);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .content-recipe-name {
        font-size: var(--txt-primary);
        font-weight: bold;
        color: var(--txt-theme);
      }
    }
    .duration-button {
      display: flex;
      flex-direction: column;

      .duration {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: var(--txt-primary);
        margin: 10px 0;
      }
    }
  }
`;

export const CardRecipe = (props) => {
  const { apiUrl } = AuthContext();
  return (
    <ContainerCardRecipe>
      <span className="icon-like">
        <p>{props.like}</p>
        <motion.span whileTap={{ scale: 0.6 }}>
          <RiHeart3Fill style={{ color: "#F44336", fontSize: "18px" }} />
        </motion.span>
      </span>

      <CardActionArea className="img-recipe">
        <div className="img-recipe" onClick={props.onClicked}>
          <img
            src={`${apiUrl}/imgs/recipe/${props.recipe_img}`}
            alt="img-recipe"
          />
        </div>
      </CardActionArea>

      <div className="content-recipe">
        <div className="content-recipe-info">
          <h3>{props.nameRecipe}</h3>
          <p className="content-recipe-name">{props.writter}</p>
          <Divider horizontal="100%" color="lightgray" />
          <p>
            {props.description.substring(0, 180)}
            {props.description.length > 190 && ". . ."}
          </p>
        </div>

        <div className="duration-button">
          <span className="duration">
            <Icon
              icon="icon-park-outline:time"
              className="time-icon"
              color="var(--txt-theme)"
            />
            <p>
              {" "}
              ใช้เวลาทำอาหาร{" "}
              {props.duration_hr && props.duration_hr + " ชั่งโมง "}
              {props.duration_m} นาที
            </p>
          </span>

          <ButtonTransparent borderColor="lightgray" onClick={props.onClicked}>
            View
          </ButtonTransparent>
        </div>
      </div>
    </ContainerCardRecipe>
  );
};
