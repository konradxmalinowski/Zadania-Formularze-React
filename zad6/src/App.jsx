import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [numberOfBricks, setNumberOfBricks] = useState(0);
  const [isBricksPremium, setIsBrickPremium] = useState(false);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let price;
    if (isBricksPremium) price = numberOfBricks * 2 * 1.3;
    else price = numberOfBricks * 2;
    setPrice(price);
  }, [numberOfBricks, isBricksPremium]);

  return (
    <>
      <div>
        <label>
          Ilość cegieł:
          <input
            type="number"
            name="numberOfBricks"
            id="numberOfBricks"
            onChange={(event) => {
              let value = isNaN(parseInt(event.target.value))
                ? 0
                : parseInt(event.target.value);
              setNumberOfBricks(value);
            }}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="isBrickPremium"
            id="isBrickPremium"
            onClick={() => {
              setIsBrickPremium(!isBricksPremium);
            }}
          />
          Premium
        </label>

        <p>
          <span>Zakupiona ilość cegieł: {numberOfBricks}, </span>
          <span>
            {isBricksPremium ? "cegła premium" : "cegła standardowa"},{" "}
          </span>
          <span>koszt zakupu cegieł: {price},</span>
          <span>
            waga cegieł:
            {isBricksPremium ? numberOfBricks * 1.75 : numberOfBricks * 1.5}kg
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
