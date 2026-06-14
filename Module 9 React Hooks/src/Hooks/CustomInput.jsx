import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputEl = useRef();
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputEl.current.focus;
    },
    clearInput: () => {
      inputEl.current.value = "";
    },
  }));
  return (
    <div>
      <input type="text" ref={inputEl} onChange={props.changeName} />
    </div>
  );
});

export default CustomInput;
