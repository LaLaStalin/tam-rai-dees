import React, { useEffect } from "react";
import styled from "styled-components";
import { ContainerGlobal } from "../../components/global.styled";
import { RiHeart3Fill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import RecipeIngredient from "./recipeIngredient";
import RecipeCooking from "./recipeCooking";
import RecipeTag from "./recipeTag";
import { motion } from "framer-motion/dist/framer-motion";
import { Parallax } from "react-parallax";
import { useLocation } from "react-router";

export const WrrapperRecipe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--w-screen);
  margin: 0 auto;
  gap: 40px;
  padding: 0 var(--pLR);

  .background-recipe {
    height: 350px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 22px 22px;

    .img-paralax {
      height: 100%;
      width: 100%;
      object-position: center;
      object-fit: cover;
      border-radius: 0 0 12px 12px;
    }
  }

  .title-recipe {
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    padding: 40px 30px;
    border-radius: 22px;
    gap: 5px;
    position: relative;
    background: var(--bg-theme);

    @media screen and (max-width: 600px) {
      & > h1 {
        margin-top: 22px;
      }
    }

    .recipe-writer {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 10px;
      right: 30px;
      gap: 10px;

      & > p {
        font-size: var(--txt-sub);
        font-weight: bold;
      }

      .profile-img {
        display: flex;
        border-radius: 100%;
        height: 50px;
        width: 50px;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);

        & > img {
          border-radius: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }

    & > h1 {
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

      font-size: 24px;
      background: var(--main-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .description-recipe {
      display: flex;
      width: 80%;
      padding-left: 10px;
      line-height: 25px;

      & > p {
        font-size: var(--txt-primary);
        color: var(--txt-theme);
      }
    }

    .icon-like-favorite {
      position: absolute;
      right: 30px;
      bottom: 10px;
      display: flex;
      align-items: center;
      gap: 8px;

      .icon-like {
        font-size: 38px;
        cursor: pointer;
      }

      .icon-favorite {
        font-size: 30px;
        cursor: pointer;
      }
    }
  }

  .datetime-recipe {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    font-size: var(--txt-sub);
    color: grey;
  }
`;

const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Recipe = () => {
  document.title = "Tam Rai Dee - Recipe";

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <ContainerGlobal>
      <WrrapperRecipe>
        <div className="background-recipe">
          <Parallax
            className="img-paralax"
            bgImage="/images/recipes/myrecipe.jpg"
            bgImageAlt="recipe"
            strength={-150}
          />
        </div>
        <div className="title-recipe">
          <div className="recipe-writer">
            <p>Nattida Jang</p>
            <div className="profile-img">
              <img alt="profile" src="/images/profile/lala.png" />
            </div>
          </div>

          <h1>ข้าวกะเพราหมูสับไข่ดาว</h1>
          <span className="description-recipe">
            <motion.p
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, times: [0, 0.2, 1] }}
            >
              ถ้าพูดถึงของผัด ๆ ที่เผ็ด ๆ แซ่บ ๆ
              แล้วล่ะก็มันก็คงจะต้องนึกถึงเมนู "ผัดกะเพรา"
              เพราะเมนูนี้ทำง่ายไม่ยุ่งยาก และขึ้นชื่อว่าเป็นผัดกะเพรา
              วันนี้เราจะมาสอนทำผัดกะเพราหมูสับแบบง่าย ๆ แถมอร่อยด้วย
            </motion.p>
          </span>

          <div className="icon-like-favorite">
            <motion.span whileTap={{ scale: 0.1 }}>
              <RiHeart3Fill
                className="icon-like"
                style={{ color: "lightgray" }}
              />
            </motion.span>
            <motion.span whileTap={{ scale: 0.1 }}>
              <BsFillBookmarkFill
                className="icon-favorite"
                style={{ color: "lightgray" }}
              />
            </motion.span>
          </div>
        </div>
        <RecipeIngredient />
        <RecipeCooking />
        <RecipeTag />
        <p className="datetime-recipe">วันที่โพสต: 02/04/2022</p>
      </WrrapperRecipe>
    </ContainerGlobal>
  );
};

export default Recipe;
