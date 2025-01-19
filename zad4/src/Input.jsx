/* eslint-disable react/prop-types */
export default function Input({
  isAllowed,
  setIsAllowed,
  numbers,
  setNumbers,
  number,
}) {
  return (
    <div>
      <input
        type="number"
        name={["number", number].join("")}
        id={["number", number].join("")}
        onChange={(event) => {
          let value = isNaN(parseInt(event.target.value))
            ? 0
            : parseInt(event.target.value);
          let updatedArray = [...numbers];
          updatedArray[number] = value;
          setNumbers(updatedArray);
        }}
      />
      <label>
        <input
          type="checkbox"
          name={["doCalculate", number].join("")}
          id={["doCalculate", number].join("")}
          onClick={() => {
            let updatedArray = [...isAllowed];
            updatedArray[number] = !isAllowed[number];
            setIsAllowed(updatedArray);
          }}
        />
        Do calculate?
      </label>
    </div>
  );
}
