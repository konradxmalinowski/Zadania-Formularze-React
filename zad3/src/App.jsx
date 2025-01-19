/* eslint-disable react/jsx-no-comment-textnodes */

import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState(null);

  function handleClick(operator) {
    if (number1 === null || number2 === null) {
      alert("Enter two numbers");
      return;
    }

    if (
      (operator === "/" || operator === "//" || operator === "%") &&
      number2 === 0
    ) {
      alert("Second number must not be 0 ");
      return;
    }

    if (operator === "+") setResult(number1 + number2);
    if (operator === "-") setResult(number1 - number2);
    if (operator === "/") setResult(number1 / number2);
    if (operator === "*") setResult(number1 * number2);
    if (operator === "%") setResult(number1 % number2);
    if (operator === "//") setResult(parseInt(number1 / number2));
  }

  return (
    <>
      <label>
        a:
        <input
          type="number"
          name="numberA"
          id="numberA"
          onChange={(event) => {
            let value = isNaN(parseInt(event.target.value))
              ? 0
              : parseInt(event.target.value);
            setNumber1(value);
          }}
        />
      </label>
      <label>
        b:
        <input
          type="number"
          name="numberB"
          id="numberB"
          onChange={(event) => {
            let value = isNaN(parseInt(event.target.value))
              ? 0
              : parseInt(event.target.value);
            setNumber2(value);
          }}
        />
      </label>

      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("-")}>-</button>
      <button onClick={() => handleClick("*")}>*</button>
      <button onClick={() => handleClick("/")}>/</button>
      <button onClick={() => handleClick("%")}>%</button>
      <button onClick={() => handleClick("//")}>//</button>

      <p>Result: {result}</p>
    </>
  );
}

export default App;
