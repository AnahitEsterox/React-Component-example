import './App.css';
import React, {useState} from "react";
import Counter from "./components/Counter";

// eslint-disable-next-line react-hooks/rules-of-hooks

function App() {

  return (
    <div className="App">
        <Counter/>
        <hr style={{border: "red"}}/>
    </div>
  );
}

export default App;
