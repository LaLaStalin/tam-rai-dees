import React from "react";
import styled from "styled-components";

const ContainerCardMyRecipe = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 200px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  cursor: pointer;

  .info-recipe {
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 10px 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, transparent 100%);
    border-radius: 0 0 12px 12px;

    & > h4 {
      margin: 0 20px;
      background: var(--main-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-size: var(--txt-header);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }

    & > p {
      margin: 0 20px;
      color: gray;
      font-size: var(--txt-primary);
    }
  }
`;

const CardMyRecipe = (props) => {
  return (
    <ContainerCardMyRecipe src={props.src} onClick={props.onClicked}>
      <div className="info-recipe">
        <h4>{props.recipeName}</h4>
        <p>
          {props.recipeDescription.substring(0, 150)}
          {props.recipeDescription.length > 150 && "..."}
        </p>
      </div>
    </ContainerCardMyRecipe>
  );
};

export default CardMyRecipe;
