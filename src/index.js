import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function isPalindrom(str) {
  var re = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr
    .split("")
    .reverse()
    .join("");
  return reverseStr === lowRegStr;
}
function App() {
  const [inputValue, setinputValue] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setinputValue(event.target.value);
  }
  const isPalimdromBoolValue = isPalindrom(inputValue);
  const className = isPalimdromBoolValue ? "success" : "danger";

  return (
    <div className="App">
      <h1>Is Palindrom</h1>
      <input
        type="text"
        placeholder="type in some word"
        onChange={handleChange}
      />
      <h2 className={className}>
        {inputValue && isPalimdromBoolValue ? "YEP" : "NOT"}
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
