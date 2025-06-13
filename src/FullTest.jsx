import Option from "./Option";
import { shuffleArray } from "./extra";

export default function FullTest({data}) {
  return (
    <>
    {data?.map((e, index) => {
      const shuffeledOptions = shuffleArray(e?.options);
        return (
          <div className="qScreen" key={index}>
            <p>{`${index + 1}. ` + e?.question}</p>
            <div className="options">
              <Option letter={"A. "} option={shuffeledOptions[0]?.q} answer={shuffeledOptions[0]?.a}  />
              <Option letter={"B. "} option={shuffeledOptions[1]?.q} answer={shuffeledOptions[1]?.a}  />
              <Option letter={"C. "} option={shuffeledOptions[2]?.q} answer={shuffeledOptions[2]?.a}  />
              <Option letter={"D. "} option={shuffeledOptions[3]?.q} answer={shuffeledOptions[3]?.a}  />
            </div>
          </div>
        );
      })}
    </>
  )
}
