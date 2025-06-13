import { useState } from "react";
import "./App.css";
import FullTest from "./FullTest";
import { dataKorp, dataKpi } from "./assets/data";
import { getRandomNumbersWithoutRepeating } from "./extra";

function App() {
  const [test, setTest] = useState(false);
  const [test2, setTest2] = useState(false);
  const [test3, setTest3] = useState(false);

  const uniqueRandomNumbers = getRandomNumbersWithoutRepeating(241).slice(
    0,
    10
  );
  const randomTest = uniqueRandomNumbers?.map((index) => dataKorp?.[index]);

  const uniqueRandomNumbers2 = getRandomNumbersWithoutRepeating(349).slice(
    0,
    10
  );
  const randomTest2 = uniqueRandomNumbers2?.map((index) => dataKpi?.[index]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        // Swap elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

  return (
    <div className="window">
      {!test ? (
        <div className="choose">
          <p>Korp madaniyat test sonini tanlang.</p>
          <button onClick={() => setTest(242)}>242 ta To'liq test</button>
          <button onClick={() => setTest(10)}>10 ta random</button>
        </div>
      ) : (
        <FullTest data={test === 242 ? shuffleArray(dataKorp) : randomTest} />
      )}

      {!test2 ? (
        <div className="choose">
          <p>KPI test sonini tanlang.</p>
          <button onClick={() => setTest2(350)}>350 ta To'liq test</button>
          <button onClick={() => setTest2(10)}>10 ta random</button>
        </div>
      ) : (
        <FullTest data={test2 === 350 ? shuffleArray(dataKpi) : randomTest2} />
      )}

      {!test3 ? (
        <div className="choose">
          <p>Ikkovini aralawuvidan test sonini tanlang.</p>
          <button onClick={() => setTest3(592)}>592 ta To'liq test</button>
          <button onClick={() => setTest3(20)}>20 ta random</button>
        </div>
      ) : (
        <FullTest data={test3 === 592 ? shuffleArray([...dataKorp, ...dataKpi]) : [...randomTest, ...randomTest2]} />
      )}
    </div>
  );
}

export default App;
