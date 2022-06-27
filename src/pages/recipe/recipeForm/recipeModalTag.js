import React from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion/dist/framer-motion";

const ModalBox = styled(motion.div)`
  position: absolute;
  top: 5%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: fit-content;
  background: #efefef;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const dropIn = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
  },
  exit: {
    x: "100vh",
    opacity: 0,
  },
};

const RecipeModalTag = ({ open, handleModalTag }) => {
  return (
    <Modal
      open={open}
      onClose={handleModalTag}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <ModalBox
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div style={{ width: "100%" }}>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
          <h1>ho</h1>
        </div>
      </ModalBox>
    </Modal>
  );
};

export default RecipeModalTag;
