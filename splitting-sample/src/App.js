import React, { useState } from "react";
import "./App.css";
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <div>Hello!</div>
      <p onMouseOver={onMouseOver} onClick={onClick}>
        React!
      </p>
      {visible && <SplitMe></SplitMe>}
    </div>
  );
};

export default App;
