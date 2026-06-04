import { useState } from "react";
import MyClassComponent from "./ReactLifeCycle/MyClassComponent";
import MyFunctionalComponent from "./ReactLifeCycle/MyFunctionalComponent";
import MyStateComponent from "./Hooks/MyStateComponent";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {/* {<MyClassComponent />} */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Component
      </button>
      {show && <MyFunctionalComponent />}
      <MyStateComponent />
    </>
  );
}

export default App;
