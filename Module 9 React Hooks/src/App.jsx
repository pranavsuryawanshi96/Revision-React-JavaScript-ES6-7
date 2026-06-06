import { useState } from "react";
import MyClassComponent from "./ReactLifeCycle/MyClassComponent";
import MyFunctionalComponent from "./ReactLifeCycle/MyFunctionalComponent";
import MyStateComponent from "./Hooks/MyStateComponent";
import MyUseEffect from "./Hooks/MyUseEffect";

function App() {
  // const [show, setShow] = useState(true);
  return (
    <>
      {/* {<MyClassComponent />} */}
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Component
      </button>
      {show && <MyFunctionalComponent />}
      <MyStateComponent />
      */}
      <h2>App Component</h2>
      <MyUseEffect />
    </>
  );
}

export default App;
