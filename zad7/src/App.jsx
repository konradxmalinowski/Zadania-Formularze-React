import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [numberOfBricks, setNumberOfBricks] = useState(0);
  const [bricksWeight, setBricksWeight] = useState(0);
  const [numberOfKilometers, setNumberOfKilometers] = useState(0);
  const [transportPrice, setTransportPrice] = useState(0);
  const [isBricksPremium, setIsBrickPremium] = useState(false);
  const [price, setPrice] = useState(0);

  function handleClick() {
    let price;
    if (isBricksPremium) price = numberOfBricks * 2 * 1.3;
    else price = numberOfBricks * 2;
    let costOfTransport = (numberOfKilometers * 0.5 * bricksWeight) / 10;
    price += costOfTransport;
    setPrice(price);
    setTransportPrice(costOfTransport);
  }

  useEffect(() => {
    setBricksWeight(
      isBricksPremium ? numberOfBricks * 1.75 : numberOfBricks * 1.5
    );
  }, [numberOfBricks, isBricksPremium, numberOfKilometers, bricksWeight]);

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
          Ilość km:
          <input
            type="number"
            name="numberOfKilometers"
            id="numberOfKilometers"
            onChange={(event) => {
              let value = isNaN(parseInt(event.target.value))
                ? 0
                : parseInt(event.target.value);
              setNumberOfKilometers(value);
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

        <button onClick={handleClick}>Pokaż szczegóły zamówienia</button>

        <p>
          <span>Zakupiona ilość cegieł: {numberOfBricks}, </span>
          <span>
            {isBricksPremium ? "cegła premium" : "cegła standardowa"},{" "}
          </span>
          <span>koszt zakupu cegieł: {price},</span>
          <span>
            waga cegieł:
            {bricksWeight}kg
          </span>
          <span>Ilość km: {numberOfKilometers}</span>
          <span>Cena za transport: {transportPrice}</span>
        </p>
      </div>
    </>
  );
}

export default App;
