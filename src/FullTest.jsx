import { useMemo, useState } from "react";
import Option from "./Option";

export default function FullTest({data}) {
  const [result,setResult] = useState([]);

  const handle = (value) =>{
    setResult((prev)=>[...prev, value])
  }

  const randomNumbers = useMemo(() => {
    return data?.map(() => {
      const numbers = [1, 2, 3, 4];
      const results = [];

      for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        const randomNumber = numbers.splice(randomIndex, 1)[0];
        results.push(randomNumber);
      }

      return results;
    });
  }, [data]);
  
  return (
    <>
    {data?.map((e, index) => {
        const random = randomNumbers[index];
        return (
          <div className="qScreen" key={index}>
            <p>{`${index + 1}. ` + e?.question}</p>
            <div className="options">
              <Option letter={"A. "} option={e?.options?.[random[0] - 1]} answer={e?.answer} onset={handle} res={result}/>
              <Option letter={"B. "} option={e?.options?.[random[1] - 1]} answer={e?.answer} onset={handle} res={result}/>
              <Option letter={"C. "} option={e?.options?.[random[2] - 1]} answer={e?.answer} onset={handle} res={result}/>
              <Option letter={"D. "} option={e?.options?.[random[3] - 1]} answer={e?.answer} onset={handle} res={result}/>
            </div>
          </div>
        );
      })}

      <h3 style={{textAlign: "center"}}>To'gri javoblar soni: {result.length}</h3>
    </>
  )
}
