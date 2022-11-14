import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContainerGlobal } from "../../components/global.styled";
import { RiHeart3Fill, RiDeleteBin6Fill } from "react-icons/ri";
import { BsFillBookmarkFill } from "react-icons/bs";
import RecipeIngredient from "./recipeIngredient";
import RecipeCooking from "./recipeCooking";
import RecipeTag from "./recipeTag";
import { motion } from "framer-motion/dist/framer-motion";
import { Parallax } from "react-parallax";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { ButtonPrimary, ButtonCancel } from "../../components/Button";
import { AuthContext } from "../../util/context";
import Avatar from "@mui/material/Avatar";
import { MdModeEditOutline } from "react-icons/md";
import Swal from "sweetalert2";

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

    @media screen and (max-width: 930px) {
      height: 240px;
    }

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
    width: 93%;
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

        .avatar-img {
          width: 100%;
          height: 100%;
          font-size: 25px;
          object-fit: cover;
          border-radius: 100%;
          background: var(--main-color);
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
    align-items: center;
    justify-content: space-between;
    font-size: var(--txt-sub);
    color: grey;
  }
`;

const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Recipe = () => {
  document.title = "Kin Rai Dee - Recipe";
  const location = useLocation();
  const navigate = useNavigate();
  const { user, apiUrl } = AuthContext();
  const [recipeWriter, setRecipeWriter] = useState({});
  const [letterFirstname, setLetterFirstname] = useState();
  const [listIngredient, setListIngredient] = useState([]);
  const [listCooking, setListCooking] = useState([]);
  const [listTag, setListTag] = useState([]);
  const [checkLike, setCheckLike] = useState(null);
  const [checkFavorite, setCheckFavorite] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("location: ", location.state);

    axios
      .post(`${apiUrl}/recipe/cookingTagIngreById.php`, {
        id_user: user.user_id ? user.user_id : null,
        id_writter: location.state.user_id,
        id_recipe: location.state.recipe_id,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setRecipeWriter(res.data.dataUser);
          setLetterFirstname(res.data.dataUser.user_firstname[0]);
          setListIngredient(res.data.dataIngre);
          setListCooking(res.data.dataCooking);
          setListTag(res.data.dataTag);
          setCheckLike(res.data.checkLiked);
          setCheckFavorite(res.data.checkFavorited);
        }
      });
  }, [location.state]);

  const deleteRecipe = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "อยากจะลบสูตรอาหารของคุณจริงๆหรอ><",
      icon: "warning",
      cancelButtonText: "ไม่ลบ",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช่, ลบเลย!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`${apiUrl}/recipe/deleteRecipe.php`, {
            id_recipe: location.state.recipe_id,
            deleteImg: location.state.recipe_img,
          })
          .then((res) => {
            if (res.data.success) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "สูตรอาหารถูกลบแล้ว",
                text: "Your recipe has been deleted.",
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                navigate("/myrecipes");
              }, 1500);
            }
          });
      }
    });
  };

  const handleLike = () => {
    if (!user.user_id) return;
    if (location.state.user_id !== user.user_id) {
      axios
        .post(`${apiUrl}/recipe/handleLike.php`, {
          id_user: user.user_id,
          id_recipe: location.state.recipe_id,
          check_Liked: checkLike,
        })
        .then((res) => {
          console.log("hi: ", res);
          if (res.data.success) {
            setCheckLike(!checkLike);
          }
        });
    }
  };

  const handleFavorite = () => {
    if (!user.user_id) return;
    if (location.state.user_id !== user.user_id) {
      axios
        .post(`${apiUrl}/recipe/handleFavorite.php`, {
          id_user: user.user_id,
          id_recipe: location.state.recipe_id,
          check_favorited: checkFavorite,
        })
        .then((res) => {
          if (res.data.success) {
            setCheckFavorite(!checkFavorite);
          }
        });
    }
  };
  return (
    <ContainerGlobal>
      <WrrapperRecipe>
        <div className="background-recipe">
          <Parallax
            className="img-paralax"
            bgImage={`${apiUrl}/imgs/recipe/${location.state.recipe_img}`}
            bgImageAlt="recipe"
            strength={500}
            height="100%"
          />
        </div>
        <div className="title-recipe">
          <div className="recipe-writer">
            <p>
              {recipeWriter.user_firstname + " " + recipeWriter.user_lastname}
            </p>
            <div className="profile-img">
              <Avatar
                className="avatar-img"
                alt="profile"
                src={
                  recipeWriter.user_img &&
                  `${apiUrl}/imgs/profile/${recipeWriter.user_img}`
                }
              >
                {!recipeWriter.user_img && letterFirstname}
              </Avatar>
            </div>
          </div>

          <h1>{location.state.recipe_name}</h1>
          <span className="description-recipe">
            <motion.p
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, times: [0, 0.2, 1] }}
            >
              {location.state.recipe_description}
            </motion.p>
          </span>

          <div className="icon-like-favorite">
            <motion.span whileTap={{ scale: 0.5 }} onClick={handleLike}>
              <RiHeart3Fill
                className="icon-like"
                style={{ color: checkLike ? "#F44336" : "lightgray" }}
              />
            </motion.span>
            <motion.span whileTap={{ scale: 0.5 }} onClick={handleFavorite}>
              <BsFillBookmarkFill
                className="icon-favorite"
                style={{ color: checkFavorite ? "orange" : "lightgray" }}
              />
            </motion.span>
          </div>
        </div>
        {/* Ingre */}
        <RecipeIngredient
          listIngredient={listIngredient}
          amount={location.state.recipe_amount}
        />
        {/* Cooking */}
        <RecipeCooking
          listCooking={listCooking}
          duration_m={location.state.recipe_duration_m}
          duration_hr={location.state.recipe_duration_hr}
        />
        {/* Tag */}
        <RecipeTag listTag={listTag} />
        <div className="datetime-recipe">
          วันที่โพสต์: {location.state.recipe_datetime}
          {location.state.user_id === user.user_id && (
            <div style={{ display: "flex", gap: "20px" }}>
              <ButtonCancel
                p="10px 20px"
                style={{ gap: "5px" }}
                onClick={deleteRecipe}
              >
                <RiDeleteBin6Fill fontSize={16} />
                ลบ
              </ButtonCancel>
              <ButtonPrimary
                onClick={() =>
                  navigate(`/recipe/edit/${location.state.recipe_id}`, {
                    state: {
                      recipeIngredientFromState: listIngredient,
                      recipeCookingFromState: listCooking,
                      recipeTagFromState: listTag,
                      recipeFromState: location.state, //recipe info of user
                    },
                  })
                }
                p="10px 20px"
                style={{ marginRight: "20px", gap: "5px" }}
              >
                <MdModeEditOutline fontSize={16} />
                แก้ไข
              </ButtonPrimary>
            </div>
          )}
        </div>
      </WrrapperRecipe>
    </ContainerGlobal>
  );
};

export default Recipe;
