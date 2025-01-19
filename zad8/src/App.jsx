import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [numberOfNormalTickets, setNumberOfNormalTickets] = useState(0);
  const [numberOfReducedTickets, setNumberOfReducedTickets] = useState(0);
  const [hasBigFamilyCard, setHasBigFamilyCard] = useState(false);
  const [numberOfHours, setNumberOfHours] = useState(0);
  const [price, setPrice] = useState(0);

  function handleClick() {
    if (numberOfReducedTickets % 15 === 0) {
      setNumberOfReducedTickets(
        numberOfReducedTickets - numberOfReducedTickets / 15
      );
    }

    let price = 0;

    if (numberOfHours > 4) {
      price += 50 * numberOfNormalTickets;
      price += 25 * numberOfReducedTickets;
    } else {
      price += numberOfNormalTickets * 10 * numberOfHours;
      price += numberOfReducedTickets * 5 * numberOfHours;
    }

    if (hasBigFamilyCard) {
      price *= 0.9;
    }

    setPrice(price);
  }

  useEffect(() => {
    if (
      numberOfHours < 0 ||
      numberOfNormalTickets < 0 ||
      numberOfReducedTickets < 0
    ) {
      alert("Number in tickets and hours field must be higher than 0");
      return;
    }
  }, [numberOfNormalTickets, numberOfReducedTickets, numberOfHours]);

  return (
    <>
      <div>
        <label>
          Ilość biletów normalnych:
          <input
            type="number"
            name="numberOfNormalTickets"
            id="numberOfNormalTickets"
            onChange={(event) => {
              let value = isNaN(parseInt(event.target.value))
                ? 0
                : parseInt(event.target.value);
              setNumberOfNormalTickets(value);
            }}
          />
        </label>
        <label>
          Ilość biletów ulgowych:
          <input
            type="number"
            name="numberOfReducedTickets"
            id="numberOfReducedTickets"
            onChange={(event) => {
              let value = isNaN(parseInt(event.target.value))
                ? 0
                : parseInt(event.target.value);
              setNumberOfReducedTickets(value);
            }}
          />
        </label>
        <label>
          Ilość godzin:
          <input
            type="number"
            name="numberOfHours"
            id="numberOfHours"
            onChange={(event) => {
              let value = isNaN(parseInt(event.target.value))
                ? 0
                : parseInt(event.target.value);
              setNumberOfHours(value);
            }}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="hasBigFamilyCard"
            id="hasBigFamilyCard"
            value="hasBigFamilyCard"
            onClick={() => {
              setHasBigFamilyCard(!hasBigFamilyCard);
            }}
          />
          Karta dużej rodziny
        </label>

        <button onClick={handleClick}>Oblicz koszt</button>
        <p>Całkowity koszt wstępu do aquaparku: {price}zł</p>
      </div>
    </>
  );
}

export default App;
