import React from "react";
import Backdrop from "../Backdrop";
import Loading from "./loading";
const LoadingData = (props) => {
  return (
    <>
      <Backdrop open={props.open}>
        <Loading />
        <p
          style={{
            color: "#000",
            marginBottom: "-160px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          อย่าพึ่ง Refresh! ในตอนนี้นะจ๊ะ <br /> {props.statement}
        </p>
      </Backdrop>
    </>
  );
};

export default LoadingData;
