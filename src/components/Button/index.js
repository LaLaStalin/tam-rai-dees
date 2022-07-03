import styled from "styled-components";
import React from "react";
import { motion } from "framer-motion/dist/framer-motion";

export const ButtonPrimary = styled.button`
  padding: ${(props) => (props.p ? props.p : "15px 30px")};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-weight: ${(props) => (props.fontW ? props.fontW : "700")};
  font-size: ${(props) => props.fontS};
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  box-shadow: ${(props) =>
    props.shadow ? props.shadow : "0px 0px 14px -7px #f09819"};
  background-image: var(--main-3-color);
  background: ${(props) => props.bg};
  background-size: 200% auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.border ? props.border : null)};
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-position: right center;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ButtonCancel = styled.button`
  padding: ${(props) => (props.p ? props.p : "10px")};
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease-in;
  cursor: pointer;

  &:hover {
    background: #ff5c60;
    border: 1px solid #ff5c60;
    color: #fff;
    box-shadow: 0px 0px 14px -7px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonTransparent = styled.button`
  background: transparent;
  border: 2px solid ${(props) => props.borderColor};
  transition: all 0.3s ease-in-out;
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  padding: ${(props) => (props.p ? props.p : "6px")};
  border-radius: 10px;
  font-size: var(--txt-primary);
  cursor: pointer;
  color: gray;

  &:hover {
    background: var(--main-3-color);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    color: var(--bg-theme);
  }
`;

const ButtonIngredientType = styled(motion.button)`
  background: var(--bg-theme);
  color: ${(props) => (props.active === props.keyword ? "#222" : "gray")};
  font-size: var(--txt-sub);
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  background: ${(props) =>
    props.active === props.keyword
      ? "linear-gradient(180deg, #fff 0%, #fff 100%) padding-box,var(--main-color) border-box"
      : "transparent"};

  width: 220px;
  height: 50px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  & > span {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 28px;
    }
  }
`;

export const ButtonMenuIngredientType = (props) => {
  return (
    <ButtonIngredientType
      whileTap={{ scale: 0.9 }}
      active={props.active}
      keyword={props.keyword}
      onClick={props.onClicked}
    >
      <span>
        <p className="icon">{props.iconIngredientType}</p>
        <p style={{ fontSize: "var(--txt-sub)" }}>{props.children}</p>
      </span>
    </ButtonIngredientType>
  );
};
