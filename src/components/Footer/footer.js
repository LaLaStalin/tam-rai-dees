import React from "react";
import styled, { keyframes } from "styled-components";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ArrowAnimate = keyframes`
    from {transform: translateY(0px);}
    to {transform: translateY(-15px);}
`;

const ContainerFooter = styled.div`
  /* background-color: #222; */

  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
  height: 120px;
  color: #fff;

  @media screen and (max-width: 450px) {
    height: auto;
    padding: 20px 0;
  }

  .wrapper-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--w-screen);
    margin: 0 auto;
    height: 100%;
    padding: 0 var(--pLR);

    @media screen and (max-width: 450px) {
      flex-direction: column-reverse;
      gap: 20px;
      text-align: center;
    }
    .logo-wrapper-footer {
      display: flex;
      flex-direction: column;

      .logo-text-footer > h1 {
        font-size: 30px;
        font-weight: bold;
        background: var(--main-color);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      & > p {
        font-size: var(--txt-primary);
        color: lightgrey;
      }
    }

    .copyright-wrapper-footer {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .arrow-button {
        display: flex;
        justify-content: flex-end;

        @media screen and (max-width: 450px) {
          justify-content: center;
        }

        .arrow-icon {
          background-color: #fff;
          font-size: 40px;
          border-radius: 100%;
          border: none;
          padding: 2px;
          color: #222;
          cursor: pointer;
          animation: ${ArrowAnimate} 0.6s infinite alternate;
        }
      }

      & > p {
        font-size: var(--txt-primary);
        color: lightgray;
      }
    }
  }
`;

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ContainerFooter>
      <div className="wrapper-footer">
        <div className="logo-wrapper-footer">
          <Link to="/" className="logo-text-footer">
            <h1>Kin Rai Dee</h1>
          </Link>

          <p>Good things come to those who cook.</p>
        </div>
        <div className="copyright-wrapper-footer">
          <span className="arrow-button">
            <RiArrowUpSLine className="arrow-icon" onClick={scrollTop} />
          </span>

          <p>&copy; Kin Rai Dee 2022</p>
        </div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
