import "./loading.css";
import React from "react";
import styled from "styled-components";

const ContainerLoading = styled.div`
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 9999;
  /* background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, transparent 100%); */
`;

const Loading = () => {
  return (
    <ContainerLoading>
      {/* <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className="waviy">
        <span style={{ "--i": "1" }}>L</span>
        <span style={{ "--i": "2" }}>o</span>
        <span style={{ "--i": "3" }}>a</span>
        <span style={{ "--i": "4" }}>d</span>
        <span style={{ "--i": "5" }}>i</span>
        <span style={{ "--i": "6" }}>n</span>
        <span style={{ "--i": "7" }}>g</span>
        <span style={{ "--i": "8" }}>.</span>
        <span style={{ "--i": "9" }}>.</span>
        <span style={{ "--i": "10" }}>.</span>
      </div>
    </ContainerLoading>
  );
};

export default Loading;
