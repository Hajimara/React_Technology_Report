import React from "react";
import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

function App() {
  return (
    <div>
      <CounterContainer />
      <hr></hr>
      <TodosContainer />
    </div>
  );
}

export default App;
