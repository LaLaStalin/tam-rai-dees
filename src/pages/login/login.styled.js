import styled from "styled-components";

export const ContainerLogin = styled.section`
  margin-top: -80px;
  height: 100vh;
  position: relative;
  /* background-image: url("./images/bgLanding.png"); */
  background-image: linear-gradient(#e9eaec, #e2e3e5);
  z-index: 2;

  @media screen and (max-width: 780px) {
    height: ${({ isRegister }) => isRegister};
  }
`;

export const WrapperLogin = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  max-width: var(--w-screen);
  margin: 0 auto;
  padding: 0 var(--pLR);
  background-image: url("./images/bg/bgAuth.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  justify-content: space-between;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    margin-top: ${(props) => (props.path === "/register" ? "160px" : null)};
    padding-bottom: 4rem;
    background: #fff;
  }
  .login-wrapper-left {
    display: flex;
    flex-direction: column;
    gap: 30px;

    & > h1 {
      font-size: 47px;
      font-weight: 700;
      line-height: 70px;
      text-shadow: 0 2px 20px #fff;
      text-shadow: 0px 10px 6px rgba(0, 0, 0, 0.2);
    }

    & > p {
      font-size: var(--txt-sub);
      line-height: 30px;
    }

    .link-register-login {
      font-weight: bold;
      background: var(--main-color);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      display: inline;
      cursor: pointer;
    }
  }

  .login-wrapper-right {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .input-textfield {
      width: 270px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      height: 55px;
      border-radius: 4px;

      @media screen and (max-width: 350px) {
        width: auto;
      }
    }
  }
`;
