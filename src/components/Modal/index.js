import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion/dist/framer-motion";
import Backdrop from "../Backdrop";
const ModalContainer = styled(motion.div)`
  position: fixed;
  width: calc(auto - 100px);
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  border-radius: 12px;
  height: fit-content;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: #dedede;
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

const Modal = ({ open, onClose, children, w, h, p }) => {
  return (
    <>
      <Backdrop open={open} onClose={onClose} />
      <Wrapper>
        <ModalContainer
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </ModalContainer>
      </Wrapper>
    </>
  );
};

export default Modal;
