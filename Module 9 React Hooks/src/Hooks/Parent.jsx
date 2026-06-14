import React, { useRef, useState } from "react";
import CustomInput from "./CustomInput";

const Parent = () => {
  const inputEle = useRef("");
  const [name, setName] = useState("");
  console.log(inputEle.current);

  return (
    <div>
      Hello, {name}
      <CustomInput
        ref={inputEle}
        changeName={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          inputEle.current.focus();
        }}
      >
        Focus Input
      </button>
      <button
        onClick={() => {
          inputEle.current.value = "";
        }}
      >
        Clear Input
      </button>
    </div>
  );
};

export default Parent;
