import { useState } from "react";
import MyClassComponent from "./ReactLifeCycle/MyClassComponent";
import MyFunctionalComponent from "./ReactLifeCycle/MyFunctionalComponent";

function App() {
  const [show, setShow] = useState(true);
  return (
    // { <MyClassComponent /> }
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle Component
      </button>
      {show && <MyFunctionalComponent />}
    </>
  );
}

export default App;
