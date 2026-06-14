import React, { forwardRef, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} onChange={props.changeName} />
    </div>
  );
});

export default CustomInput;
