import React, { useState } from "react";
import styled from "styled-components";

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 100%
    ),
    linear-gradient(180deg, transparent 0%, transparent 100%);
  filter: opacity(0.4);
`;

const Backdrop = ({ open, onClose }) => {
  return <>{open && <BackdropContainer onClick={onClose} />}</>;
};

export default Backdrop;
