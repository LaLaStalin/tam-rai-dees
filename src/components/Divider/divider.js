import React from "react";

const Divider = (props) => {
  return (
    <>
      <div
        style={{
          height: props.vertical,
          width: props.horizontal,
          border: `0.1px solid ${props.color}`,
          background: props.color,
        }}
      ></div>
    </>
  );
};

export default Divider;
