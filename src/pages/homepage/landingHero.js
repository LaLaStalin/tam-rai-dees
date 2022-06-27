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

    .content-h1 {
      color: #fff;
      font-size: 35px;
      font-weight: 550;
      text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.8);
    }

    & > p {
      font-size: var(--txt-header);
      color: #777777;
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
    console.log("hi");
    if (e.key === "Enter") {
      window.scrollTo({
        top: props.refRecipe.current.offsetTop,
        lef: 0,
        behavior: "smooth",
      });
    }
  };

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
          text={["WHAT WE ARE COOKING "]}
          speed={100}
          eraseSpeed={50}
          typingDelay={1000}
          cursor="?"
          className="content-h1"
        />
        <p>personalize your experience</p>
      </div>
      <div className="box-search">
        <SearchInput w="450px" onKeyDown={handleSearch} />
      </div>
    </ContainerLandingHero>
  );
};

export default LandingHero;
