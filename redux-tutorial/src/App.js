import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr></hr>
      <Todos></Todos>
    </div>
  );
}

export default App;
