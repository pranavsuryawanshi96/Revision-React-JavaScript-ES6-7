import React, { useEffect, useState } from "react";

const MyUseEffect = () => {
  console.log("rendering..");
  //   when the component is rendered then useEffect will be called
  const [width, setWidth] = useState(300);
  useEffect(() => {
    console.log("hello useEffect!!", width);
    setWidth(600);
  },[width]);
  return (
    <div
      style={{
        width: `${width}px`,
        backgroundColor: "red",
        height: "100px",
        transition: "width 1s",
      }}
    >
      my use effect
    </div>
  );
};

export default MyUseEffect;
