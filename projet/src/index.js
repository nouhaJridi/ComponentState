import React from "react";
import ReactDOM from "react-dom";
import MyButton from "./myButton.js";
import "./styles.css";

function App() {
  return (
    <center>
  <MyButton />

  
  </center>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
