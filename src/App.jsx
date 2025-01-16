import { useState } from 'react';
import './App.css'
import FullTest from './FullTest';
import {data} from "./assets/data"

function App() {
  const [test, setTest] = useState(false);

  function getRandomNumbersWithoutRepeating(max) {
    // Step 1: Create an array of numbers from 1 to max
    const numbers = Array.from({ length: max }, (_, i) => i + 1);
  
    // Step 2: Shuffle the array using Fisher-Yates algorithm
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
    }
  
    return numbers;
  }
  
  const uniqueRandomNumbers = getRandomNumbersWithoutRepeating(119).slice(0, 30);
  const randomTest = uniqueRandomNumbers?.map((index)=> data?.[index]);

  return (
    <div className="window">
      {!test ? <div className='choose'>
        <p>Test sonini tanlang.</p>
        <button onClick={()=>setTest(120)}>120 ta To'liq test</button>
        <button onClick={()=>setTest(30)}>30 ta random</button>
      </div>
      :
      <FullTest data={test === 120 ? data : randomTest} />}
    </div>
  );
}

export default App
