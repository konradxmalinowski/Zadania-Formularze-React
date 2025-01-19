import { useState } from "react";

function App() {
  const [kilometersNumber, setKilometersNumber] = useState(0);
  const [isFromCity, setIsFromCity] = useState(false);

  return (
    <>
      <form action="" method="">
        <label>
          Ilość kilometrów:
          <input
            type="number"
            name="kmNumber"
            id="kmNumber"
            onChange={(event) => {
              let value = isNaN(event.target.value)
                ? 0
                : parseInt(event.target.value);
              setKilometersNumber(value);
            }}
          />
        </label>
        <label>
          <input
            type="checkbox"
            id="fromCity"
            name="fromCity"
            onClick={() => {
              setIsFromCity(!isFromCity);
            }}
          />
          Jestem z Gdańska
        </label>
      </form>
      {isFromCity ? (
        <p>Dowieziemy pizzę za darmo</p>
      ) : (
        <p>Dowóz będzie Cię kosztował {kilometersNumber * 2}zł.</p>
      )}
    </>
  );
}

export default App;
