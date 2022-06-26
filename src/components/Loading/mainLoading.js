import React from "react";
import styled from "styled-components";

const ContainerMainLoading = styled.div`
  background-color: var(--bg-theme);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 9999;
`;

const MainLoading = () => {
  return (
    <ContainerMainLoading>
      <video
        autoPlay
        loop
        muted
        width={400}
        src="/videos/logo-animation1.mp4"
        type="video/mp4"
      />
    </ContainerMainLoading>
  );
};

export default MainLoading;
