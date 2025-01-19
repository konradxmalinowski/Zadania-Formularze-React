import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [numberOfAnnouncement, setNumberOfAnnouncement] = useState(0);
  const [isOldClient, setIsOldClient] = useState(false);
  const [price, setPrice] = useState(0);

  function calculatePrice() {
    if (numberOfAnnouncement < 0) {
      alert("to small number od announcement");
      return;
    }

    let price;
    if (numberOfAnnouncement >= 1 && numberOfAnnouncement <= 50) {
      price = numberOfAnnouncement * 2;
    } else if (numberOfAnnouncement <= 100) {
      price = numberOfAnnouncement * 1.5;
    } else if (numberOfAnnouncement > 100) {
      price = numberOfAnnouncement;
    }

    setPrice(isOldClient ? price * 0.8 : price);
  }

  useEffect(calculatePrice, [isOldClient, numberOfAnnouncement]);

  return (
    <>
      <div>
        <label>
          Liczba ogłoszeń:
          <input
            type="number"
            name="numberOfAnnouncement"
            id="numberOfAnnouncement"
            onChange={(event) => {
              let value = isNaN(parseInt(event.target.value))
                ? 0
                : parseInt(event.target.value);
              setNumberOfAnnouncement(value);
            }}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="isOldClient"
            id="isOldClient"
            onClick={() => {
              setIsOldClient(!isOldClient);
            }}
          />
          Stały klient
        </label>

        <p>Całkowity koszt:{price}zł</p>
      </div>
    </>
  );
}

export default App;
