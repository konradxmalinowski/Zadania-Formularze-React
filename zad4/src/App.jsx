import { useEffect, useState } from "react";
import Input from "./Input";

function App() {
  const [sum, setSum] = useState(0);
  const [numbers, setNumbers] = useState(new Array(5).fill(0));
  const [isAllowed, setIsAllowed] = useState(new Array(5).fill(false));

  useEffect(() => {
    let sum = numbers.reduce((acc, currentValue, idx) => {
      return isAllowed[idx] ? acc + currentValue : acc;
    }, 0);
    setSum(sum);
  }, [numbers, isAllowed]);

  return (
    <>
      {[0, 1, 2, 3, 4].map((number) => (
        <Input
          key={number}
          isAllowed={isAllowed}
          setIsAllowed={setIsAllowed}
          numbers={numbers}
          setNumbers={setNumbers}
          number={number}
        />
      ))}

      <p>Sum of all checked numbers: {sum}</p>
    </>
  );
}

export default App;
