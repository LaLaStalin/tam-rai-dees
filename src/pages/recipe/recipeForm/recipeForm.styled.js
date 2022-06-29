import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";

export const ContainerRecipeForm = styled.div`
  padding: 40px var(--pLR);
  max-width: var(--w-screen);
  margin: 0 auto;
  /* width: 100%; */

  .wrrapper-recipe-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: left;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: 20px 0;
    width: 100%;
    position: relative;
    border-radius: 22px;
    background: var(--bg-theme);

    .box-image {
      display: flex;
      width: 86%;
      height: 300px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #e5e5e5;
      border-radius: 22px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      color: gray;
      gap: 5px;
      margin-top: 70px;

      cursor: pointer;

      .icon-image {
        font-size: 120px;
      }

      & > h3 {
        font-size: var(--txt-header);
      }

      & > p {
        font-size: var(--txt-primary);
      }
    }

    & > h1 {
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      font-size: 32px;
      background: var(--main-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: absolute;
      left: 30px;
      top: 20px;
    }
  }
`;

export const Header = styled.h2`
  color: 28px;
  font-size: var(--txt-header);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SubHeader = styled.p`
  color: var(--txt-theme);
  opacity: 0.6;
  font-size: var(--txt-sub);
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 90%;
  gap: 20px;
  position: relative;

  .textarea-input {
    width: auto;
    color: var(--txt-theme);
    padding: 15px;
    padding-right: 70px;
    background-color: #e5e5e5;
    border-radius: 8px;
    font-size: var(--txt-sub);
    border: 1px solid #b5b5b5;

    &:hover {
      border: 1px solid #222;
    }

    &:focus {
      outline: none;
    }
  }

  .input-textfield {
    /* box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); */
    height: 55px;
    border-radius: 8px;
    padding-right: 50px;
    font-size: var(--txt-sub);
    background: #e5e5e5;
  }

  .header-subheader {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const RecipeNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-name {
    /* box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); */
    font-weight: bold;
  }

  .box-field {
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
  }

  .count-text {
    color: gray;
    font-size: var(--txt-primary);
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

export const RecipeIngredientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .box-field-ingredient {
    display: grid;
    gap: 10px;
    align-items: center;
    grid-template-columns: 60% 35% 5%;

    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }

    .icon-delete {
      cursor: pointer;
      color: lightgray;
      font-size: 38px;

      &:hover {
        color: #ff5c60;
        font-size: 42px;
      }
    }
  }
`;

export const RecipeCookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .box-field-cooking {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .box-index-cooking {
      background: gray;
      opacity: 0.8;
      width: 35px;
      height: 35px;
      font-size: var(--txt-sub);
      font-weight: bold;
      border-radius: 8px;
      color: var(--bg-theme);
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 9px;
      left: 10px;
      z-index: 1;
    }

    .cooking-input {
      padding-left: 40px;
    }

    .icon-delete {
      cursor: pointer;
      margin-left: 10px;
      color: lightgray;
      font-size: 38px;

      &:hover {
        color: #ff5c60;
        font-size: 42px;
        margin-left: 6px;
      }
    }
  }
`;

export const RecipeDurationAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .duration-hr-m {
    display: grid;
    grid-template-columns: 40% 50%;

    @media screen and (max-width: 760px) {
      display: flex;
      flex-direction: column;
      justify-content: left;
    }

    font-size: var(--txt-sub);
    gap: 20px;

    & > span {
      display: flex;
      align-items: center;
      gap: 30px;

      @media screen and (max-width: 450px) {
        flex-direction: column;
      }
    }

    .input-number {
      width: 100px;
      border-radius: 12px;
    }
  }

  .amount {
    display: grid;
    grid-template-columns: 40% 50%;
    grid-gap: 20px;

    .header-duration {
      text-align: left;
    }

    @media screen and (max-width: 760px) {
      display: flex;
      flex-direction: column;
      justify-content: left;
    }
  }
`;

export const RecipeTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .reciep-tag {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 50px));
    justify-content: left;
    gap: 20px;
    text-align: center;

    .box-tag {
      background: lightgray;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--txt-theme);
      font-size: var(--txt-sub);
      border-radius: 8px;
      transition: all 0.3s linear;

      &:hover {
        cursor: pointer;
        color: #fff;
        background: #ff5c60;
      }
    }
  }
`;

export const SubmittingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const WrapperAddItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonAddRecipe = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 15px;
  color: gray;
  justify-content: center;
  padding: 15px 20px;
  cursor: pointer;
  border-radius: 12px;
  background: transparent;
  border: 1px solid gray;
`;
