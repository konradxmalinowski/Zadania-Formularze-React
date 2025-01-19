import { useState } from "react";

export default function Form() {
  const [cost, setCost] = useState(0);
  const [isAfterPartyChecked, setIsAfterPartyChecked] = useState(false);
  const [isAfterPartyPreviousValue, setIsAfterPartyPreviousValue] = useState(0);

  function changePrice() {
    if (!isAfterPartyChecked) {
      setCost(isAfterPartyPreviousValue * 1.3);
    } else {
      setCost(isAfterPartyPreviousValue);
    }
  }

  return (
    <>
      <form action="" method="get">
        <label>
          Ilość gości:
          <input
            type="number"
            id="ghostNumber"
            name="ghostNumber"
            onChange={(event) => {
              let value = parseInt(event.target.value);
              setCost(isNaN(value) ? 0 : value);
              setIsAfterPartyPreviousValue(isNaN(value) ? 0 : value);
            }}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="after-party"
            id="after-party"
            onClick={() => {
              setIsAfterPartyChecked(!isAfterPartyChecked);
              changePrice();
            }}
          />
          Poprawiny
        </label>
      </form>

      <p>Całkowity koszt: {cost * 100}</p>
    </>
  );
}
