import React from "react";
import styled from "styled-components";
import SearchInput from "../../components/SearchInput/searchInput";
import ReactTypingEffect from "react-typing-effect";
import { Parallax } from "react-parallax";

const ContainerLandingHero = styled.section`
  background-image: url("./images/bg/bg-home.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 350px;
  position: relative;
  margin-bottom: 80px;

  @media screen and (max-width: 610px) {
    height: 240px;
  }

  .wrapper-landing-hero {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 2;

    .cursorMargin {
      margin-left: 10px;
    }

    .content-h1 {
      color: #fff;
      font-size: 35px;
      font-weight: 550;
      text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
    }

    & > p {
      font-size: var(--txt-header);
      color: lightgray;
      opacity: 0.6;
    }
  }

  .box-search {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: -20px;
    width: 100%;
    z-index: 2;
  }
`;

const LandingHero = (props) => {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        const filterAllRecipe = props.allRecipe.filter((items) => {
          const objectForSearch = {
            recipeName: items.recipeAdded.recipe_name,
            writter: items.recipeAdded.user_firstname,
            lastname: items.recipeAdded.user_lastname,
            des: items.recipeAdded.recipe_description.replace(/\s/g, ""),
            duration_m: items.recipeAdded.recipe_duration_m + " นาที",
            duration_hr: items.recipeAdded.recipe_duration_hr + " ชั่วโมง",
          };
          return Object.values(objectForSearch)
            .join("")
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        });
        props.setShowRecipe(filterAllRecipe);
      } else {
        props.setShowRecipe(props.allRecipe);
      }

      window.scrollTo({
        top: props.refRecipe.current.offsetTop,
        lef: 0,
        behavior: "smooth",
      });
    }
  };

  //hi
  return (
    <ContainerLandingHero>
      <Parallax
        bgImage="./images/bg/bg-home.png"
        bgImageAlt="bg-home"
        strength={350}
        style={{ height: "100%", zIndex: 1 }}
      />
      <div className="wrapper-landing-hero">
        <ReactTypingEffect
          text={["WHAT ARE YOU COOKING"]}
          speed={100}
          eraseSpeed={50}
          typingDelay={1000}
          cursor="?"
          cursorClassName="cursorMargin"
          className="content-h1"
        />
        <p>change your cooking experience</p>
      </div>
      <div className="box-search">
        <SearchInput w="450px" onKeyDown={handleSearch} />
      </div>
    </ContainerLandingHero>
  );
};

export default LandingHero;
